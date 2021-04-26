import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state(){
      return{
        //api
        items : [],
        // final array for vendors and products
        array : [],
        //Products' length
        ProductNumber : null,
        // vendor's length
        vendorNumber : Number
      }
    },
    mutations:{
      dlt(state, ProductNumber){
        // change the number of vendors in the footer while all vendor's products are deleted
        if(ProductNumber === 1){
          state.vendorNumber -= 1
        }

      },
      Add_Product(state, payload){        
        state.items = payload.data.data.cart
      },
      Get_Vendor(state){     
        //get title of each vendor
        const Vendor_title = state.items.map(product=>{
          return product.vendor.title
        })
        //remove duplicated titles
        const Not_Duplicated_Vendor = Vendor_title.filter((item, index)=>{
          return Vendor_title.indexOf(item) === index;
        })
        //find the products of each vendoor
        const vendor_array = Not_Duplicated_Vendor.map(item=>{
          return state.items.filter(product=>product.vendor.title === item)
        })
        //make our vendor array included vendor's information and its products
        vendor_array.map(item=>{
          state.array.push({"vendor" : item[0].vendor, "product" : item})
        })

        // get the number of vendors
        state.vendorNumber = state.array.length
      },
      Add_Counter_and_VendorPrice(state){
        state.array.forEach(item => {
          let vendorprice = 0;
          // add a new variable for counter to each product , when the page created
          item.product.forEach(product => {
            Vue.set(product, "counter", 1)
            // add a new variable for each vendors' price , when the page created
            if(product.stock>=1){
              vendorprice += +product.price * product.counter
              Vue.set(item.vendor , "vendorPrice", vendorprice)
            }
          })
        });
      },
    },

    actions:{
      dlt(context, payload){
        context.commit('dlt', payload)
      },
      async GET_API(context){
        const product = await axios.get('https://internship-cart.iran.liara.run/api/v1.0/users/60578b513579bd08186a2138')
        context.commit('Add_Product', product)
        context.commit('Get_Vendor')
        context.commit('Add_Counter_and_VendorPrice')
      }
    },

    getters:{
      // count number of all products
      ProductNumber(state) {
        let newArray = state.array.map((vendor) => vendor.product)
        return newArray.flat().length
      },
      // total price in the footer => sum of each vendor's price
      TotalPrice(state){
        let total = 0;
        state.array.map(item =>{
          total += +item.vendor.vendorPrice
        })
        return total
      },
      // vendors array
      Get_Vendor(state){
        return state.array
      }
    }
})
  
export default store;
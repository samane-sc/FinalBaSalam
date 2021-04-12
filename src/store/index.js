import Vue from 'vue';
import Vuex from 'vuex';
import data from '../fakeproduct.json';

Vue.use(Vuex);

const store = new Vuex.Store({
    state(){
      return{
        items : data,

        // vendor's length
        vendorNumber : data.vendors.length,

      }
    },
    mutations:{
      dlt(state, ProductNumber){
        // change the number of vendors in the footer while all vendor's products are deleted
        if(ProductNumber === 1){
          state.vendorNumber -= 1
        }
      },

      // add a new variable for counter to each product , when the page created
      qtyVariable(state){
        state.items.vendors.map((vendor) => {
          vendor.products.map(product => {
            Vue.set(product, "counter", 1)
          })
        });
      },

      // add a new variable for each vendors' price , when the page created
      vendorPrice(state){
        state.items.vendors.map((vendor) => {
          let vendorprice = 0;
          vendor.products.map(product => {
            vendorprice += product.price * product.counter
            Vue.set(vendor, "vendorPrice", vendorprice)
          })
        });
      }
    },

    actions:{
      dlt(context, payload){
        context.commit('dlt', payload)
      },
      qtyVariable(context){
        context.commit('qtyVariable')
      },
      vendorPrice(context){
        context.commit('vendorPrice')
      }
    },

    getters:{
      // count number of all products
      productCount(state) {
        let newArray = state.items.vendors.map((vendor) => vendor.products)
        return newArray.flat().length
      },

      // total price in the footer => sum of each vendor's price
      TotalPrice(state){
        let total = 0;
        state.items.vendors.map(vendor =>{
          total += vendor.vendorPrice
        })
        return total
      }
    }
})
  
export default store;
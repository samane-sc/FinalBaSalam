import Vue from 'vue';
import Vuex from 'vuex';
import data from '../fakeproduct.json';

Vue.use(Vuex);

const store = new Vuex.Store({
    state(){
      return{
        items : data,
        totalcounter : 3,
        totalsum : null
      }
    },
    mutations:{

      
    },
    actions:{

    },
    getters:{
      sumOfOrders(state){
        return state.totalcounter;
      },
      vendorNumber(state){
        let vendorNumber = state.items.vendors.length
        return vendorNumber
      },
      productNumber(state){
        let productNumber =
        state.items.vendors.forEach(item => {
          productNumber = item.products.length
          return productNumber
        });
      },
    }
})
  
export default store;




    // mutations:{

      // getdata(state, payload){
      //   const venid = payload.venid;
      //   const proid = payload.proid;

      //   const newItem = {
      //     vendorId: venid,
      //     productId: proid,
      //     counter: 1,
      //     newprice : Number,
      //     oldprice : Number,
      //   };
      //   state.items.push(newItem);
      // },

      // increase(state, payload){
      //   const venid = payload.venid;
      //   const proid = payload.proid;
      //   let price = payload.newprice;
      //   let crossedPrice = payload.oldprice;

      //   const findid = state.items.findIndex(
      //     (item) => item.productId === proid && item.vendorId === venid
      //   );

      //   if ( state.items[findid] ) {
      //     // add one
      //     state.items[findid].counter++;
      //     // change prices
      //     state.items[findid].newprice = state.items[findid].counter * price ;
      //     state.items[findid].oldprice = state.items[findid].counter * crossedPrice;
          
      //     console.log(state.items[findid].counter);
      //     console.log(state.items[findid].newprice);
      //     console.log(state.items[findid].oldprice);
      //   } 
      //   state.totalCount++;
      //   // state.totalCount += productData.price;
      // },
      // decrease(state, payload){
      //   const venid = payload.venid;
      //   const proid = payload.proid;
      //   let price = payload.newprice;
      //   let crossedPrice = payload.oldprice;

      //   const findid = state.items.findIndex(
      //     (item) => item.productId === proid && item.vendorId === venid
      //   );

      //   if ( state.items[findid] && state.items[findid].counter >1 ) {
      //     // minus one
      //     state.items[findid].counter--;
      //     console.log(state.items[findid].counter);
      //     // change prices
      //     state.items[findid].newprice = state.items[findid].counter * price ;
      //     state.items[findid].oldprice = state.items[findid].counter * crossedPrice;
          
      //     console.log(state.items[findid].counter);
      //     console.log(state.items[findid].newprice);
      //     console.log(state.items[findid].oldprice);
      //   } 
      //   state.totalCount++;
      //   // state.totalCount += productData.price;
      // },
      // dlt(state, payload){
      //   // const venid = payload.venid;
      //   const proid = payload.proid;

      //   state.fakedata.splice(proid, 1);
      // },

      // total(state, payload){
      //   let price = payload.newprice;
      //   state.totalcost += price;
      // }
    // },
    // actions:{
    //   plus(context, payload){
    //     context.commit('total', payload)

    //   },
    //   minus(context, payload){
    //     context.commit('decrease', payload)
    //   },
    //   dlt(context, payload){
    //     context.commit('dlt', payload)
    //   },
    // },
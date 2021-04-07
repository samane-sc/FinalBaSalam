import Vue from 'vue';
import VueRouter from 'vue-router';
import page1 from '@/components/page1';
import page2 from '@/components/page2';
import page3 from '@/components/page3';
// import NextShoppingList from '@/components/page1/NextShoppingList.vue';


Vue.use(VueRouter);

const routes = [
    { path : '/', component : page1 },
    { path : '/pageTwo' , component : page2 },
    { path : '/pageThree' , component : page3 },
    // { path : '/nextShoppingList' , component :  NextShoppingList },
]
  
const router = new VueRouter({
    routes 
})

export default router;
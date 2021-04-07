<template>
<div>
    <button>
        <p :class= "{ basketStyle: item0 }" @click="checkClickA()">
            سبد خرید
        </p>
    </button>
    <button>
        <p :class= "{ basketStyle : item1 }" @click="checkClickB()">
            لیست خرید بعدی
        </p>
    </button>
    <keep-alive>
        <component :is="currentTab" > </component>
    </keep-alive>
</div>
</template>

<script>
import TheVendor from '../TheVendors';
import Empty from '../empty'

export default {
    data() {
        return{
            currentTab : TheVendor,
            // changing style while clicking
            item0 : true,
            item1 : false,
        }
    },
    components:{
        TheVendor,
        Empty
    },
    methods : {
        checkClickA() {
            this.item0 = !this.item0;
            this.item1 = !this.item1;
            this.currentTab = TheVendor;
            
        },
        checkClickB(){
            this.item1 = !this.item1;
            this.item0 = !this.item0;
            this.currentTab = Empty
        }
    }
}
</script>

<style scoped>
div {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    text-align: center; 
    flex-direction: row;
}
button {
    text-decoration: none;
    width: 180px; 
    height: 40px;  
    line-height: 36px;
    background-color: #ffffff; 
    border-top: #ffffff; 
    border-left: #ffffff; 
    border-right: #ffffff; 
    border-bottom: #ffffff;
    outline: none;
    cursor: pointer;
}

p {
    color: #535353;
    font-size: 14px;
    text-decoration: none;
    border-bottom: 2px #DFDFDF solid;
    font-family: iransans;
}

.basketStyle{
    border-bottom: 2px #DF3856 solid; 
    color: #DF3856;
}

</style>
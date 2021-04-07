<template>
<!-- vendors -->
<!--name of vendors-->
<div class="header">
    <div v-for="(item, indx) in items.vendors" :key="indx">
        <div v-show="dltVendor">
            <div class="disFlex vendorName">
                <span class="infoA">از غرفه: </span>
                <span class="infoB">{{ item.vendorName }}</span>
            </div>
            <!-- name of user -->
            <div class="disFlex" style="margin-right: 15.9px;">
                <img :src="item.profileImg" width="40" height="40" class="bioImg">
                <div class="disFlex disFlexCol">
                    <div class="bioName">{{ item.fullName }}</div>
                    <div class="disFlex">
                        <img src="@/assets/photoes/Vector.png" width="10.67px" height="13.32px" class="location">
                        <div class="bioCity">از {{ item.cityName }}</div>
                    </div>
                </div>
            </div>
            <!-- assign to products of each vendor -->
            <Product v-for="(data, id) in item.products" :key="id"
                :product-name="data.name" 
                :new-price="data.price"
                :crossed-price="data.price2"
                :product-img="data.img" 
                @dlt-event = "dltFunction" />

            <!-- assign to messages after each vendor -->
            <Msg :msg1="item.freesending" :msg2="item.freesendmsg"/>

            <!-- assign to discount code link in the botton of each vendor -->
            <DiscountCode v-if="item.discountcode" />

            <!-- assign to footer of each vendor -->
            <VendorsFooter :pro-num="item.products.length" />
        </div>
    </div>
</div>
</template>

<script>
import fakeproduct from "../../../fakeproduct.json";
import Product from "@/components/page1/TheVendors/Product.vue";
import VendorsFooter from "@/components/page1/VendorsFooter";
import DiscountCode from "@/components/page1/DiscountCode";
import Msg from "@/components/page1/TheMessage";

export default {
    components :{
        VendorsFooter,
        DiscountCode,
        Product,
        Msg,
    },

    data(){
        return{
            items : fakeproduct, 
            dltVendor : true
        }
    },
    methods:{
        dltFunction(){
            
        }
    }
}
</script>

<style scoped>
.vendorName{
    font-family: iransans;
    padding-top: 20px;
    color: #3E3E3E;
    font-size: 14px;  
}

.infoA{
    margin-right: 16.4px;
}

.infoB{
    padding-right: 5px;
  font-weight: 700; 
}

.bioName{
    font-family: iransans; 
    padding-bottom: 4.7px; 
    padding-right: 9.2px; 
    margin-top: 15.59px;
    color: #3E3E3E;
    font-size: 12px; 
    height: 19px; 
}

.bioCity{    
    padding-right: 6.67px; 
    font-family: iransans;
    font-size: 10px; 
    height: 26.63px; 

}

.bioImg {
  border-radius: 100px; 
  margin-top: 16.59px;
}

.location{
  margin-right: 7.17px;
}

.order{
    flex-direction: row; 
    margin-right: 16px; 
    margin-top: 15px;
    display: flex;
}

.orderName{
    font-family: iransans;
    margin-right: 16px; 
    color: #3E3E3E; 
    font-size: 12px; 
}

.orderCost{
    padding-top: 30.67px;
    flex-direction: row;  
    margin-right: 152px; 
    position: relative;
    color: #535353;
    font-size: 12px;
    display: flex;  
}

.orderToman{
    font-family: iransans;
    padding-right: 2px; 
}

pre {
    font-family: iransans;
    padding-left: 3px;
}

del {
    font-family: iransans;
    align-items: center;
    color: #9D9D9D; 
    padding-left: 7px;
    font-size: 12px; 
    display: flex;
}
.n{
    position: absolute; 
    bottom: 15.73px; 
    left: 3px;
}
</style>
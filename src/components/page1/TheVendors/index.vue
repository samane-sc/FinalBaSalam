<!-- vendors -->
<template>
<!--name of vendors-->
<div class="header">
    <div v-for="(item, indx) in Vendor" :key="indx">
        <div v-show="item.product.length">
            <div class="disFlex vendorName">
                <span class="infoA">از غرفه: </span>
                <span class="infoB">{{ item.vendor.title }}</span>
            </div>
            <!-- the name of user -->
            <div class="disFlex" style="margin-right: 15.9px;">
                <img v-if="item.vendor.owner.avatar.url==='#'" :src="default_img" width="40" height="40" class="bioImg">
                <img v-else :src="item.vendor.owner.avatar.url || default_img " width="40" height="40" class="bioImg">
                <div class="disFlex disFlexCol">
                    <div class="bioName">{{ item.vendor.owner.name }}</div>
                    <div class="disFlex">
                        <img src="@/assets/photoes/Vector.png" width="10.67px" height="13.32px" class="location">
                        <div class="bioCity">از {{ item.vendor.owner.city }}</div>
                    </div>
                </div>
            </div>
            <!-- show the products of each vendor -->
            <Product v-for="(data, index) in item.product" :key="index"
                :product-name="data.title" 
                :product-price="data.price"
                :primary-price="data.primaryPrice" 
                :product-img="data.pic"
                :counter="data.counter"
                :stock="data.stock"
                :product-id="index"
                :vendor-id="indx"
                :pro-num="item.product.length"
                @dlt-event = "item.product.splice(index, 1)"/>

            <!-- show the messages (ارسال رایگان) after each vendor -->
            <Msg :msg-vendor1="msgVendor1[indx]" :msg-vendor2="msgVendor2[indx]" />

            <!-- show the discount code (ثبت کد تخفیف) link in the botton of each vendor -->
            <DiscountCode :showcode="discountcode[indx]"/>

            <!-- show the footer (قیمت کل هر غرفه) of each vendor and send the number of products-->
            <VendorsFooter :pro-num="item.product.length" :vendor-price="item.vendor.vendorPrice" />
        </div>
    </div>
</div>
</template>

<script>
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
            //show  "هورا! ارسال از این غرفه برای شما رایگان شد" for the first Vendor which the vlue is true, and hide for the second one which th value is false
            msgVendor1 : [true, false],
            
            //show  "برای ارسال رایگان : ۴۵۰۰۰ تومان دیگه ازین غرفه خرید کنید" for the second Vendor which the vlue is true, and hide for the first one which th value is false
            msgVendor2 : [false, true],
            
            //show "ثبت کد نخفیف" for the first vendor which the vlue is true, and hide for the second one which th value is false
            discountcode : [true, false]
        }
    },
    computed:{
        default_img(){
            return 'https://s16.picofile.com/file/8429278218/Ellipse_4.png'
        },
        Vendor(){
            return this.$store.getters.Get_Vendor
        }
    },
    methods:{
    // FUNCTION FOR PERSIAN NUMBERS
    toFarsiNumber(n){
      const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      return n
        .toString()
        .replace(/\d/g, x => farsiDigits[x]);
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
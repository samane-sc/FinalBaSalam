<template>
    <!--body2-->
    <div class="posFixed">
        <div class="header myhead">
            <!--total price-->
            <div class="disFlex">
                <router-link to="/pageThree">
                    ادامه فرآیند خرید                    
                </router-link>
                <div class="disFlex disFlexCol" style="position: relative;">
                    <div class="productCost">
                         مبلغ قابل پرداخت
                    </div>
                    <pre class="productMoney">{{TotalPrice}} توما</pre>   
                    <img src="@/assets/photoes/۲۳ هزار تومان.png" width="6.79px" height="7.27px" >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        TotalPrice(){
            return this.$store.getters.TotalPrice
        }
    }
}
</script>

<style scoped>
.posFixed{
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: 2;
}
.myhead{
    height: 78px;
    margin-top: 39px;
}
a {
    text-decoration: none;
    width: 180px; 
    height: 48px; 
    background-color: #DF3856; 
    border: #DF3856;
    border-radius: 100px; 
    cursor: pointer;
    outline: none;
    margin-top: 16px;
    margin-right: 16px;
    color: #FAFAFA; 
    text-align: center; 
    line-height: 46px; 
    font-weight: 700;
    font-size: 16px; 
    font-family: iransans;
}

img{
    position: absolute; 
    bottom: 23.73px; 
    left: 7px;
}
.productCost{
    margin-top: 16.78px; 
    margin-right: 48.96px; 
    padding-right: 7px;
    margin-right: 55px;
    color: #535353; 
    font-size: 12px; 
    font-family: iransans;
}

.productMoney{
    margin-right: 80px; 
    font-weight: 700; 
    font-family: iransans;
    color: #535353; 
    margin-top: 2px; 
    font-size: 12px;
}
</style>
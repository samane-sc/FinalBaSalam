<template>
<div>
    <div class="disFlex">
        <button>
            <span>ادامه خرید فقط از این غرفه</span>
        </button>
        <div class="disFlex disFlexCol" style="position: relative;">
            <div class="disFlex productCost">
                <div> جمع مبلغ برای</div>
                <div class="ProductSum">{{this.$parent.toFarsiNumber(ProNum)}}</div>
                <div>کالا</div>      
            </div>
            <pre>{{this.$parent.toFarsiNumber(VendorPrice)}} توما</pre>
            <img src="@/assets/photoes/۲۳ هزار تومان.png" width="6.79px" height="7.27px" class="n">
        </div>
    </div>
    <div class="space"></div>
</div>
</template>

<script>
export default {
    props:[
        "ProNum",
        "VendorPrice"
    ],
}
</script>

<style scoped>
.space{
    width: 360px;
    background-color: #e5e5e5; 
    margin: auto; 
    height: 8px;
}

.n{
    position: absolute; 
    bottom: 22.73px; 
    left: 14px;
}

button{
    width: 172px; 
    height: 32px; 
    background-color: #DF3856; 
    border: #DF3856;
    border-radius: 100px; 
    margin-right: 14.4px; 
    margin-top: 20.87px; 
    margin-bottom: 12.85px;
}

.productCost{
    margin-top: 16.78px; 
    margin-right: 48.96px; 
    padding-right: 7px;
    color: #535353; 
    font-size: 12px; 
    font-family: iransans;
}

pre{
    margin-right: 80px; 
    font-weight: 700; 
    font-family: iransans;
    color: #535353; 
    margin-top: 2px; 
    font-size: 12px;
}

span{
    color: #FAFAFA; 
    font-size: 12px; 
    text-align: center; 
    line-height: 27px; 
    font-family: iransans;
}
.ProductSum{
    padding-right: 3px;
    padding-left: 3px;    
}
</style>
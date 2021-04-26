<template>
    <div class="posFixed">
        <div class="header">
            <!--total price-->
            <div class="disFlex">
                <router-link to="/pageTwo">
                    <div class="disFlex btn">
                        <div>  ادامه خرید از </div>
                        <div class="vendorsnum">{{toFarsiNumber(NumVendors)}}</div>
                        <div>غرفه</div>
                    </div>
                </router-link>
                <div class="disFlex disFlexCol productCost1">
                    <div class="disFlex productCost">
                        <span>
                            مبلغ قابل پرداخت 
                        </span>
                        <span class="vendorsnum">
                            {{toFarsiNumber(NumVendors)}}
                        </span>
                        <span>
                            غرفه
                        </span>
                    </div>
                    <pre>{{toFarsiNumber(TotalPrice)}} توما</pre>   
                    <img src="@/assets/photoes/۲۳ هزار تومان.png" width="6.79px" height="7.27px" class="productImg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default ({
    computed:{
        NumVendors (){
            // get the number of vendors
            return this.$store.state.vendorNumber
        },
        TotalPrice(){
            return this.$store.getters.TotalPrice ;
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
})
</script>


<style scoped>
.posFixed{
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: 2;
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
    margin: 11px 12px 11px 0px;
    font-family: iransans;
    color: #FAFAFA; 
    line-height: 46px; 
    font-weight: 700;
    text-align: center;
}
.productCost{
    margin: 16.78px 26.06px 0px 0px;  
    color: #535353; 
    font-size: 12px; 
    font-family: iransans;
}

pre {
    margin-right: 90px; 
    font-weight: 700; 
    font-family: iransans;
    color: #535353; 
    margin-top: 2px; 
    font-size: 12px;
}

.productCost1{
    position: relative;
}

.productImg{
    position: absolute; 
    bottom: 26.73px; 
    left: 3px;
}

.vendorsnum{
    padding-right: 3px;
    padding-left: 3px;
}

.btn {
    justify-content: center;
}
</style>
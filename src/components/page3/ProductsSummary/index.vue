<template>
<div>
    <div v-for="(item, index) in Vendor" :key="index">
      <div v-show="item.product.length">
        <div class="disFlex info">
            <span class="infoA">از غرفه: </span>
            <span class="infoB">{{ item.vendor.title }}</span>
        </div>

        <!--products-->
        <div class="order" v-for="(data, index) in item.product" :key="index" v-show="data.stock">
            <img :src="data.pic || default_img " width="82" height="82" >
            <div class="disFlex disFlexCol">
                <p class="orderName">{{ data.title }}</p>
                <div class="disFlex" style=" margin-top: 8px;">
                    <span class="number">{{ toFarsiNumber(data.counter) }} عدد</span>
                    <del>{{ toFarsiNumber(data.primaryPrice * data.counter) }}</del>
                </div>
                <div class="orderCost" style="position: relative;">
                    <pre> {{ toFarsiNumber(data.price * data.counter) }} </pre>
                    <p class="orderToman">توما</p>
                    <img src="@/assets/photoes/۲۳ هزار تومان.png" width="6.79px" height="7.27px" class="n">
                </div>
            </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>

export default {

    computed:{
        Vendor(){
            return this.$store.getters.Get_Vendor
        },
        default_img(){
            return 'https://s16.picofile.com/file/8429278542/image_1.png'
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
.info{
    padding-top: 20px;
    color: #3E3E3E;
    font-family: iransans;
    font-size: 14px;  
    background-color: #ffffff;
}

.infoA{
    margin-right: 16.4px;
}

.infoB{
  font-weight: 700; 
  padding-right: 5px;
}

.order{
    display: flex; 
    flex-direction: row; 
    height: 115px;
    padding-right: 16px; 
    padding-top: 15px;
    background-color: #ffffff;
    border-bottom: 1px solid #EEEEEE;
}

.orderName{
    color: #3E3E3E; 
    font-size: 12px; 
    margin-right: 16px; 
    font-family: iransans;
}

.orderCost{
    position: relative;
    display: flex; 
    flex-direction: row; 
    color: #535353; 
    font-size: 12px;
    margin-right: 152px; 
    margin-top: 7px;
}

.orderToman{
    padding-right: 2px; 
    font-family: iransans;
}

pre {
    margin-right: 30px;
    font-family: iransans;
    font-size: 12px;
}

del {
    padding-right: 162px;
    color: #9D9D9D; 
    font-size: 12px; 
    font-family: iransans;
    display: flex;
    align-items: center;
}
.n{
    position: absolute; 
    bottom: 15.73px; 
    left: 3px;
}

.number{
    color: #3E3E3E; 
    font-family: iransans; 
    font-size: 12px; 
    margin-right: 16px;
}

</style>
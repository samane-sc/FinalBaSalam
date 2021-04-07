<template>
<div>
    <div v-for="(item, index) in items.vendors" :key="index">
        <div class="disFlex info">
            <span class="infoA">از غرفه: </span>
            <span class="infoB">{{ item.vendorName }}</span>
        </div>

        <!--products-->
        <div class="order" v-for="(data, index) in item.products" :key="index">
            <img :src="data.img" width="82" height="82" >
            <div class="disFlex disFlexCol">
                <p class="orderName">{{ data.name }}</p>
                <div class="disFlex" style=" margin-top: 8px;">
                    <span class="number">۲ عدد</span>
                    <del>{{ data.price2 }}</del>
                </div>
                <div class="orderCost" style="position: relative;">
                    <pre> {{ data.price }} </pre>
                    <p class="orderToman">توما</p>
                    <img src="@/assets/photoes/۲۳ هزار تومان.png" width="6.79px" height="7.27px" class="n">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import fakeproduct from "../../../fakeproduct.json";
export default {

  data(){
    return{
      items : fakeproduct,
    }
  },

}
</script>

<style scoped>
.info{
    padding-top: 20px;
    color: #3E3E3E;
    font-family: iransans;
    font-size: 14px;  
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
    margin-right: 16px; 
    margin-top: 15px;
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
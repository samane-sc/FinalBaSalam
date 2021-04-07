<template>
<div>
    <div class="disFlex">
        <router-link to="/pageTwo">
            <img src="@/assets/photoes2/Vector.png" width="13px" height="13.01px" >
        </router-link>
        <p class="buy">پرداخت</p>
    </div>
    <p class="enterCode">
        اگر کد تخفیف دارید وارد کنید
    </p>
    <div class="discountCode">
        <input type="text" placeholder="کد تخفیف">
        <button class="discountBtn">
            <div class="accept">
                <b>تایید</b>
            </div>
        </button>
    </div>
    <div class="disFlex useCredit">
        <!-- changing the place and color of button while clicking -->
        <button class="useCreditBtn2" @click="animatebtn" :class="{animateclass : animate}"></button>
        <div class="useCreditBtn" @click="animatebtn" :class="{animatebg : animate}"></div>
        <p class="useCreditText">
            استفاده از اعتبار
        </p>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            animate: false,
        }
    },
    methods:{
        animatebtn(){
            this.animate = !this.animate
        }
    }
}
</script>

<style scoped>
a {
    background-color: #EEEEEE; 
    border: #EEEEEE;
    border-radius: 100px; 
    outline: none;
    cursor: pointer;
    width: 40px; 
    height: 40px; 
    margin: 10px 16px 0px 0px;
    padding: 11px 12px 0px 0px;
}
img{
    padding-top: 1px;
}

.buy{
    margin-right: 8px; 
    margin-top: 15px; 
    font-family: iransans; 
    font-size: 16px;
}
.enterCode{
    margin-top: 32px; 
    margin-right: 16px; 
    font-family: iransans; 
    font-size: 14px; 
    color: #3E3E3E;
}
.discountCode{
    border: 1px solid #9D9D9D; 
    border-radius: 8px; 
    margin-top: 8px; 
    margin-right: 16px; 
    width: 328px; 
    height: 40px;
}
input[type="text"]{
    width: 71%; 
    font-family: iransans; 
    font-size: 14px;
    color: #7D7D7D; 
    border: none; 
    margin-top: 8px; 
    margin-right: 16px; 
    outline: none;
}
.discountBtn{
    background-color:#EEEEEE; 
    width: 21%; 
    height: 32px; 
    border-radius: 100px; 
    border:#EEEEEE;
    float: left; 
    margin-top: 4px; 
    margin-left: 4px;
    cursor: pointer;
    outline: none;
}

.accept{
    color: #3E3E3E; 
    font-family: iransans; 
    font-size: 14px;
}
.useCredit{
    border-bottom: 1px solid #EEEEEE; 
    padding-bottom: 20px;
    margin-top: 24px;
}

.useCreditBtn{
    width: 45.5px; 
    height: 28px; 
    background-color: #EEEEEE; 
    border: #EEEEEE; 
    border-radius: 100px; 
    position: absolute;
    top: 174px;
    right: 20px;
    transition: all .5s ease-in;
}

.useCreditBtn2{
    width: 24.5px; 
    height: 24.5px; 
    border: 0.5px solid #9D9D9D; 
    background-color: #ffffff; 
    border-radius: 100px;
    margin-right: 39.75px;
    cursor: pointer;
    outline: none;
    transition: all .5s ease-out;
    z-index: 1;
}
.animateclass{
    transform: translateX(20px);
}
.animatebg{
    background-color: rgb(5, 133, 218);
}
.useCreditText{
    margin:3px 10px 0px 0px; 
    font-family: iransans; 
    color: #3E3E3E; 
    font-size: 14px;
}
</style>
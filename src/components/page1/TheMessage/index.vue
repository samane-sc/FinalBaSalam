<template>
<div>
    <div class="msg1" v-show="msg1">
        هورا! ارسال از این غرفه برای شما <b>رایگان شد.</b>
    </div>
    <!--msg-->
    <div class="msg2" v-show="msg2">
        <div class="greenBgrnd"></div>
        <b>برای ارسال رایگان :</b>
        <span>
            ۴۵۰۰۰ تومان دیگه ازین غرفه خرید کنید.
        </span>
    </div>
</div>

</template>

<script>
export default {
    props:[
        "msg1",
        "msg2"
    ]
}
</script>

<style scoped>

.msg1{
    margin: 13.86px 10.9px 0px;
    line-height:27.78px; 
    font-size: 12px; 
    padding-right: 9px;
    border-radius: 2px; 
    background-color: #DFF5F1; 
    width: 328.5px; 
    height: 28px; 
    color: #00786C; 
    font-family: iransans;
}
b{
    color: #00786C; 
    font-family: iransans;
}

span{
    color: #000000; 
    font-family: iransans;
}

.msg2{
    margin: 13.86px 10.9px 0px;
    line-height:27.78px; 
    font-size: 12px; 
    padding-right: 9px;
    border-radius: 2px; 
    background-color: #EEEEEE; 
    height: 28px; 
    position: relative; 
    z-index: 1;
}
.greenBgrnd{
    background-color:#DFF5F1; 
    width: 68%; 
    height: 100%; 
    position: absolute; 
    top: 0px; 
    right: 0px; 
    bottom: 0px; 
    z-index: -1;
}

</style>
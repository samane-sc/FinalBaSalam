<template>
<div>
    <div class="msg msg1" v-show="MsgVendor1">
        هورا! ارسال از این غرفه برای شما <b>رایگان شد.</b>
    </div>
    <!--msg-->
    <div class="msg msg2" v-show="MsgVendor2">
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
        "MsgVendor1",
        "MsgVendor2"
    ],
}
</script>

<style scoped>
.msg{
    margin: 13.86px 10.9px 0px;
    line-height:27.78px; 
    font-size: 12px; 
    padding-right: 9px;
    border-radius: 2px; 
    height: 28px;  
    font-family: iransans;
}

.msg1{
    background-color: #DFF5F1; 
    width: 328.5px; 
    color: #00786C; 
}

.msg2{
    background-color: #EEEEEE;  
    position: relative; 
    z-index: 1;
}

b{
    color: #00786C; 
}

span{
    color: #000000; 
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
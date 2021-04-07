<template>
<div class="header myheader">
    <div class="disFlex">
        <!--image flesh-> -->
        <router-link to="/">
            <img src="@/assets/photoes2/Vector.png" width="13px" height="13.01px">
        </router-link>
        <p class="addressSend">آدرس ارسال</p>
        <!--new address-->
        <button class="disFlex newaddBorder">
            <img src="@/assets/photoes2/Vector 2.png" width="16px" height="16px" class="addimg">
            <div class="newaddText">آدرس جدید</div>
        </button>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.myheader{
    height: 56.8px;
}
a {
    background-color: #EEEEEE; 
    border: #EEEEEE;
    border-radius: 100px; 
    outline: none;
    cursor: pointer;
    width: 40px; 
    height: 40px; 
    margin: 10px 16px 0px 0px;
    padding: 12px 12px 0px 0px;
}

.addressSend{
    margin: 18px 13px 0px 0px;
    font-family: iransans; 
    font-size: 16px;
}

.newaddBorder{
    margin: 12px 65px 0px 0px; 
    width: 131px; 
    height: 40px; 
    background-color: #ffffff;
    border: 1px solid #9D9D9D; 
    border-radius: 100px;
    outline: none;
    cursor: pointer;
}

.newaddText{
    margin: 9px 4px 0px 0px; 
    font-family: iransans; 
    font-size: 14px; 
    font-weight: 700; 
    color: #3E3E3E;
}

.addimg{
    margin-top: 10px; 
    margin-right: 15px;
}
</style>
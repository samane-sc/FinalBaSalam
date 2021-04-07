<template>
    <div class="header posFixed">
        <button>
            پرداخت
        </button>
    </div>  
</template>

<script>
export default {

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

div{
    height: 70px;
    margin-top: 33px;
}
button{
    width: 328px;
    height: 48px;
    background-color: #DF3856; 
    border: #DF3856;
    border-radius: 100px; 
    cursor: pointer;
    outline: none;
    margin-top: 11px;
    margin-right: 16px;
    color: #FAFAFA; 
    text-align: center; 
    line-height: 46px; 
    font-weight: 700;
    font-family: iransans;
}
</style>
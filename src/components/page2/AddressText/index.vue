<template>
<div class="header myheader">
    <!--send 1-->
    <div class="disFlex">
        <pre class="sendto">به: مهدی خدادادی</pre>
        <button class="iconSendto">
            <img src="@/assets/photoes2/Vector 3.png" width="20px" height="20.01px">
        </button>
    </div>
    <!--send 1 address-->
    <div class="disFlex addressDiv">
        <label class="address">
            قم، پردیسان، خیابان دانشگاه، بعد از میدان علوم، <br>
                رو به روی پایانه، ساختمان شرکت توسعه و <br>
            تدبیر جوامع سلام
            <input type="radio" name="addr" checked="checked">
            <span class="customCheckbox"></span>
        </label>
    </div>
    <!--send 2-->
    <div class="disFlex">
        <pre class="sendto">به: مهدی خدادادی</pre>
        <button class="iconSendto">
            <img src="@/assets/photoes2/Vector 3.png" width="20px" height="20.01px">
        </button>
    </div>
    <!--send 2 address-->
    <div class="disFlex addressDiv addressDiv2">
        <label class="address">
            قم، پردیسان، خیابان دانشگاه، بعد از میدان علوم، <br>
            رو به روی پایانه، ساختمان شرکت توسعه و <br>
            تدبیر جوامع سلام
            <input type="radio" name="addr">
            <span class="customCheckbox"></span>
        </label>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.myheader{
    height: 344px;
}
.sendto{
    margin-top: 21px; 
    margin-right: 58px; 
    font-family: iransans; 
    font-size: 14px; 
    color: #3E3E3E;
}

.iconSendto{
    width: 32px; 
    height: 32px; 
    background: #EEEEEE; 
    border:#EEEEEE;
    border-radius: 100px;
    margin-right: 148px; 
    margin-top: 16px;
    outline: none;
    cursor: pointer;
}

.addressDiv{
    border-bottom: 1px solid #EEEEEE; 
    padding-bottom: 16px;
    padding-right: 58px;
}

.addressDiv2{
    margin-bottom: 65px;
}
.address{
    width: 286px; 
    height: 66px; 
    display: block;
    position: relative;
    user-select: none;
    margin-top: 8px; 
    font-family: iransans; 
    font-size: 14px; 
    color: #535353;
}

/* Hide the browser's default radio button */
.address input {
    position: absolute;
    opacity: 0;
}

/* Create a custom radio button */
.customCheckbox{
    position: absolute;
    top: 0px;
    left: 300px;
    height: 22px;
    width: 22px;
    border: 1px solid #9D9D9D;
    border-radius: 50%;
    cursor: pointer;
}

/* When the radio button is checked, add a blue background */
.address input:checked ~ .customCheckbox {
    background-color: #DF3856;
    border: #DF3856;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.customCheckbox:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.address input:checked ~ .customCheckbox:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.address .customCheckbox:after {
   top: 6px;
   left: 6px;
   width: 10px;
   height: 10px;
   border-radius: 50%;
   background: white;
}

</style>
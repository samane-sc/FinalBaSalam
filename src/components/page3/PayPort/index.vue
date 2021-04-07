<template>
    <div class="pay">
        <span class="port">
            انتخاب درگاه پرداخت
        </span>
        <div class="disFlex">
            <label class="bank bank1">
                بانک سامان
                <input type="radio" name="addr" checked="checked">
                <span class="customCheckbox3"></span>
            </label>

            <label class="bank bank2">                
                بانک پاسارگاد
                <input type="radio" name="addr">
                <span class="customCheckbox3"></span>
            </label>

        </div>
        <div class="disFlex">
            <label class="bank bank3">                
                آسان پرداخت
                <input type="radio" name="addr">
                <span class="customCheckbox3"></span>
            </label>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.pay{
    margin-top: 16px; 
    border-bottom: 1px solid #EEEEEE; 
    padding-bottom: 16px;
}

.port{
    margin-right: 16px; 
    color: #3E3E3E; 
    font-family: iransans; 
    font-size: 16px;
}

.bank{
    display: block;
    position: relative;
    user-select: none;
    font-family: iransans; 
    font-size: 14px; 
    color: #3E3E3E; 
    width: 97px;
}

/* Hide the browser's default radio button */
.bank input {
    position: absolute;
    opacity: 0;
}

/* Create a custom radio button */
.customCheckbox3{
    position: absolute;
    top: 0px;
    left: 104px;
    height: 22px;
    width: 22px;
    border: 1px solid #9D9D9D;
    border-radius: 50%;
    cursor: pointer;
}

/* When the radio button is checked, add a blue background */
.bank input:checked ~ .customCheckbox3 {
    background-color: #DF3856;
    border: #DF3856;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.customCheckbox3:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.bank input:checked ~ .customCheckbox3:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.bank .customCheckbox3:after {
   top: 6px;
   left: 6px;
   width: 10px;
   height: 10px;
   border-radius: 50%;
   background: white;
}

.bank1{
    margin-top: 14px; 
    margin-right: 44px;
}
.bank2{
    margin-right: 57px; 
    margin-top: 14px;
}
.bank3{
    margin-top: 20px; 
    margin-right: 43px;
}

</style>
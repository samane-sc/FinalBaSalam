<template>
<div>
    <!-- change the style of body header while clicking -->
    <router-link to="/">
        <p :class= "{ basketStyle : item0 }" @click="checkClick()">
            سبد خرید
        </p>
    </router-link>
    <router-link to="./nextShoppingList">
        <p :class= "{ basketStyle : item1 }" @click="checkClick()">
            لیست خرید بعدی
        </p>
    </router-link>
</div>
</template>

<script>
export default {
    data() {
        return{
            item0 : true,
            item1 : false,
        }
    },
    methods : {
        checkClick() {
                this.item0 = !this.item0;
                this.item1 = !this.item1;
        }
    }
}
</script>

<style scoped>
div {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    text-align: center; 
    flex-direction: row;
}
a {
    text-decoration: none;
    width: 180px; 
    height: 40px;  
    line-height: 36px;
    background-color: #ffffff; 
    color: black;
    border-top: #ffffff; 
    border-left: #ffffff; 
    border-right: #ffffff; 
    outline: none;
    cursor: pointer;
}

p {
    font-size: 14px;
    text-decoration: none;
    border-bottom: 2px #DFDFDF solid;
    font-family: iransans;
}

.basketStyle{
    border-bottom: 2px #DF3856 solid; 
    color: #DF3856;
}

</style>
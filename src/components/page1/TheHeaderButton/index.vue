<!-- this component is for the shopping basket and next shopping list -->
<template>
<div>
    <!-- define which button is clicked and bind its css class to that particular button to change the colour and border to pink -->
    <div class="HeaderBtn">
        <button v-for="tab in tabs" :key="tab.index" @click=" currentTab = tab.componentName " 
        :class= "['button', { active : currentTab === tab.componentName }]">
            <p>
                <!-- write the name of button -->
                {{tab.btnName}}    
             </p>
        </button>
    </div>
    <!-- keep the "counter" of each product while changing between shopping-basket(سبد خرید) and next-shopping-list(ليست خريد بعدی) -->
    <keep-alive>
        <component :is="currentTab" > </component>
    </keep-alive>
</div>
</template>

<script>

import TheVendor from '@/components/page1/TheVendors';
import Empty from '@/components/page1/NextShoppingList'

export default {
    components:{
        TheVendor,
        Empty
    },
    data() {
        return{
            // the default button is "shopping-list (ليست خريد)"
            currentTab : "TheVendor",
            // buttons
            tabs : [
                {
                    btnName : "سبد خرید",
                    componentName : "TheVendor"
                },
                {
                    btnName : "لیست خرید بعدی",
                    componentName : "Empty"
                }
            ],
        }
    }
}
</script>

<style scoped>
.HeaderBtn {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    text-align: center; 
    flex-direction: row;
}
button {
    text-decoration: none;
    width: 180px; 
    height: 40px;  
    line-height: 36px;
    background-color: #ffffff; 
    border: none;
    outline: none;
    cursor: pointer;
}

p {
    color: #535353;
    font-size: 14px;
    text-decoration: none;
    border-bottom: 2px #DFDFDF solid;
    font-family: iransans;
}

/* the style for the button which is clicked */
button.active {
    border-bottom: 2px #DF3856 solid; 
    color: #DF3856;
}

</style>
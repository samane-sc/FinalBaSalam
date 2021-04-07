<template>
<div>
    <button v-for="tab in tabs" :key="tab" @click=" currentTab = tab.componentName " 
    :class= "['button', { active : currentTab === tab.componentName }]">
        <p>
            {{tab.btnName}}
        </p>
    </button>
    <keep-alive>
        <component :is="currentTab" > </component>
    </keep-alive>
</div>
</template>

<script>
import TheVendor from '../TheVendors';
import Empty from '../empty'

export default {
    data() {
        return{
            currentTab : "TheVendor",
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
    },
    components:{
        TheVendor,
        Empty
    },
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
button {
    text-decoration: none;
    width: 180px; 
    height: 40px;  
    line-height: 36px;
    background-color: #ffffff; 
    border-top: #ffffff; 
    border-left: #ffffff; 
    border-right: #ffffff; 
    border-bottom: #ffffff;
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

button.active {
    border-bottom: 2px #DF3856 solid; 
    color: #DF3856;
}

</style>
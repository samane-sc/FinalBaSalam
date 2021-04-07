<template>
<div>
    <!-- page 1 - while clicking on the next shopping list -->
    <TheHeaderBtn />
    <TheFooter />
</div>
</template>

<script>
import TheHeaderBtn from '@/components/page1/TheHeaderButton/NextShoppingList.vue';
import TheFooter from "@/components/page1/TheFooter";

export default {
    components:{
        TheHeaderBtn,
        TheFooter,
    },
}
</script>

<style>

</style>
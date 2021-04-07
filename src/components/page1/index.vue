<template>
<div>
  <!-- page 1 - while clicking on the shopping list buttton -->
  <!-- <TheHeaderBtn />
  <TheVendors /> -->
  <TheButton />
  <TheFooter />
</div>
</template>

<script>

// Components
// import TheHeaderBtn from "@/components/page1/TheHeaderButton/ShoppingList.vue";
// import TheVendors from "@/components/page1/TheVendors";
import TheButton from './TheButton'
import TheFooter from "@/components/page1/TheFooter";

export default {
  components: {
    // TheHeaderBtn,
    // TheVendors,
    TheButton,
    TheFooter,
  },
}
</script>

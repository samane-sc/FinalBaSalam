<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default ({
  components: {
    TheHeader,
  },
  
  // when the page created function called and variable "counter" added to each product with the value 1 
  created(){
    this.$store.dispatch('qtyVariable')
    this.$store.dispatch('vendorPrice')
  },
})
</script>


<style>

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
    font-family: 'iransans';
    src: 
        url('./fonts/eot/IRANSansWeb.eot?#') format('eot'),
        url('./fonts/ttf/IRANSansWeb.ttf') format('truetype'),
        url('./fonts/woff/IRANSansWeb.woff') format('woff'),
        url('./fonts/woff2/IRANSansWeb.woff2') format('woff2');
}

body{
  background-color: #e5e5e5;
  font-family: IRANSANSWeb;
  direction: rtl;
  height: 1500px;
}
.disFlex{
    display: flex; 
}

.disFlexCol{
    flex-direction: column;
}

.header{
    width: 360px;
    background-color: #ffffff; 
    margin: auto; 
    position: relative;
}
</style>

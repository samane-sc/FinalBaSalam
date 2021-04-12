<template>
<div>
  <div class="header header3">
    <SaveDiscountCode />
    <PayPort />
    <TheSummary />
    <ProductsSummary />
  </div>
  <TheFooter />

</div>
</template>

<script>
import SaveDiscountCode from '@/components/page3/SaveDiscountCode';
import ProductsSummary from '@/components/page3/ProductsSummary';
import TheSummary from '@/components/page3/TheSummary';
import TheFooter from '@/components/page3/TheFooter';
import PayPort from '@/components/page3/PayPort';

export default {
  components:{
    SaveDiscountCode,
    ProductsSummary,
    TheSummary,
    TheFooter,
    PayPort,
  },
}
</script>

<style>
.header3{
    height: 400px;
    margin-top: 8px;
}
</style>
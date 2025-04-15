<template>
  <div class="container">
    <HeaderSection></HeaderSection>
    <MainSection :products="productsList"></MainSection>
  </div>
  <FooterSection></FooterSection>


</template>

<script>
import { useProductStore } from './stores/productStore.js'
import FooterSection from './components/FooterSection.vue';
import HeaderSection from './components/HeaderSection.vue';
import MainSection from './components/MainSection.vue';
import products from './../products.js'
import { computed } from 'vue';

export default {
  name: 'App',
  components: {
    HeaderSection,
    MainSection,
    FooterSection
  },
  setup() {
    // get container + store data
    const store = useProductStore()
    store.setInitialProducts(products) 

    return {
    productsList: computed(() => store.products) 
  }
  }


}
</script>

<!-- how to send produc to the user, I think using parenting...using one way binding v-bind -->


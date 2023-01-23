<script setup lang="ts">
definePageMeta({
  layout: "products",
});
const { data: products } = await useFetch("https://fakestoreapi.com/products");
useHead({
  title: "Nuxt Dojo | Merch",
  meta: [
    {
      name: "description",
      content: "Nuxt 3",
    },
  ],
});
</script>
<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(product, index) in products" :key="index">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

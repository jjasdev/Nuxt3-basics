<script setup lang="ts">
const { id } = useRoute().params;
const url = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(url, { key: id });
if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}
</script>
<template>
  <!-- <p>Product details for {{ id }}</p> -->
  <div>
    <Head>
      <Title>Nuxt Demo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
  </div>
</template>

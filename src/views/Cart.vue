<template>
  <section id="crat">
    <div class="container">
      <div
        v-for="product in productCart"
        :key="product.product_id"
        :post="post"
      >
        <div class="card">
          {{ product.product_id }}
          {{ product.category }}
          {{ product.price }}
          {{ product.name }}
          <img :src="product.image" />
          <h1>Cart</h1>
          <button>delete</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      total: "",
    };
  },
  computed: {
    productCart() {
      return this.$store.cart;
    },
    product() {
      return this.$store.product;
    },
  },
};
</script>
<style scoped></style>

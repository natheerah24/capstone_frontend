<template>
  <div>
    <section class="Cart">
      <div class="wrapper">
        <h1>Shopping Cart</h1>
        <div class="product">
          <div class="shop">
            <div class="box">
              <div class="content">
                <div v-for="product in cartproducts" :key="product.product_id">
                  <!-- {{ product }} -->
                  <h4>Price:R {{ product.price }}</h4>
                  <h4>Price:R {{ product.price }}</h4>
                  <img v-bind:src="product.image" class="mb-2" alt="" />
                  <h3>{{ product.title }}</h3>
                  <p class="color-secondary">{{ product.category }}</p>
                  <!-- <p class="unit">
                  Quantity:
                  <select name="quantity" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </p> -->
                  <button @click="deleteFromCart(product.id)" class="btn-area">
                    <i class="fa fa-trash"></i>
                    <span class="btn2">Remove</span>
                  </button>
                  <div class="right-bar">
                    <p class="d-flex justify-content- gap-3">
                      <span>Subtotal: R{{ product.price }}</span>
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="namecart">
          <span>Total</span> <span>R{{ calculatePrice }}</span>
        </p>
        <router-link to="/login">Checkout</router-link>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      total: "",
    };
  },
  methods: {
    deleteFromCart(id) {
      return this.$store.dispatch("deleteFromCart", id);
    },
  },
  computed: {
    calculatePrice() {
      return this.$store.state.cart.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.price);
      }, 0);
    },
    cartproducts() {
      return this.$store.state.cart;
    },
    product() {
      return this.$store.state.product;
    },
  },
  // mounted() {
  //   this.$store.dispatch("getSingleproduct", this.id);
  // },
};
</script>
<style scoped>
#cart {
  background-color: white;
  min-height: 100vh;
}
</style>
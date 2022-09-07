<template>
  <section id="products">
    <h1 id="heading">Products</h1>
    <div class="wrap">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="Search By Category"
          v-model="search"
        />
        <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
    <div class="container">
      <div v-if="filteredProducts" class="row">
        <div
          v-for="product in filteredProducts"
          :key="product.product_id"
          :post="post"
          class="col-lg-4"
        >
          <div class="product-grid">
            <div class="product-image">
              <!-- <a href="#" class="image"> -->
              <img :src="product.image" />
              <!-- </a> -->
              <ul class="product-links">
                <li>
                  <router-link
                    :to="{
                      name: 'singleproduct',
                      params: { id: product.product_id },
                    }"
                    ><i class="fa fa-eye"></i
                  ></router-link>
                </li>
              </ul>
            </div>
            <div class="product-content">
              <span class="product-category">{{ product.category }}</span>

              <div class="price">R{{ product.price }}</div>
              <!-- <button class="add-to-cart" @click="addCart(product)">
                <i class="fas fa-shopping-bag"></i>
              </button> -->
              <router-link to="/cart" class="add-to-cart"
                ><i class="fas fa-shopping-bag"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- change loader to eating chocolate gif -->
      <div v-else id="loader" class="mx-auto"></div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    addCart(product) {
      this.$store.commit("updateCart", product);
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    // products() {
    //   console.log(this.$store.state.products);
    //   return this.$store.state.products;
    // },

    filteredProducts() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (
          !product.category?.toLowerCase().includes(this.search.toLowerCase())
        )
          isMatch = false;
        return isMatch;
      });
    },
  },
};
</script>
<style scoped>
body,
html {
  overflow-x: hidden;
}
#products {
  background-color: rgb(255 184 201);
  padding-top: 6rem;
}
#heading {
  font-family: "Titan One";
  font-size: 4rem;
  color: rgb(212 20 66);
  text-align: center;
  padding-bottom: 7rem;
}
.product-grid {
  font-family: "Lato", sans-serif;
  border: 2px solid #f2f2f2;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
}
.product-grid:hover {
  border-color: rgb(212 20 66);
}
.product-image {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 3rem;
}
.product-grid {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 3rem;
}
.product-grid .product-image a.image {
  display: block;
}
.product-grid .product-image img {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
.product-grid .product-links {
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
  top: 12px;
  right: 10px;
  z-index: 1;
}
.product-grid .product-links li {
  margin: 0 0 8px;
  transform: translate(140%, 0);
  transition: all 0.3s;
}
.product-grid .product-links li:nth-child(1) {
  transition-duration: 0.2s;
}
.product-grid .product-links li:nth-child(2) {
  transition-duration: 0.4s;
}
.product-grid .product-links li:nth-child(3) {
  transition-duration: 0.6s;
}
.product-grid:hover .product-links li {
  transform: translate(0, 0);
}
.product-grid .product-links li a {
  color: rgb(212 20 66);
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 14px;
  text-align: center;
  line-height: 42px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: block;
  transition: all 0.3s ease-in-out;
}
.product-grid .product-links li a:hover {
  color: #fff;
  background: rgb(212 20 66);
}
.product-grid .product-content {
  padding: 15px;
}
.product-grid .product-category {
  color: rgb(212 20 66);
  font-family: "Lato", sans-serif;
  text-transform: capitalize;
  margin: 0 0 8px;
  display: block;
}
.product-grid .product-category a {
  color: rgb(212 20 66);
  transition: all 0.3s ease 0s;
}
.product-grid .product-category a:hover {
  text-decoration: underline;
}
.product-grid .title {
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0 0 5px;
}
.product-grid .title a {
  color: #3d3d3d;
  transition: all 0.3s ease 0s;
}
.product-grid .title a:hover {
  color: rgb(212 20 66);
}
.product-grid .price {
  color: rgb(212 20 66);
  font-size: 20px;
  font-weight: 700;
  width: calc(100% - 43px);
  display: inline-block;
  font-family: "Lato", sans-serif;
}
.product-grid .add-to-cart {
  color: rgb(255 165 186);
  background: #f4f4f4;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  width: 40px;
  height: 40px;
  border-radius: 12px 12px 20px 12px;
  display: inline-block;
  transition: all 0.3s ease-in-out;
}
.product-grid .add-to-cart:hover {
  border-radius: 10px;
}
.product-grid:hover .add-to-cart {
  color: #fff;
  background: rgb(212 20 66);
}
.col-lg-4 {
  padding-bottom: 3rem;
}
.search {
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 9rem;
}

.searchTerm {
  width: 100%;
  border: 3px solid rgb(212 20 66);
  border-right: none;
  padding: 5px;
  height: 36px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
  font-family: "Lato", sans-serif;
}

.searchTerm:focus {
  color: rgb(212 20 66);
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid rgb(212 20 66);
  background: rgb(212 20 66);
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}
/* From uiverse.io by @Cornerstone-04 */
#loader {
  width: 50px;
  height: 50px;
  position: relative;
  z-index: 1;
  transform: translateX(-50%);
}

#loader::before,
#loader::after {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  mix-blend-mode: multiply;
  animation: rotate92523 2s infinite cubic-bezier(0.77, 0, 0.175, 1);
}

#loader::before {
  background-color: white;
}

#loader::after {
  background-color: rgb(212 20 66);
  animation-delay: 1s;
}

@keyframes rotate92523 {
  0%,
  100% {
    left: 35px;
  }

  25% {
    transform: scale(0.3);
  }

  50% {
    left: 0%;
  }

  75% {
    transform: scale(1);
  }
}

/*Resize the wrap to see the search bar change!*/
.wrap {
  width: 30%;
  position: absolute;

  left: 50%;
  transform: translate(-50%, -50%);
}
@media screen and (max-width: 990px) {
  .product-grid {
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 300px) {
  #heading {
    font-family: "Titan One";
    font-size: 3rem;
    color: rgb(212 20 66);
    text-align: center;
    padding-bottom: 7rem;
  }
}
@media screen and (max-width: 300px) {
  .product-grid .product-image[data-v-7177119e] {
    position: relative;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>

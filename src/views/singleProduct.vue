<template>
  <section id="singleproduct">
    <div v-if="product" id="Single">
      <div v-for="product in product" :key="product.id" :product="product">
        <div class="container-fluid" id="space">
          <div class="wrapper">
            <div class="img">
              <div class="banner-image img-fluid">
                <img id :src="product.image" />
              </div>
            </div>
            <h1>{{ product.name }}</h1>
            <p>{{ product.descriptions }}</p>
          </div>
          <ul>
            <li>
              <p>Category:{{ product.category }}</p>
            </li>
            <li>
              <p>Country:{{ product.country }}</p>
            </li>
            <li>
              <p>Size:{{ product.weight }}</p>
            </li>
            <li>
              <p>Price:{{ product.price }}</p>
            </li>
            <li>
              <p>Stock:{{ product.stock }}</p>
            </li>
          </ul>
          <div class="button-wrapper">
            <router-link to="/products" class="btn outline mb-3"
              >GO BACK</router-link
            >

            <button class="btn fill">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
};
</script>
<style scoped>
#singleproduct {
  background-color: rgb(255 184 201);
}
#space {
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgb(255 165 186);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 38px;
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5rem;
}

.wrapper {
  width: 100%;
  height: 100%;
}

.banner-image {
  /* background-image: url(https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80); */
  background-position: center;
  background-size: cover;
  height: 576px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
  object-fit: cover;
  aspect-ratio: 1;
}

h1 {
   font-family: "Titan One";
  color: rgba(255, 255, 255, 0.98);
  text-transform: uppercase;
  font-size: 2.4rem;
}

p {
  color: #fff;
  font-family: "Lato", sans-serif;
  text-align: center;
  font-size: 0.8rem;
  line-height: 150%;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.button-wrapper {
  margin-top: 18px;
}
/* .banner-image.img-fluid {
  height: 38rem;
} */
.btn {
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
}

.btn + .btn {
  margin-left: 10px;
}

.outline {
  background: transparent;
  color: rgb(212 20 66);
  border: 1px solid white;
  transition: all 0.3s ease;
}

.outline:hover {
  transform: scale(1.125);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgb(212 20 66);
  transition: all 0.3s ease;
}

.fill {
  background: rgb(212 20 66);
  color: rgba(255, 255, 255, 0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all 0.3s ease;
}

.fill:hover {
  transform: scale(1.125);
  border-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125));
  transition: all 0.3s ease;
}
ul {
  list-style: none;
}
@media screen and (max-width: 300px) {
  #heading{
    font-family: "Titan One";
    font-size: 3rem;
    color: rgb(212 20 66);
    text-align: center;
    padding-bottom: 7rem;
}

.banner-image[data-v-78afec5d] {
    /* background-image: url(https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80); */
    background-position: center;
    background-size: cover;
    height: 318px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.255);
    -o-object-fit: cover;
    object-fit: cover;
    aspect-ratio: 1;
}
.wrapper[data-v-78afec5d] {
    width: 100%;
    height: 100%;
    margin-left: 0rem;
}
img, svg {
    vertical-align: middle;
    width: -webkit-fill-available;
}
div#space {
    display: flex;
    flex-direction: column;
}
ul{
  padding: 0%;
}
.button-wrapper[data-v-78afec5d] {
    margin-top: 0px;
}
}
</style>

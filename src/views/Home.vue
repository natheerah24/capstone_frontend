<template>
  <section id="home">
    <h1 id="heading">Candy Kingdom</h1>
    <p id="slogan">We Give You Delicious Memories.</p>
    <div id="logo"></div>
    <img
      id="sweetimg"
      src="https://i.postimg.cc/5yh907Ht/pexels-somben-chea-1289365-removebg-preview.png"
      alt=""
    />
    <div id="btn">
      <router-link to="/about" class="btn btn-outline-light rounded-pill"
        >About</router-link
      ><router-link to="/products" class="btn btn-outline-light rounded-pill"
        >Products</router-link
      >
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
#home {
  background-color: rgb(255 184 201);
  min-height: 40vh;
  overflow: hidden;
}
a.btn.btn-outline-light.rounded-pill {
  margin-top: -93rem;
  margin-left: -3rem;
  margin-right: 5rem;
  color: rgb(212 20 66);
}
#logo {
  background-color: rgb(255 165 186);
  clip-path: circle(31.1% at 50% 49%);
  width: 40rem !important;
  height: 53rem !important;
  margin-left: 26rem !important;
  margin-top: -6rem !important;
}
#heading {
  font-family: "Titan One";
  font-size: 4rem;
  color: rgb(212 20 66);
  padding-top: 5rem;
  /* padding-left: 8rem; */
  text-align: center;
}
#sweetimg {
  width: 40rem !important;
  height: 33rem !important;
  margin-top: -39rem !important;
  margin-left: 25rem !important;
  position: absolute;
}
#slogan {
  font-family: "Titan One";
  font-size: 3rem;
  color: white;
  /* padding-left: 1rem; */
  text-align: center;
}
#btn {
  padding-left: 25rem;
  margin-left: 17rem;
}
/* @media screen and (max-width: 300px) {
  #logo {
    background-color: rgb(255 165 186);
    -webkit-clip-path: circle(31.1% at 50% 49%);
    clip-path: circle(31.1% at 50% 49%);
    height: 27rem !important;
    margin-left: -1rem !important;
    margin-top: -4rem !important;
    width: 20rem !important;
  }
  #sweetimg {
    margin-left: -1.5rem !important;
    width: 20rem !important;
    height: 15rem !important;
    margin-top: -18rem !important;
    position: absolute;
  }
  #heading {
    font-size: 3rem;
  }
  #slogan {
    font-size: 2rem;
  }
} */
@media screen and (min-width: 600px) {
  #logo {
    margin-left: 4rem;
    margin-top: -10rem;
    width: 30rem;
  }
  #sweetimg {
    margin-left: 0%;
    width: 37rem;
    height: 30rem;
    margin-top: -36rem;
  }
}
/* @media screen and (max-width: 375px) {
  #logo {
    height: 27rem !important;
    margin-left: -3rem !important;
    margin-top: -4rem !important;
    width: 30rem !important;
  }
  #sweetimg {
    margin-left: -4rem !important;
    width: 29rem !important;
    height: 26rem !important;
    margin-top: -27rem !important;
  }
} */
/* @media screen and (min-width: 300px) {
  #logo {
    margin-left: -2rem ;
    margin-top: -4rem ;
    width: 27rem ;
    height: 30rem ;
  }
  #sweetimg {
    margin-left: -2rem ;
    width: 26rem ;
    height: 22rem ;
    margin-top: -23rem ;
  }
} */
</style>
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
  width: 40rem;
  height: 53rem;
  margin-left: 25rem;
  margin-top: -6rem;
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
  width: 40rem;
  height: 33rem;
  margin-top: -39rem;
  margin-left: 24rem;
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
@media screen and (max-width: 300px) {
#logo{
    background-color: rgb(255 165 186);
    -webkit-clip-path: circle(31.1% at 50% 49%);
    clip-path: circle(31.1% at 50% 49%);
    width: 15rem;
    height: 27rem;
    margin-left: 2rem;
    margin-top: -6rem;
}
#sweetimg {
    width: 18rem;
    height: 16rem;
    margin-top: -20rem;
    margin-left: 0rem;
    position: absolute;
}
#heading{
  font-size: 3rem;
}
#slogan{
  font-size: 2rem;
}

}
@media screen and (max-width: 600px) {
  #logo{
    margin-left: 4rem;
    margin-top: -10rem;
    width: 30rem;
  }
  #sweetimg{
    margin-left: 0%;
    width: 37rem;
    height: 30rem;
    margin-top: -36rem;
  }
}

</style>
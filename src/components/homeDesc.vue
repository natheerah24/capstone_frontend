<template>
  <section id="home">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-md-6" id="left">
          <img id="logo"
          src=https://i.postimg.cc/FHPrKqZ9/Purple-Retro-Enjoy-Your-Sweet-Life-Circle-Sticker-1-removebg-preview.png
          alt="" />
          <h1>Candy Kingdom</h1>

          <h2 id="slogan">We Give You Delicious Memories.</h2>
        </div>
        <div class="col-md-6" id="right">
          <img
            id="landing"
            src="https://i.postimg.cc/Jz3jTSXc/pexels-karolina-grabowska-4202999-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.row {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  padding: 0%;
}
#right {
  background-color: #ab87ff;
  min-width: 50vw;
  min-height: 50vh;
  padding: 0%;
}
#left {
  background-color: #fface4;
  min-width: 50vw;
  min-height: 50vh;
  font-family: "DynaPuff", cursive;
  font-size: 5rem;
  color: #ab87ffb6;
  text-shadow: 2px 2px 5px #ff79d2;
  padding: 0%;
  margin: 0%;
}
#logo {
  width: 17rem;
}
#slogan {
  font-family: "Times New Roman", Times, serif;
  font-size: 2rem;
}
#landing {
  width: 100%;
  height: 100%;
}
</style>

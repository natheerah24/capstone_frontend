<template>
  <section id="about">
    <div class="container text-center">
      <h1 id="heading">About</h1>
      <div class="row justify-content-center">
        <div class="col-md-8" id="left">
          <img
            id="about-pic"
            src="https://i.postimg.cc/9M7s4Gzf/pexels-karolina-grabowska-4016511-removebg-preview.png"
            alt=""
          />
        </div>
        <div class="col-md-4" id="right">
          
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.row.justify-content-center {
  display: flex;

  justify-content: center;
}
#right {
  background-color: #ab87ff;
  min-width: 50vw;
  min-height: 100vh;
}
#left {
  background-color: #fface4;
  min-width: 40vw;
  min-height: 100vh;
}
#about-pic {
  width: 100%;
  height: 100%;
}
#heading {
  font-family: "DynaPuff", cursive;
  font-size: 6rem;
  color: #ab87ffb6;
  text-shadow: 2px 2px 5px #ff79d2;
}
</style>

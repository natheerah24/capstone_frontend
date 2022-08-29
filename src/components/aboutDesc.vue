<template>
  <section id="about">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-md-8" id="left">
          <h1>About</h1>
        </div>
        <div class="col-md-4" id="right"></div>
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
  min-width: 40vw;
  min-height: 100vh;
}
#left {
  background-color: #fface4;
  min-width: 50vw;
  min-height: 100vh;
  font-family: "DynaPuff", cursive;
  font-size: 6rem;
  color: #ab87ffb6;
  text-shadow: 2px 2px 5px #ff79d2;
}
</style>

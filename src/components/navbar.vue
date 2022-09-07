<template>
  <nav class="navbar navbar-expand-lg opacity-75">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><i class="fa-solid fa-candy-cane"></i
      ></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#Toggler"
        aria-controls="Toggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="Toggler">
        <ul id="ul" class="navbar-nav mb-1 mb-lg-0">
          <li class="nav-item"><router-link to="/home">Home</router-link></li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart"
              ><i class="fa-solid fa-bag-shopping"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users"
              ><i class="fa-regular fa-user"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- <button type="button" @click="refresh" id="log-out">
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
    </button> -->
  </nav>
</template>
<script>
export default {
  methods: {
    refresh() {
      window.location.reload;
    },
  },
};
</script>
<style scoped>
.navbar {
  background-color: rgb(255 184 201);
  border-radius: 12px;
  /* margin-top: 1.5rem; */
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
}

nav a {
  font-family: "Titan One";
  color: white;
  text-decoration: none;
  padding-left: 30px;
}

nav a.router-link-exact-active {
  color: rgb(212 20 66);
}
i.fa-solid.fa-candy-cane {
  color: rgb(212 20 66);
}
@media only screen and (max-width: 600px) {
  .navbar {
    width: 100%;
    padding: 1rem;
  }

  body,
  html {
    overflow-x: hidden;
  }
}
button#log-out {
  margin-left: -5rem;
}
button#log-out {
  background-color: rgb(212 20 66);
  border: none;
  border-radius: 25%;
}
i.fa-solid.fa-arrow-right-from-bracket {
  color: white;
}
</style>

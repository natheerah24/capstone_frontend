<template>
  <section id="register">
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->
        <router-link to="/login">
          <h2 class="inactive underlineHover">Sign In</h2></router-link
        >

        <h2 class="active">Sign Up</h2>

        <!-- Icon -->
        <div class="fadeIn first">
          <i class="fa-solid fa-lollipop"></i>
        </div>

        <!-- Register Form -->
        <p onclick="registerPage()"></p>
        <p onclick="createUser()" id="userLog"></p>
        <div></div>

        <form @submit.prevent="createUser()">
          <input
            type="text"
            id="name"
            class="fadeIn second"
            name="Full-name"
            placeholder="Fullname"
            v-model="full_name"
          />
          <input
            type="text"
            id="email"
            class="fadeIn second"
            name="Email"
            placeholder="Email"
            v-model="email"
          />
          <input
            type="text"
            id="phone"
            class="fadeIn second"
            name="number"
            placeholder="Contact Number"
            v-model="phone"
          />
          <input
            type="text"
            id="billing_adress"
            class="fadeIn second"
            name="billing_adress"
            placeholder="Billing Address"
            v-model="billing_address"
          />
          <input
            type="text"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="password"
            v-model="password"
          />
          <input
            type="text"
            id="shipping_address"
            class="fadeIn third"
            name="login"
            placeholder="default_shipping_address"
            v-model="default_shipping_address"
          />
          <input
            type="text"
            id="country"
            class="fadeIn third"
            name="login"
            placeholder="country"
            v-model="country"
          />
          <!-- <input
            type="text"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="re-enter password"
          /> -->
          <button>
            <input type="submit" class="fadeIn fourth" value="Sign Up" />
          </button>
        </form>
        <p v-if="showError" id="error">Username already exists</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  // name: "Register",
  components: {},

  data() {
    return {
      full_name: "",
      email: "",
      phone: "",
      billing_address: "",
      password: "",
      shippingdefault_shipping_address_address: "",
      country: "",
      showError: false,
    };
  },
  methods: {
    createUser() {
      this.$store.dispatch("createUser", {
        email: this.email,
        password: this.password,
        full_name: this.full_name,
        billing_address: this.billing_address,
        default_shipping_address: this.default_shipping_address,
        country: this.country,
        phone: this.phone,
      });
    },
  },
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
  // methods: {
  //   ...mapActions(["Register"]),
  //   async submit() {
  //     try {
  //       await this.Register(this.form);
  //       this.$router.push("/posts");
  //       this.showError = false
  //     } catch (error) {
  //       this.showError = true
  //     }
  //   },
  // },
};
</script>
<style scoped>
section#register {
  background-color: rgb(255 184 201);
}
/* BASIC */

#register {
  font-family: "Titan One";
  height: 100vh;
  background-color: rgb(255 184 201);
}

a {
  color: rgb(212 20 66);
  display: inline-block;
  text-decoration: none;
}

h2 {
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #dac2c2;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: rgb(212 20 66);
  border-bottom: 2px solid rgb(255 165 186);
}

/* FORM */

input[type="button"],
input[type="submit"],
input[type="reset"] {
  background-color: rgb(212 20 66);
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  font-family: "Titan One";
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: rgb(255 165 186);
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  transform: scale(0.95);
}

input[type="text"] {
  background-color: #f6f6f6;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  transition: all 0.5s ease-in-out;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus {
  background-color: #fff;
  border-bottom: 2px solid rgb(255 184 186);
}

input[type="text"]:placeholder {
  color: #cccccc;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  animation-name: fadeInDown;

  animation-duration: 1s;

  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;

    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;

    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;

    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;

    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;

  animation: fadeIn ease-in 1;

  animation-fill-mode: forwards;

  animation-duration: 1s;
}

.fadeIn.first {
  animation-delay: 0.4s;
}

.fadeIn.second {
  animation-delay: 0.6s;
}

.fadeIn.third {
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: rgb(255 184 186);
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover:after {
  width: 100%;
}

/* OTHERS */

*:focus {
  outline: none;
}

#icon {
  width: 60%;
}

* {
  box-sizing: border-box;
}
.wrapper.fadeInDown {
  padding-top: 8rem;
}
@media screen and (max-width: 600px) {
  section#register[data-v-63ae9146] {
    background-color: rgb(255 184 201);
    margin-bottom: 8rem;
  }
}
</style>

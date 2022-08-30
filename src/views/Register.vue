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
        <p onclick="userLogin()" id="userLog"></p>
        <div></div>

        <form>
          <input
            type="text"
            id="name"
            class="fadeIn second"
            name="Full-name"
            placeholder="Fullname"
          />
          <input
            type="text"
            id="email"
            class="fadeIn second"
            name="Email"
            placeholder="Email"
          />
          <input
            type="text"
            id="phone"
            class="fadeIn second"
            name="number"
            placeholder="Contact Number"
          />
          <input
            type="text"
            id="billing_adress"
            class="fadeIn second"
            name="billing_adress"
            placeholder="Billing Address"
          />
          <input
            type="text"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input
            type="text"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="re-enter password"
          />
          <input
            type="submit"
            class="fadeIn fourth"
            value="Log In"
            onclick="event.preventDefault(), registerNewUser()"
          />
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
section#register {
  background-color: #ab87ff;
}
/* BASIC */

#register {
  font-family: "DynaPuff", cursive;
  height: 100vh;
}

a {
  color: #ad92b7;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
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
  color: #cccccc;
  border-bottom: 2px solid #fface4;
}

/* FORM */

input[type="button"],
input[type="submit"],
input[type="reset"] {
  background-color: #fface4;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  font-family: "DynaPuff", cursive;
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;

  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: #fface4;
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"] {
  background-color: #f6f6f6;
  border: none;
  color: #ab87ff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;

  transition: all 0.5s ease-in-out;

  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #fface4;
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
  background-color: #fface4;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #fface4;
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
</style>
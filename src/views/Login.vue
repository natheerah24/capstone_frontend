<template>
  <section id="login">
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->
        <h2 id="title" class="active">Sign In</h2>
        <router-link to="/register">
          <h2 id="title" class="inactive underlineHover">
            Sign Up
          </h2></router-link
        >
        <!-- Icon -->
        <div class="fadeIn first">
          <i class="fa-solid fa-lollipop"></i>
        </div>

        <!-- Login Form -->
        <form>
          <input
            type="text"
            id="email"
            class="fadeIn second"
            name="login"
            placeholder="login"
          />
          <input
            type="password"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input
            type="submit"
            class="fadeIn fourth"
            value="Log In"
            onclick="event.preventDefault(), sendUserData()"
          />
        </form>

        <!-- Remind Passowrd -->
        <div id="formFooter">
          <a id="forgotpsw" class="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
/* BASIC */

#login {
  font-family: "Titan One";
  height: 100vh;
  background-color: rgb(255 184 201);
}

#forgotpsw {
  color: rgb(212 20 66);
  display: inline-block;
  text-decoration: none;
}

#title {
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

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;

  border-radius: 0 0 10px 10px;
}

/* TABS */

#title.inactive {
  color: #cccccc;
}

#title.active {
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

input[type="text"],
input[type="password"] {
  background-color: #f6f6f6;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: "Times New Roman", Times, serif;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  transition: all 0.5s ease-in-out;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #fff;
  border-bottom: 2px solid rgb(255 184 186);
}

input[type="text"]:placeholder,
input[type="password"]:placeholder {
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

/*  Fade-in Animation */
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

.underlineHover:hover {
  color: rgb(255 184 186);
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
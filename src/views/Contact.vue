<template>
  <section id="contact">
    <div class="row">
      <div class="col-md-6">
        <div id="bg">
          <h1 id="heading">
            Feel Free to <br />
            Contact Us
          </h1>
          <a @click="goto('bottom')" id="scroll-btn"
            ><i class="fa-solid fa-arrow-down"></i
          ></a>
        </div>
        <div class="col-md-6">
          <div id="contact-img"></div>
          <img
            id="person"
            src="https://i.postimg.cc/XYcdmvB7/pexels-matheus-henrin-2121323-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
      <div ref="bottom">
        <div class="form-bg">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="form-container">
                  <h3 class="title">Send Us a</h3>
                  <h2 id="title-2">Message</h2>
                  <form
                    class="form-horizontal"
                    action="https://formspree.io/f/xayknkwa"
                    method="POST"
                  >
                    <div class="form-group">
                      <input
                        type="name"
                        class="form-control"
                        placeholder="Full name"
                        name="name"
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder=" Email"
                        name="email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Message"
                        name="message"
                      />
                    </div>
                    <button class="btn btn-default">Send</button>
                  </form>
                </div>
              </div>
              <div class="col-md-6">
                <div class="container-fluid">
                  <div class="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.069675818386!2d18.4926986!3d-33.9856643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1661860005959!5m2!1sen!2sza"
                      width="600"
                      height="450"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="demo">
      <p scoped class="cntct">connect with us:</p>
      <a href="https://twitter.com/CandyKingdom14" class="link" target="_blank">
        <span><i class="fa-brands fa-twitter"></i></span>
      </a>
      <a
        href="https://www.instagram.com/candykingdom.wp/"
        class="link"
        target="_blank"
      >
        <span> <i class="fa-brands fa-instagram"></i></span>
      </a>
      <a
        href="https://www.facebook.com/Candy-Kingdom-100254202837936/"
        class="link"
        target="_blank"
      >
        <span> <i class="fa-brands fa-facebook"></i></span>
      </a>
      <a href="mailto:candykingdom.wp@gmail.com" class="link" target="_blank">
        <span><i class="fa-solid fa-envelope"></i></span>
      </a>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    goto(bottom) {
      let element = this.$refs[bottom];
      let top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>
<style scoped>
p {
  background-color: #cecece;
}
#person {
  width: 33rem;
  height: 46rem;
  margin-top: -47rem;
  margin-left: 52rem;
  position: absolute;
}
a#scroll-btn {
  margin-left: 20rem;
  font-size: 4rem;
  color: rgb(212 20 66);
}
a#scroll-btn :hover {
  color: white;
}
#contact-img {
  background-color: rgb(255 165 186);
  clip-path: circle(31.1% at 50% 49%);
  width: 40rem;
  height: 53rem;
  margin-left: 50rem;
  margin-top: -33rem;
}
#contact {
  background-color: rgb(255 184 201);
  min-height: 100vh;
  padding-top: 5rem;
  overflow: hidden;
}
.form-container {
  box-shadow: 10px 10px 8px #888888;
  font-family: "Nunito", sans-serif;
  text-align: center;
  padding: 50px 100px 55px;
  /* border-radius: 50%; */
}
.form-container .title {
  color: rgb(255 184 201);
  font-family: "Titan One";
  /* font-size: 4rem; */
  text-transform: capitalize;
  margin: 0 0 20px;
  display: inline-block;
  position: relative;
  font-size: 30px;
  line-height: 40px;
  font-weight: 400;
  letter-spacing: 0px;
  margin-bottom: 5px;
  /* margin-left: -7rem; */
  display: flex;
  flex-direction: row;
}
#title-2 {
  font-family: "Titan One";
  font-size: 60px;
  line-height: 60px;
  font-weight: 400;
  letter-spacing: 0px;
  color: rgb(212 20 66);
  display: flex;
  flex-direction: row;
}
#heading {
  color: white;
  font-family: "Titan One";
  font-size: 4rem;
  padding-left: 10rem;
  padding-top: 7rem;
}
.form-container .form-horizontal .form-group {
  font-size: 0px;
  margin: 0 0 15px;
}
.form-container .form-horizontal .form-control {
  color: #666157;
  background: #e6e6e6;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  height: 45px;
  padding: 6px 30px;
  border-radius: 50px;
  box-shadow: inset -3px -3px 10px #eee;
  border: none;
  border-top: 2px solid #cecece;
  border-left: 2px solid #cecece;
}
.form-container .form-horizontal .form-control:focus {
  outline: none;
  box-shadow: none;
}
.form-container .form-horizontal .form-control::placeholder {
  color: #666157;
  font-family: "Lato", sans-serif;
}
.form-container .form-horizontal .btn {
  color: #fff;
  background-color: rgb(212 20 66);
  font-size: 25px;
  font-family: "Lato", sans-serif;
  text-transform: capitalize;
  width: 100%;
  border: none;
  border-radius: 50px;
  transition: all 0.3s ease 0s;
}
.form-container .form-horizontal .btn:hover {
  letter-spacing: 3px;
}
.form-container .form-horizontal .btn:focus {
  outline: none;
}
.form-bg {
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: white;
}
div#bg {
  padding-bottom: 5rem;
}
/* p[data-v-40ab164b] {
  margin-top: 0;
  margin-bottom: 0rem;
  display: flex;
  justify-content: center;
  background-color: red;
} */
.container-fluid {
  margin-top: 0rem;
}
@media only screen and (max-width: 479px) {
  .form-container {
    padding: 50px 50px 70px;
    /* border-radius: 30%; */
  }
}
@media only screen and (max-width: 479px) {
  #heading[data-v-df212a54] {
    color: white;
    font-family: "Titan One";
    font-size: 3rem;
    padding-left: 1rem;
    padding-top: 0rem;
  }
  a#scroll-btn {
    margin-left: 8rem;
    font-size: 3rem;
    color: rgb(212 20 66);
  }
  #contact-img {
    background-color: rgb(255 165 186);
    -webkit-clip-path: circle(31.1% at 50% 49%);
    clip-path: circle(31.1% at 50% 49%);
    width: 15rem;
    height: 27rem;
    margin-left: 2rem;
    margin-top: -9rem;
  }
  #person {
    width: 16rem;
    height: 23rem;
    margin-left: 1rem;
    margin-top: -24rem;
    position: absolute;
  }
  #title-2[data-v-df212a54] {
    font-family: "Titan One";
    font-size: 46px;
    line-height: 60px;
    font-weight: 400;
    letter-spacing: 0px;
    color: rgb(212 20 66);
    display: flex;
    flex-direction: row;
  }
  .form-container[data-v-df212a54] {
    padding: 50px 27px 70px;
  }
  .container-fluid {
    margin-top: 3rem;
  }
  .map-responsive {
    overflow: hidden;
    padding-bottom: 50%;
    position: relative;
    height: 0;
  }
  .map-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
}
@media only screen and (max-width: 600px) {
  #contact-img {
    width: 26rem;
    height: 48rem;
    margin-left: 6rem;
    margin-top: -14rem;
  }
  #person[data-v-df212a54] {
    width: 29rem;
    height: 40rem;
    margin-top: -41rem;
    margin-left: 3rem;
    position: absolute;
  }
  #heading {
    padding-left: 7rem;
    padding-top: 0rem;
  }
  a#scroll-btn[data-v-df212a54] {
    margin-left: 17rem;
  }
  .container-fluid {
    margin-top: 3rem;
  }
  .map-responsive {
    overflow: hidden;
    padding-bottom: 50%;
    position: relative;
    height: 0;
  }
  .map-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
}
.link {
  color: #4b6584;
  font-family: "Fredoka One", cursive;
  font-size: 22px;
  line-height: 19px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  display: inline-block;
  transition: all 0.3s ease 0s;
}
.link:hover,
.link:focus {
  color: rgba(235, 59, 90, 0.8);
  text-shadow: -3px -3px rgba(235, 59, 90, 0.2);
  font-size: 25px;
}
.demo {
  display: flex;
  justify-content: flex-end;
  margin-left: 25rem;
  gap: 10px;
}
@media only screen and (max-width: 767px) {
  .link {
    margin-bottom: 30px;
  }
}
.cntct {
  color: #4b6584;
  background-color: none;
}
</style>

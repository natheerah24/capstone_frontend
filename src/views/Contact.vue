<template>
  <section id="contact">
    <div class="form-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="form-container">
              <h3 class="title">Contact Us</h3>
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
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
#contact {
  background-color: #fface4;
}
.form-container {
  background-color: #ab87ff;
  font-family: "Nunito", sans-serif;
  text-align: center;
  padding: 60px 100px 100px;
  /* border-radius: 50%; */
}
.form-container .title {
  color: #fface4;
  font-size: 30px;
  font-family: "DynaPuff", cursive;
  text-transform: capitalize;
  margin: 0 0 20px;
  display: inline-block;
  position: relative;
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
  font-family: "DynaPuff", cursive;
  font-style: italic;
}
.form-container .form-horizontal .btn {
  color: #fff;
  background-color: #fface4;
  font-size: 25px;
  font-family: "DynaPuff", cursive;
  font-style: italic;
  text-transform: capitalize;
  width: 100%;
  border: none;
  border-radius: 50px;
  box-shadow: inset -3px -3px 10px #ff79d2;
  transition: all 0.3s ease 0s;
}
.form-container .form-horizontal .btn:hover {
  letter-spacing: 3px;
}
.form-container .form-horizontal .btn:focus {
  outline: none;
}
@media only screen and (max-width: 479px) {
  .form-container {
    padding: 50px 50px 70px;
    /* border-radius: 30%; */
  }
}
</style>

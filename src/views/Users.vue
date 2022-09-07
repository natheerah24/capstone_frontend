<template>
  <div id="users">
    <div>
      <!-- <div v-for="users in user" v-bind:key="user.user_id"> -->
      <h1>Welcome {{ user.full_name }}</h1>
      <div class="card card-body" id="profileCard">
        <div class="row">
          <div class="col-md-3 col-sm-2 mx-auto" id="profileImageParent">
            <img
              class="profile-image"
              src="https://i.postimg.cc/CKB2gnLW/user-1.png"
              alt="profile image"
            />
          </div>
          <div class="col-md-5 col-sm-5 personalDetails mx-auto">
            <h3 class="personalHead">Personal Details:</h3>
            <ul>
              <li>Name:{{ user.full_name }}</li>
              <li>email:{{ user.email }}</li>
              <li>Phone:{{ user.phone }}</li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-5 address mx-auto">
            <h3 class="addressHead">Address:</h3>
            <ul>
              <li>Billing Address:{{ user.billing_address }}</li>
              <li>Shipping Address:{{ user.default_shipping_address }}</li>
              <li>Country:{{ user.country }}</li>
            </ul>
          </div>
        </div>
        <!-- </div> -->
      </div>
      <div class="dashboardCards">
        <div class="cartCard">
          <div class="card card-body">
            <img
              class="cardImage"
              src="https://i.postimg.cc/bNXBCqcY/shopping-bag.png"
            />
            <router-link to="/cart">
              <button class="btn btn-light">Go To Cart</button></router-link
            >
          </div>
        </div>
        <div class="editProfileCard">
          <div class="card card-body">
            <img
              class="cardImage"
              src="https://i.postimg.cc/nVSWvqTm/resume.png"
            />
            <button
              type="button"
              class="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Edit Profile
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Edit Profile
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <label class="inp" for="inp">
                      <input placeholder="" id="inp" type="text" />
                      <span class="label">Fullname</span>
                      <span class="focus-bg"></span>
                    </label>
                    <label class="inp" for="inp">
                      <input placeholder="" id="inp" type="text" />
                      <span class="label">Email</span>
                      <span class="focus-bg"></span>
                    </label>
                    <label class="inp" for="inp">
                      <input placeholder="" id="inp" type="text" />
                      <span class="label">Billing Address</span>
                      <span class="focus-bg"></span>
                    </label>
                    <label class="inp" for="inp">
                      <input placeholder="" id="inp" type="text" />
                      <span class="label">Shipping Address</span>
                      <span class="focus-bg"></span>
                    </label>
                    <label class="inp" for="inp">
                      <input placeholder="" id="inp" type="text" />
                      <span class="label">Country</span>
                      <span class="focus-bg"></span>
                    </label>
                    <label class="inp" for="inp">
                      <input placeholder="" id="inp" type="text" />
                      <span class="label">Phone</span>
                      <span class="focus-bg"></span>
                    </label>
                    <label class="inp" for="inp">
                      <input placeholder="" id="inp" type="text" />
                      <span class="label">User Type</span>
                      <span class="focus-bg"></span>
                    </label>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="logoutCard">
          <div class="card card-body">
            <img
              class="cardImage"
              src="https://i.postimg.cc/TYcp2P3w/logout.png"
            />
            <button class="btn btn-light" onClick="{userLogout}">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getUsers");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  font-family: "Titan One";
  color: rgb(212 20 66);
}
.profile-image {
  border-radius: 50%;
  width: 193px;
  height: 193px;
  color: white;
}
#profileCard {
  width: 90vw;
  margin: auto;
  border-radius: 18px;
  background-color: rgb(212 20 66);
  color: white;
}
.dashboardCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /*     margin-top: 10px; */
  width: 90vw;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.cardImage {
  width: 25vw;
  height: 25vw;
  filter: invert(1);
}
.card {
  margin-top: 10px;
  background-color: rgb(212 20 66);
  color: white;
}
.personalDetails[data-v-68be103e],
.address[data-v-68be103e] {
  margin-top: 2vw;
  /* text-align: left; */
  font-family: "Lato", sans-serif;
}
#profileImageParent {
  text-align: center;
}
ul {
  list-style: none;
  margin-left: 0px;
}
.btn {
  margin-top: 5px;
  background-color: rgb(255 136 164);
  color: white;
  border: none;
  font-family: "Lato", sans-serif;
}
@media (max-width: 992px) {
  .profile-image {
    width: 150px;
    height: 150px;
  }
}
@media (max-width: 768px) {
  .cardImage {
    width: 33.3vw;
    height: 33.3vw;
  }
  .profile-image {
    width: 100px;
    height: 100px;
  }
  .personalHead,
  .addressHead {
    font-size: 18px;
  }
}
@media (max-width: 576px) {
  .cardImage {
    width: 60vw;
    height: 60vw;
  }
  .profile-image {
    width: 50vw;
    height: 50vw;
  }
  .personalHead {
    margin-top: 30px;
    text-align: center;
  }
  .personalDetails {
    margin: auto;
  }
  .addressHead {
    margin-top: 10px;
    text-align: center;
  }
  .dashboardCards {
    display: none;
  }
}
div#users {
  margin-top: 5rem;
}
.inp {
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 190px;
  border-radius: 3px;
  overflow: hidden;
}

.inp .label {
  position: absolute;
  top: 20px;
  left: 12px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
}

.inp .focus-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.05);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
}

.inp input {
  appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 16px 12px 0 12px;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.02);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
  color: #4b6584;
  transition: all 0.15s ease;
}

.inp input:hover {
  background: rgba(0, 0, 0, 0.04);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5);
}

.inp input:not(:-moz-placeholder-shown) + .label {
  color: rgba(0, 0, 0, 0.5);
  transform: translate3d(0, -12px, 0) scale(0.75);
}

.inp input:not(:-ms-input-placeholder) + .label {
  color: rgba(0, 0, 0, 0.5);
  transform: translate3d(0, -12px, 0) scale(0.75);
}

.inp input:not(:placeholder-shown) + .label {
  color: rgba(0, 0, 0, 0.5);
  transform: translate3d(0, -12px, 0) scale(0.75);
}

.inp input:focus {
  background: rgba(0, 0, 0, 0.05);
  outline: none;
  box-shadow: inset 0 -2px 0 rgb(212 20 66);
}

.inp input:focus + .label {
  color: rgb(212 20 66);
  transform: translate3d(0, -12px, 0) scale(0.75);
}

.inp input:focus + .label + .focus-bg {
  transform: scaleX(1);
  transition: all 0.1s ease;
}

.modal-body {
  background-color: rgb(255 184 201);
  display: grid;
}
button.btn.btn-primary {
  background-color: rgb(212 20 66);
  border: none;
  margin-bottom: 2rem;
}
button.btn.btn-secondary {
  background-color: rgb(255 136 164);
  border: none;
  margin-bottom: 2rem;
}
.modal-header {
  background-color: rgb(255 184 201);
  border: none;
}
.modal-footer {
  background-color: rgb(255 184 201);
  border: none;
}
h5#exampleModalLabel {
  font-family: "Titan One";
  color: rgb(212 20 66);
}
</style>
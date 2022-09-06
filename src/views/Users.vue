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
            <button class="btn btn-warning" onClick="{navigateToCart}">
              Go To Cart
            </button>
          </div>
        </div>
        <div class="editProfileCard">
          <div class="card card-body">
            <img
              class="cardImage"
              src="https://i.postimg.cc/nVSWvqTm/resume.png"
            />
            <button class="btn btn-warning" onClick="{navigateToEditProfile}">
              Edit Profile
            </button>
          </div>
        </div>
        <div class="logoutCard">
          <div class="card card-body">
            <img
              class="cardImage"
              src="https://i.postimg.cc/TYcp2P3w/logout.png"
            />
            <button class="btn btn-warning" onClick="{userLogout}">
              Logout
            </button>
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
.personalDetails,
.address {
  margin-top: 2vw;
  /* text-align: left; */
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
</style>
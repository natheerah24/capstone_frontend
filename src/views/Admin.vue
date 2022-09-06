<template>
  <div id="admin">
    <h1>Admin</h1>
    <h2>Users Table</h2>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add users
    </button>

    <!-- Modal -->
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
            <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
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
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <table id="userstable" class="table table-hover">
      <thead class="table-head">
        <tr>
          <th scope="col">user_id</th>
          <th scope="col">Fullname</th>
          <th scope="col">Email</th>
          <th scope="col">Billing Address</th>
          <th scope="col">Shipping Address</th>
          <th scope="col">Country</th>
          <th scope="col">Phone</th>
          <th scope="col">User Type</th>
          <th scope="col">Edit</th>

          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.user_id">
          <th scope="row">{{ user.user_id }}</th>
          <td>{{ user.full_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.billing_address }}</td>
          <td>{{ user.default_shipping_address }}</td>
          <td>{{ user.country }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.user_type }}</td>
          <td><i class="fa-solid fa-pen"></i></td>

          <td v-for="(item, index) in list" :key="index">
            {{ user.user_id }}
            <button @click="deleteFromList(index)">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Products Table</h2>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal1"
    >
      Add Products
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModal1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModal1Label">Add Product</h5>
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
              <span class="label">SKU</span>
              <span class="focus-bg"></span>
            </label>
            <label class="inp" for="inp">
              <input placeholder="" id="inp" type="text" />
              <span class="label">Name</span>
              <span class="focus-bg"></span>
            </label>
            <label class="inp" for="inp">
              <input placeholder="" id="inp" type="text" />
              <span class="label">Price</span>
              <span class="focus-bg"></span>
            </label>
            <label class="inp" for="inp">
              <input placeholder="" id="inp" type="text" />
              <span class="label"> Weight</span>
              <span class="focus-bg"></span>
            </label>
            <label class="inp" for="inp">
              <input placeholder="" id="inp" type="text" />
              <span class="label">Description</span>
              <span class="focus-bg"></span>
            </label>
            <label class="inp" for="inp">
              <input placeholder="" id="inp" type="text" />
              <span class="label">Image</span>
              <span class="focus-bg"></span>
            </label>
            <label class="inp" for="inp">
              <input placeholder="" id="inp" type="text" />
              <span class="label"> Category</span>
              <span class="focus-bg"></span>
            </label>
            <label class="inp" for="inp">
              <input placeholder="" id="inp" type="text" />
              <span class="label"> Country</span>
              <span class="focus-bg"></span>
            </label>
            <label class="inp" for="inp">
              <input placeholder="" id="inp" type="text" />
              <span class="label"> Stock</span>
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
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-hover">
      <thead class="table-head">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">SKU</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Weight</th>
          <th scope="col">Descriptions</th>
          <th scope="col">Image</th>
          <th scope="col">Category</th>
          <th scope="col">Country</th>
          <th scope="col">Stock</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" v-bind:key="product.product_id">
          <th scope="row">{{ product.product_id }}</th>
          <td>{{ product.sku }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.weight }}</td>
          <td>{{ product.descriptions }}</td>
          <td>{{ product.image }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.country }}</td>
          <td>{{ product.stock }}</td>
          <td><i class="fa-solid fa-pen"></i></td>
          <td><i class="fa-solid fa-trash"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    console.log(this.$route.params);
    this.$store.dispatch("getProducts", this.$route.params);
    console.log(this.$route.params);
    this.$store.dispatch("getUsers", this.$route.params);
  },
  data() {
    return {
      list: ["john", "doe", "jane"]
    };
  },
  methods: {
    deleteFromList(index) {
      this.list.splice(index, 1);
    }
  }

};
</script>
<style scoped>
h1 {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  font-family: "Titan One";
  color: rgb(212 20 66);
}
h2 {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  font-family: "Titan One";
  color: white;
}
#admin {
  margin: 4rem;
}
.table-head {
  background-color: rgb(212 20 66);
  color: white;
  font-family: "Lato", sans-serif;
}
td {
  color: white;
  font-family: "Lato", sans-serif;
}
th {
  color: white;
  font-family: "Lato", sans-serif;
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
h5#exampleModal1Label {
  font-family: "Titan One";
  color: rgb(212 20 66);
}
</style>

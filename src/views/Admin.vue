<template>
<div id="admin">
  <h1>Admin</h1>
  <h2>Users Table</h2>
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
        <th scope="col">Add</th>
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
        <td><i class="fa-solid fa-plus"></i></td>
        <td><i class="fa-solid fa-trash"></i></td>
      </tr>
    </tbody>
  </table>
  <h2>Products Table</h2>
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
        <th scope="col">Add</th>
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
        <td><i class="fa-solid fa-plus"></i></td>
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
#admin{
  margin: 4rem;
}
.table-head{
  background-color:rgb(212 20 66) ;
  color: white;
   font-family: "Lato", sans-serif;
}
td{
   color: white;
   font-family: "Lato", sans-serif;
}
th{
     color: white;
   font-family: "Lato", sans-serif;
}
</style>

import { createStore } from "vuex";

export default createStore({
  state: {
    users: null,
    products: null,
    // admin: null,
  },
  mutations: {
    setUsers: (state, users) => {
      state.users = users;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
  },
  actions: {
    login: async (context, payload) => {
      const { email, password } = payload;
      const response = await fetch(
        `http://localhost:3000/login?email=${email}&password=${password}`
      );
      const userData = await response.json();
      context.commit("setUser", userData[0]);
    },
    getUsers: async (context) => {
      fetch("https://candykingdom-api.herokuapp.com/users")
        .then((response) => response.json())
        .then((users) => context.commit("setUsers", users));
    },
    getUser: async (context, id) => {
      fetch("https://candykingdom-api.herokuapp.com/users/" + id)
        .then((res) => res.json())
        .then((user) => context.commit("setUser", user));
    },
    updateUser: async (context, User) => {
      fetch("https://candykingdom-api.herokuapp.com/users/" + id, {
        method: "PUT",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },

    createUser: async (context, user) => {
      fetch("https://candykingdom-api.herokuapp.com/users/", {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },

    deleteUser: async (context, id) => {
      fetch("https://candykingdom-api.herokuapp.com/users/" + id, {
        method: "DELETE",
      });
    },

    // getAdmin: async (context) => {
    //   fetch("http://localhost:3000/admin" + id)
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    // },
    // get all
    getProducts: async (context) => {
      fetch("https://candykingdom-api.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => context.commit("setProducts", data))
        .catch((err) => console.log(err.message));
    },
    // get 1
    getProduct: async (context, id) => {
      console.log(id);
      fetch("https://candykingdom-api.herokuapp.com/products/" + id)
        .then((response) => response.json())
        .then((json) => context.commit("setProduct", json));
    },
    // update
    updateProduct: async (context, product) => {
      const {
        sku,
        name,
        price,
        weight,
        descriptions,
        image,
        category,
        country,
        stock,
      } = product;
      fetch("https://candykingdom-api.herokuapp.com/products/" + id, {
        method: "PUT",
        body: JSON.stringify({
          sku: sku,
          name: name,
          price: price,
          weight: weight,
          descriptions: descriptions,
          image: image,
          category: category,
          country: country,
          stock: stock,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setProduct", json));
    },
  },
});

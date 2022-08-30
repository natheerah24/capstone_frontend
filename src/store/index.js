import { createStore } from "vuex";

export default createStore({
  state: {
    users: null,
    products: null,
    // admin: null,
   
  },
  mutations: {
    increment(state) {
      // mutate state
      state.count++;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
  },
  actions: {
    // login: async (context, payload) => {
    //   const { email, password } = payload;
    //   const response = await fetch(
    //     `http://localhost:3000/login?email=${email}&password=${password}`
    //   );
    //   const userData = await response.json();
    //   context.commit("setUser", userData[0]);
    // },
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

    getProducts: async (context) => {},

    getProduct: async (context, id) => {
      fetch("https://candykingdom-api.herokuapp.com/products/" + id)
        .then((response) => response.json())
        .then((json) => console.log(json));
    },

    updateProduct: async (context, product) => {
      fetch("https://candykingdom-api.herokuapp.com/products/" + id, {
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
  },
});

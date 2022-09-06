import router from "@/router";
import { createStore } from "vuex";

export default createStore({
  state: {
    users: null,
    products: null,
    // admin: null,
    cart: [],
    Token: null,
    user: null,
  },
  mutations: {
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setCart: (state, cart) => {
      state.cart = cart;
    },
    updateCart: (state, products) => {
      state.cart.push(products);
    },
    setToken: (state, Token) => {
      state.Token = Token;
    },
  },
  actions: {
    // Login
    login: async (context, payload) => {
      let res = await fetch(
        "https://candykingdom-api.herokuapp.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
          }),
        }
      );
      let data = await res.json();
      console.log(data);
      if (data.token) {
        context.commit("setToken", data.token);

        // Verify token
        //
        fetch("https://candykingdom-api.herokuapp.com/users/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((user) => {
            context.commit("setUser", user);
            // window.localStorage.setItem("user", JSON.stringify(user));

            // router.push("/home");
            console.log(data);
          });
      } else {
        alert("User not found");
      }
      router.push("/users");
    },
    // login: async (context, payload) => {
    //   const { email, password } = payload;
    //   const response = await fetch(
    //     `https://candykingdom-api.herokuapp.com/users?email=${email}&password=${password}`
    //   );
    //   const userData = await response.json();
    //   context.commit("setUser", userData);
    //   console.log(userData);
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
      fetch("https://candykingdom-api.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      console.log(`User ${(user.full_name, user.email)} created successfully`);
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
    // add to cart
    addCart: async (context, id) => {
      this.state.cart.product.push(id);
      context.dispatch("updateCart", this.state.cart);
    },
  },
});

import router from "@/router";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import swal from "sweetalert";

export default createStore({
  state: {
    users: null,
    products: null,
    product: null,
    // admin: null,
    cart: [],
    Token: null,
    user: null,
    asc: true,
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
    updateCart: (state, product) => {
      state.cart.push(product);
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },
    setToken: (state, Token) => {
      state.Token = Token;
    },
    Logout(state) {
      (state.user = ""), (state.Token = "");
    },
    sortByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price; //like vanilla javascript, this is how you make a sort function
      });
      if (!state.asc) {
        //if the asc is not true, it reverses the current order of the list
        state.products.reverse(); // reverts the order
      }
      state.asc = !state.asc; //states that when the function is run, asc becomes false instead of true
    },
  },
  actions: {
    // Login
    login: async (context, payload) => {
      let res = await fetch(
        "https://candykingdom-api.herokuapp.com/users/login",
        // "http://localhost:3001/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
          }),
          // mode: "no-cors",
        }
      );
      let data = await res.json();
      // alert(data);
      console.log(data);
      // alert(data.error);
      context.commit("setToken", data.token);
      if (data.error === "Email not found please register") {
        swal({
          icon: "error",
          title: "Error",
          text: "Email does not exist",
        });
      } else if (data.error === "password incorrect") {
        swal({ icon: "error", title: "Error", text: "Password is incorrect" });
      } else {
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
        router.push("/users");
      }
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
    updateUser: async (context, id) => {
      fetch("http://localhost:3001/users/" + id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((user) => context.commit("setUser", user));
    },

    createUser: async (context, user) => {
      fetch("https://candykingdom-api.herokuapp.com/users/register", {
        // fetch("http://localhost:3001/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          alert(json.msg);
          console.log(
            `User ${(user.full_name, user.email)} created successfully`
          );
        });
    },

    // deleteUser: async (context, id) => {
    //   fetch("https://candykingdom-api.herokuapp.com/users/" + id, {
    //     method: "DELETE",
    //   });
    // },

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
    createProduct: async (context, product) => {
      fetch("https://candykingdom-api.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          // "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // alert(products);
          // window.location.reload();
          context.commit("setProducts", data);
        });
    },
    // deleteProduct: async (context, id) => {
    //   // fetch("https://candykingdom-api.herokuapp.com/products/" + id, {
    //   //   method: "DELETE",
    //   //   headers: {
    //   //     // "Access-Control-Allow-Origin": "*",
    //   //     "Content-type": "application/json; charset=UTF-8",
    //   //   },
    //   //   // mode: "no-cors",
    //   // })
    //   //   .then((response) => response.json())
    //   //   .then((data) => {
    //   //     alert(data);
    //   //     window.location.reload();
    //   //   });
    //   alert(id);
    // },

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
    addToCart: async (context, id) => {
      this.state.cart.product.push(id);
      context.dispatch("updateCart", this.state.cart);
    },
    deleteFromCart: async (context, id) => {
      const newCart = context.state.cart.filter((product) => product.id != id);
      context.commit("removeFromCart", newCart);
    },
    //  getcart: (context, id) => {
    //   if (context.state.user === null) {
    //     alert("Please Login");
    //   } else {
    //     id = context.state.user.user_id;
    //     fetch("http://localhost:6869/users/" + id + "/cart", {
    //       // fetch("https://capstone-fin.herokuapp.com/users/" + id + "/cart", {
    //       method: "GET",
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //         "x-auth-token": context.state.token,
    //       },
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         // console.log(data)
    //         context.commit("setcart", data);
    //       });
    //   }
    // },
    // addTocart: async (context, product, id) => {
    //   console.log(product.product_id);
    //   id = context.state.user.user_id;
    //   // console.log(product);
    //   await fetch("http://localhost:6869/users/" + id + "/cart", {
    //     // await fetch("https://capstone-fin.herokuapp.com/users/" + id + "/cart", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       product_id: product.product_id,
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //       "x-auth-token": context.state.token,
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       context.dispatch("getcart", id);
    //     });
    // },
    // clearcart: async (context, id) => {
    //   id = context.state.user.user_id;
    //   await fetch("http://localhost:6869/users/" + id + "/cart", {
    //     // await fetch("https://capstone-fin.herokuapp.com/users/ id /cart", {
    //     method: "DELETE",
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //       "x-auth-token": context.state.token,
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       context.dispatch("getcart", id);
    //     });
    // },
    // deletecartItem: async (context, list, id) => {
    //   id = context.state.user.id;
    //   await fetch(
    //     "http://localhost:6869/users/" +
    //       id +
    //       "/cart/" +
    //       list,
    //     {
    //       method: "DELETE",
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //         "x-auth-token": context.state.token,
    //       },
    //     }
    //   )
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       context.dispatch("getcart", id);
    //     });
    // },

    deleteProduct: async (context, id) => {
      console.log(id);
      // await fetch("https://candykingdom-api.herokuapp.com/products/" + id, {
      await fetch("http://localhost:3001/products/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getProducts");
        });
    },
    deleteUser: async (context, id) => {
      console.log(id);
      // await fetch("https://candykingdom-api.herokuapp.com/products/" + id, {
      await fetch("http://localhost:3001/users/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {          console.log(data);
          context.dispatch("getUsers");
        });
    },
  },

  plugins: [createPersistedState()],
});

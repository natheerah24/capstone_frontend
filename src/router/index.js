import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
   
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    
    component: () =>
      import( "../views/Admin.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    
    component: () =>
      import("../views/Cart.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    
    component: () =>
      import("../views/Contact.vue"),
  },
  {
    path: "/Login",
    name: "login",
    
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/products",
    name: "products",
    
    component: () =>
      import( "../views/Products.vue"),
  },
  {
    path: "/register",
    name: "register",
   
    component: () =>
      import("../views/Register.vue"),
  },
  {
    path: "/products/:id",
    name: "singleproduct",

    component: () => import("../views/singleProduct.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

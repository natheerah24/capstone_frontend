<template>
  <section id="products">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="product-grid">
          <div class="product-image">
            <a href="#" class="image">
              <img src="images/img-1.jpg" />
            </a>
            <ul class="product-links">
              <li>
                <a href="#"><i class="fa fa-heart"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-eye"></i></a>
              </li>
            </ul>
          </div>
          <div class="product-content">
            <span class="product-category"><a href="">Men's</a></span>
            <h3 class="title"><a href="#">Men's Shirt</a></h3>
            <div class="price">$49.99</div>
            <a href="#" class="add-to-cart"
              ><i class="fas fa-shopping-bag"></i
            ></a>
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
#products {
  background-color: #ab87ff;
}
.product-grid {
  font-family: "Lato", sans-serif;
  border: 2px solid #f2f2f2;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
}
.product-grid:hover {
  border-color: #fface4;
}
.product-grid .product-image {
  position: relative;
}
.product-grid .product-image a.image {
  display: block;
}
.product-grid .product-image img {
  width: 100%;
  height: auto;
}
.product-grid .product-links {
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
  top: 12px;
  right: 10px;
  z-index: 1;
}
.product-grid .product-links li {
  margin: 0 0 8px;
  transform: translate(140%, 0);
  transition: all 0.3s;
}
.product-grid .product-links li:nth-child(1) {
  transition-duration: 0.2s;
}
.product-grid .product-links li:nth-child(2) {
  transition-duration: 0.4s;
}
.product-grid .product-links li:nth-child(3) {
  transition-duration: 0.6s;
}
.product-grid:hover .product-links li {
  transform: translate(0, 0);
}
.product-grid .product-links li a {
  color: #fface4;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 14px;
  text-align: center;
  line-height: 42px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: block;
  transition: all 0.3s ease-in-out;
}
.product-grid .product-links li a:hover {
  color: #fff;
  background: #fface4;
}
.product-grid .product-content {
  padding: 15px;
}
.product-grid .product-category {
  color: #fface4;
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  margin: 0 0 8px;
  display: block;
}
.product-grid .product-category a {
  color: #fface4;
  transition: all 0.3s ease 0s;
}
.product-grid .product-category a:hover {
  text-decoration: underline;
}
.product-grid .title {
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0 0 5px;
}
.product-grid .title a {
  color: #3d3d3d;
  transition: all 0.3s ease 0s;
}
.product-grid .title a:hover {
  color: #fface4;
}
.product-grid .price {
  color: #fface4;
  font-size: 20px;
  font-weight: 700;
  width: calc(100% - 43px);
  display: inline-block;
}
.product-grid .add-to-cart {
  color: #bcbcbc;
  background: #f4f4f4;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  width: 40px;
  height: 40px;
  border-radius: 12px 12px 20px 12px;
  display: inline-block;
  transition: all 0.3s ease-in-out;
}
.product-grid .add-to-cart:hover {
  border-radius: 10px;
}
.product-grid:hover .add-to-cart {
  color: #fff;
  background: #fface4;
}
@media screen and (max-width: 990px) {
  .product-grid {
    margin-bottom: 30px;
  }
}
</style>

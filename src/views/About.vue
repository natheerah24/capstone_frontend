<template>
  <section id="about">
    <div class="container text-center">
      <h1 id="heading">About</h1>
      <div class="row justify-content-center">
        <div class="col-md-6" id="left">
          <img
            id="about-pic"
            src="https://i.postimg.cc/9M7s4Gzf/pexels-karolina-grabowska-4016511-removebg-preview.png"
            alt=""
          />
        </div>
        <div class="col-md-6" id="right">
          <p>
            Snacks are the perfect snack when you're on the go! Whether it's a
            bag of chips or some cookies, we've got you covered. We offer a wide
            range of products from around the world, including USA, Canada, UK,
            Australia, New Zealand, Europe, Asia, Africa, and South America. Our
            snacks are available in many different flavors and shapes, including
            crunchy, salty, sweet, savory, and more. 
           <p> Product Features: 
            <ul>
           <li>- Low calorie snacks </li> 
          <li>- High protein snack</li>  
         <li> - No artificial ingredients </li>   
           <li> - 100% natural</li> 
             </ul>
             </p>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
p{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 30px;
}
#right {
  background-color: #ab87ff;
  min-width: 50vw;
  min-height: 100vh;
}
#left {
  background-color: #fface4;
  min-width: 50vw;
  min-height: 100vh;
}
#about-pic {
  width: 100%;
  height: 100%;
  padding: 0%;
}
#heading {
  font-family: "DynaPuff", cursive;
  font-size: 6rem;
  color: #ab87ffb6;
  text-shadow: 2px 2px 5px #ff79d2;
}
ul{
  list-style: none;
   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 30px;
}
</style>
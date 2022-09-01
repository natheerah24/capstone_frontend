<template>
  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 id="heading">A few words 
            <br />About Us</h1>
          <a @click="goto('bottom')" id="scroll-btn"
            ><i class="fa-solid fa-arrow-down"></i
          ></a>
        </div>

        <div class="col-md-6">
          <div id="about-img"></div>
          <img
            id="about-pic"
            src="https://i.postimg.cc/9M7s4Gzf/pexels-karolina-grabowska-4016511-removebg-preview.png"
            alt=""
          />
        </div>
        <div ref="bottom" id="paragraph">
          <div class="row">
            <div class="col-md-6">
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
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    goto(bottom) {
      let element = this.$refs[bottom];
      let top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>
<style scoped>
#about {
  background-color: rgb(255 184 201);
  min-height: 100vh;
  overflow: hidden;
}
div#paragraph {
    background-color: white;
}
#about-img {
  background-color: rgb(255 165 186);
  clip-path: circle(31.1% at 50% 49%);
  width: 40rem;
  height: 53rem;
  /* margin-left: 50rem; */
  /* margin-top: -23rem; */
}
#about-pic {
  width: 27rem;
  height: 39rem;
  margin-top: -45rem;
  margin-left: 6rem;
  position: absolute;
}
a#scroll-btn {
  margin-left: 17rem;
  font-size: 4rem;
  color: rgb(212 20 66);
}
a#scroll-btn :hover {
  color: white;
}
/* .row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
} */
p {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 30px;
}


#heading {
  color: white;
  font-family: "Titan One";
  font-size: 4rem;
  padding-left: 7rem;
  padding-top: 7rem;
}
ul {
  list-style: none;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 30px;
}
</style>
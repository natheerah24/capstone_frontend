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

        <div class="col">
          <div id="about-img"></div>
          <img
            id="about-pic"
            src="https://i.postimg.cc/9M7s4Gzf/pexels-karolina-grabowska-4016511-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
        <div id="bottom-bg">
        <div ref="bottom" id="paragraph">
          <div class="row">
            <div id="aboutcol" class="col">
              <h1 id="about-head">Our Service</h1>
          <p>
            Snacks are the perfect snack when you're on the go! Whether it's a
            bag of chips or some cookies, we've got you covered. We offer a wide
            range of products from around the world, including USA, Canada, UK,
            Australia, New Zealand, Europe, Asia, Africa, and South America. Our
            snacks are available in many different flavors and shapes, including
            crunchy, salty, sweet, savory, and more. 
             </p>
            <h3  id="desc"> Product Features: </h3>
            
            <p id="ft">
            <ul>
           <li>- Low calorie snacks </li> 
          <li>- High protein snack</li>  
         <li> - No artificial ingredients </li>   
           <li> - 100% natural</li> 
             </ul>
             </p>
         
          </div>
          <div class="col-md-6">
            <img src="https://i.postimg.cc/j2XJfz8G/pexels-sandra-filipe-6091088.jpg" alt="" id="bottom-img">
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
#bottom-bg{
  background-color: white;
  max-height: 84vh;

}
#about-img {
  background-color: rgb(255 165 186);
  clip-path: circle(31.1% at 50% 49%);
  width: 40rem;
  height: 53rem;
  margin-left: 40rem; 
 margin-top: -23rem;
}
#about-pic {
  width: 27rem;
  height: 39rem;
  margin-left: 46rem;
 margin-top: -45rem;
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
  font-family: "Lato", sans-serif;
  font-size: 25px;
  margin-left: 5rem;
  margin-right: 5rem;
  color: #4b6584;
}

img#bottom-img {
    max-width: 80%;
    height: 70%;
    border-radius: 5rem;
    /* padding-left: 5rem; */
    margin-top: 5rem;
    margin-left: 8rem;
}

#heading {
  color: white;
  font-family: "Titan One";
  font-size: 4rem;
  padding-left: 7rem;
  padding-top: 7rem;
}
#about-head{
  font-family: "Titan One";
   color: rgb(212 20 66);
   margin-left: 13rem;
   margin-top: 3rem;
    margin-bottom: 3rem;
}
#desc{
  font-family: "Titan One";
   color: rgb(212 20 66);
   margin-left: 13rem;
   margin-top: 3rem;
    margin-bottom: 1rem;
}
ul {
  list-style: none;
  font-family: "Lato", sans-serif;
  font-size: 25px;
  display: flex;
  flex-direction: column;
    align-items: center;
    padding-right: 7rem;
    margin-left: 2rem;
    color: #4b6584;
}
#aboutcol {
  
    margin-left: 4rem;
}
@media screen and (max-width: 300px) {
  #heading {
    color: white;
    font-family: "Titan One";
    font-size: 3rem;
    padding-left: 4rem;
    padding-top: 7rem;
}
a#scroll-btn {
    margin-left: 7rem;
    font-size: 3rem;
    color: rgb(212 20 66);
}
#about-img {
    background-color: rgb(255 165 186);
    -webkit-clip-path: circle(31.1% at 50% 49%);
    clip-path: circle(31.1% at 50% 49%);
    width: 5rem;
    height: 27rem;
    margin-left: 5rem;
    margin-top: -6rem;
}
#about-pic {
    width: 11rem;
    height: 19rem;
    margin-left: 3rem;
    margin-top: -22rem;
    position: absolute;
}
#about-head {
    font-family: "Titan One";
    color: rgb(212 20 66);
    margin-left: -1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
}
#bottom-bg{
    background-color: white;
    max-height: 390vh;
}
.row{
  margin: 0%;
}
img#bottom-img {
    max-width: 80%;
    height: 70%;
    border-radius: 5rem;
    /* padding-left: 5rem; */
    margin-top: 5rem;
    margin-left: 3rem;
}

#desc[data-v-039c5b43] {
    font-family: "Titan One";
    color: rgb(212 20 66);
    margin-left: -2rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
}
p{
    font-family: "Lato", sans-serif;
    font-size: 15px;
    margin-left: -3rem;
    margin-right: 0rem;
}
ul[data-v-039c5b43] {
    list-style: none;
    font-family: "Lato", sans-serif;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 0rem;
    margin-left: -6rem;
}
}
@media screen and (max-width: 600px){
  a#scroll-btn {
    margin-left:15rem;
  }
  #about-img{
    width: 26rem;
    height: 43rem;
    margin-left: 3rem;
    margin-top: -9rem;
  }
  #about-pic{
    width: 20rem;
    height: 31rem;
    margin-left: 6rem;
    margin-top: -36rem;}

#about-head{
  margin-left: 9rem;
}
p[data-v-039c5b43] {
     margin-left: 3rem;
}
#bottom-bg{
  max-height: 230vh;
}
#desc{
  margin-left: 8rem;
}
}
@media screen and (max-width: 375px){
  #about-img[data-v-039c5b43] {
    width: 22rem;
    height: 34rem;
    margin-left: 0rem;
    margin-top: -3rem;
}
#about-pic[data-v-039c5b43] {
    width: 15rem;
    height: 25rem;
    margin-left: 3rem;
    margin-top: -29rem;
}
#heading{
  
    padding-left: 5rem;
}
a#scroll-btn[data-v-039c5b43] {
    margin-left: 9rem;
}
#about-head[data-v-039c5b43] {
    margin-left: 2rem;
}
p[data-v-039c5b43][data-v-039c5b43] {
    margin-left: 2rem;
    font-size: 15px;
}
#desc[data-v-039c5b43] {
    margin-left: 1rem;
}
ul{
  padding-left: 0%;
  font-size: 15px;
}
img#bottom-img{
      margin-top: 5rem;
    margin-left: 4rem;
}
}
</style>
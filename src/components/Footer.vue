<template>
  <footer id="footer">
    <div> © Copyright 2022.| All Rights Reserved Designed by Candy Kingdom</div>
     <div class="demo">
       <p>connect with us: </p>
        <a href="#" class="link">
            <span><i class="fa-brands fa-twitter"></i></span>
        </a>
        <a href="#" class="link">
            <span> <i class="fa-brands fa-instagram"></i></span>
        </a>
        <a href="#" class="link">
            <span> <i class="fa-brands fa-facebook"></i></span>
        </a>
      </div>
    
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 5vh;
  margin-top: 0;
  margin-bottom: 0rem;
  display: flex;
  justify-content: center;
  background-color: rgb(255 184 201);
  padding: 10px;
  font-family: "Lato", sans-serif;
   color: #4b6584;
}
.link{
    color: #4b6584;
    font-family: 'Fredoka One', cursive;
    font-size: 22px;
    line-height: 19px;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    display: inline-block;
    transition: all 0.3s ease 0s;
}
.link:hover,
.link:focus{
    color: rgba(235,59,90,0.8);
    text-shadow: -3px -3px rgba(235,59,90,0.2);
    font-size: 25px;
}
.demo {
    display: flex;
    justify-content: flex-end;
    margin-left: 49rem;
    gap: 10px;
}
@media only screen and (max-width: 767px){
    .link{ margin-bottom: 30px; }
}
</style>
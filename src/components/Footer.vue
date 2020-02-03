<template>
  <div class="footer">
    <b-row>
      <b-col md class="footer1">
        <div class="header">DOSCG</div><br>
        <router-link to="/">Home</router-link> ·
        <router-link to="/aboutMe">About me</router-link>
        <p>DOSCG &copy; 2020</p>
      </b-col>
      <b-col md class="footer2">
        <div class="mr-5"><img src="../assets/icons8-iphone-x-64.png" alt=""> 0909929418 </div>
        <br>
        <div class="ml-4"><img class="mr-2" src="../assets/icons8-important-mail-100.png" alt=""> s.nack1919@gmail.com</div>
      </b-col>
      <b-col md class="footer3">
          <img src="../assets/bv.png" alt="">
          <img src="../assets/node.png" alt="">
          <img src="../assets/redis.png" alt="">
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.footer {
  border-top: rgba(219, 217, 217, 0.473) solid 1px;
  overflow: hidden;
  bottom: 0;
  width: 100%;
  background: rgb(255,0,33);
  background: linear-gradient(90deg, rgba(255,0,33,0.7973564425770308) 0%, rgba(216,97,3,0.7833508403361344) 100%);
  color: #fff;
}

.footer1 {
  margin: 30px 30px 30px;
}

.header {
  font-size: 1.3em;
  font-weight: 600;
  text-transform: uppercase;
}

.footer1 a {
  text-decoration: none;
  font-size: 0.9em;
  text-transform: uppercase;
  color: rgb(226, 225, 225);
}

.footer1 a:hover {
  text-decoration: underline;
  color: #fff;
  opacity: 1;
}

.footer1 p {
  padding-top: 5px;
  /* color: #8f9296; */
  color: #e2dfdfe0;
}

.footer2 {
  margin: 30px 30px 30px;
}

.footer2 img {
  font-size: 0.9em;
  text-transform: uppercase;
  width: 40px;
  vertical-align: middle;
}

.footer3 {
  margin: 30px 30px 30px;
}

.footer3 p {
  margin-top: 10px;
}

.footer3 img{
  width: 70px;
  margin-top: 30px;
  margin-left: 14px;
}
</style>

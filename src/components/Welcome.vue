<template>
  <div>
    <div class="coverHome"></div>
    <div class="center-text">
      <h1 class="font-weight-normal">DOSCG</h1>
      <p class="lead font-weight-normal">This is Assignment for Web developer<br> ( Internship Program )</p>
      <router-link to="/AboutMe" class="button-color btn btn-outline-secondary">know more about me</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.button-color{
  color: #fff;
}
.center-text {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 2.4em;
  text-transform: uppercase;
}
.coverHome {
  height: 800px;
  background: rgb(255,0,33);
  background: linear-gradient(90deg, rgba(255,0,33,0.8981967787114846) 0%, rgba(216,97,3,0.8057598039215687) 100%);
}
@media (max-width: 500px) {
  .center-text{
      font-size: 2em;
  }
  .cover-img {
    height: 600px;
  }
}
</style>

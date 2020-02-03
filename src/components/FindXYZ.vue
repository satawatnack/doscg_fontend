<template>
  <div class="backgroundFindXYZ">
    <div class="findXYZ-contents">
      <h3 style="text-align: center">Finding X Y Z</h3>
      <b-row class="xyzContent">
        <b-col sm="9"><img class="findXYZ-img" src="../assets/findXYZ.png" alt=""></b-col>
        <b-col sm="3">
          <div class="font-weight-light detail">
            <div v-if="post">
              <div class="">X , Y , 5 , 9 , 15 , 23 , Z</div><br>
              <p>X = {{post.x}}</p>
              <p>Y = {{post.y}}</p>
              <p>Z = {{post.z}}</p>
            </div>
            <ul v-if="errors && errors.length">
              <li v-for="error of errors" v-bind:key="error">
                {{error.message}}
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      post: [],
      errors: []
    }
  },
  created () {
    var xyzStorage = JSON.parse(localStorage.getItem('xyzStorage'))
    if (xyzStorage) {
      this.post = xyzStorage
    } else {
      axios.get('http://localhost:3000/1')
        .then(response => {
          this.post = response.data
          localStorage.setItem('xyzStorage', JSON.stringify(this.post))
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style>
.detail{
  text-align: left;
}
.backgroundFindXYZ{
  background: rgb(255,0,33);
  background: linear-gradient(90deg, rgba(255,0,33,0.8981967787114846) 0%, rgba(216,97,3,0.8057598039215687) 100%);
  overflow: hidden;
  height: 755px;
}
.findXYZ-contents{
  margin: 5% 20%;
  color: #fff;
}
.xyzContent{
    margin-top: 10%;
    font-size: 20px;
}

.findXYZ-img{
  object-fit: cover;
  object-position: 0 100%;
  width: 100%;
  margin-bottom: 10%;
}
</style>

<template>
  <div class="backgroundFindBC">
    <div class="findBC-contents">
      <h3 style="text-align: center">Finding B C</h3>
        <b-row class="BCcontent">
            <b-col sm="7"><img class="findBC-img" src="../assets/findBC.png" alt=""></b-col>
            <b-col sm="5">
              <div class="font-weight-light detail">
                <div v-if="post">
                  <div class="">A = 21 A + B = 23 , A + C = -21</div><br>
                  <p>B = {{post.b}}</p>
                  <p>C = {{post.c}}</p>
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
    var bcStorage = JSON.parse(localStorage.getItem('bcStorage'))
    if (bcStorage) {
      this.post = bcStorage
    } else {
      axios.get('http://localhost:3000/2')
        .then(response => {
          this.post = response.data
          localStorage.setItem('bcStorage', JSON.stringify(this.post))
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
.backgroundFindBC{
  overflow: hidden;
  background: rgb(255,0,33);
  background: linear-gradient(90deg, rgba(255,0,33,0.8981967787114846) 0%, rgba(216,97,3,0.8057598039215687) 100%);
  height: 755px;
}
.findBC-contents{
  margin: 5% 20%;
  color: #fff;
}
.BCcontent{
    margin-top: 10%;
    font-size: 20px;
}

.findBC-img{
  width: 100%;
  margin-bottom: 10%;
}
</style>

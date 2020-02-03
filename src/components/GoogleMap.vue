<template>
  <div class="backgroundGmap">
    <div class="findDistance-contents">
      <h3 style="text-align: center">Finding Distance</h3>
      <b-row class="contentGmap">
        <b-col sm="6">
          <div class="holds-the-iframe">
            <iframe
              height="600"
              width="370"
              frameborder="0" style="border:0"
              src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAJbVsRnImDXSobWPGltsHOO757KY-_pNI
                &origin=SCG+Bangsue&destination=Central+World&language=th&region=th&zoom=13" allowfullscreen>
            </iframe>
          </div>
        </b-col>
        <b-col sm="6">
          <div class="font-weight-light detail">
            <div v-if="post">
              <pulse-loader class="spiner" :loading="loading" :color="color" :size="size"></pulse-loader>
              <div v-for="(step, i) in post.routes[0].legs[0].steps" :key="i">
                <div v-html="step.html_instructions"></div>
                <p>{{step.distance.text}} ( {{step.duration.text}} )</p><hr>
              </div>
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
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: 'GoogleMap',
  components: {
    PulseLoader
  },
  data () {
    return {
      post: [],
      errors: [],
      loading: false,
      color: '#cc181e',
      size: '20px'
    }
  },
  created () {
    this.loading = true
    var mapStorage = JSON.parse(localStorage.getItem('mapStorage'))
    if (mapStorage) {
      this.post = mapStorage
      this.loading = false
    } else {
      axios.get('http://localhost:3000/3')
        .then(response => {
          this.post = response.data
          localStorage.setItem('mapStorage', JSON.stringify(this.post))
          this.loading = false
        })
        .catch(e => {
          this.errors.push(e)
          this.loading = false
        })
    }
  }
}
</script>

<style>
.detail{
  text-align: left;
  margin-top: 10px;
}
.backgroundGmap{
  overflow: hidden;
  background: rgb(255,0,33);
  background: linear-gradient(90deg, rgba(255,0,33,0.8981967787114846) 0%, rgba(216,97,3,0.8057598039215687) 100%);
}
.findDistance-contents{
  margin: 5% 20%;
  color: #fff;
}
.contentGmap{
    margin-top: 10%;
    font-size: 20px;
}
.findDistance-map{
  width: 300px;
  margin-bottom: 10%;
}
.spiner{
  margin: auto;
  margin-top: 50%;
  margin-left: 40%;
}
.holds-the-iframe {
  background:url(../assets/loading.svg) center center no-repeat;
  background-size: 30%;
}
@media (max-width: 576px) {
  iframe{
    width:100%;
  }
}
</style>

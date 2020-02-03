<template>
    <div class="backgroundAcitivites">
        <div class="activity-contents">
            <h3 style="text-align: center">ACTIVITIES</h3>
            <b-row class="content">
                <b-col sm="6"><img class="itam-img" src="../assets/itam.jpg" alt=""></b-col>
                <b-col sm="6">
                    <div class="font-weight-bold">IT AMBASSADOR 2017</div><br>
                    <p class="font-weight-light detail">
                        - ผู้เข้าประกวดดาวเดือน IT KMITL<br>
                    </p>
                </b-col>
            </b-row>
            <b-row class="content">
                <b-col sm="6"><img class="football-img" src="../assets/football.jpg" alt=""></b-col>
                <b-col sm="6">
                    <div class="font-weight-bold">Football</div><br>
                    <p class="font-weight-light detail">
                        - Freshy KMITL<br>
                        - IT3K<br>
                        - กีฬาแคแสดสัมพันธ์
                    </p>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import VueAos from 'vue-aos'
export default {
  components: { VueAos }
}
</script>

<style>
*{
  color: #fff;
}

.detail{
    text-align: left;
}

.backgroundAcitivites{
  overflow: hidden;
  background: rgb(255,0,33);
  background: linear-gradient(90deg, rgba(255,0,33,0.8981967787114846) 0%, rgba(216,97,3,0.8057598039215687) 100%);
}

.activity-contents{
  margin: 0% 20%;
  margin-bottom: 10%;
}

.football-img{
  width: 100%;
  margin: 0 0;
  margin-bottom: 10%;
}

.itam-img{
  object-fit: cover;
  object-position: 50% 100%;
  width: 100%;
  height: 500px;
  margin-bottom: 10%;
}

.profile-card{
  margin: 80px;
}
</style>

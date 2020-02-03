<template>
    <div class="backgroundExp">
        <div class="exp-contents">
            <h3 style="text-align: center">EXPRIENCE</h3>
            <b-row class="content">
                <b-col sm="4"><img class="exp-img" src="../assets/spring.png" alt=""></b-col>
                <b-col sm="4"><p class="exp-title">backend</p></b-col>
                <b-col sm="4">
                    <div class="subject font-weight-bold">HotelVendors  Microservices</div><br>
                    <p class="font-weight-light detail">
                        Developed microservices for hotel vendors<br>
                        by using Java Spring Boot,<br>
                        Zuul api gateway, service discovery eureka, <br>
                        cloud sql, json web token <br>
                        and GCP App Engine
                    </p>
                </b-col>
            </b-row>
            <b-row class="content">
                <b-col sm="4"><img class="exp-img" src="../assets/tpmap.png" alt=""></b-col>
                <b-col sm="4"><p class="exp-title">data science</p></b-col>
                <b-col sm="4">
                    <div class="subject font-weight-bold">Poverty prediction Research</div><br>
                    <p class="font-weight-light detail">
                        Designed machine learning to<br>
                        predict poverty in Thailand <br>
                        using Python
                    </p>
                </b-col>
            </b-row>
            <b-row class="content">
                <b-col sm="4"><img class="exp-img-iot" src="../assets/itcamp.jpg" alt=""></b-col>
                <b-col sm="4"><p class="exp-title">IOT</p></b-col>
                <b-col sm="4">
                    <div class="subject font-weight-bold">Teacher assistant on ITCAMP 14</div><br>
                    <p class="font-weight-light detail">
                        Teach about how to control <br>
                        electronic device on the internet<br>
                        using Firebase and C++ on Arduino
                    </p>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
</script>

<style>
*{
  color: #fff;
}
.detail{
    text-align: left;
}
.backgroundExp{
  overflow: hidden;
  background: rgb(255,0,33);
  background: linear-gradient(90deg, rgba(255,0,33,0.8981967787114846) 0%, rgba(216,97,3,0.8057598039215687) 100%);
}
.exp-contents{
  margin: 12% 15%;
}
.content{
    margin-top: 10%;
}

.exp-img{
  margin-bottom: 10%;
  width: 100%;
}

.exp-img-iot{
  margin-bottom: 10%;
  object-fit: cover;
  width: 100%;
  height: 220px;
  width: 100%;
}

.exp-card{
  margin: 80px;
}

.exp-title{
  transform: translate(-50%, -50%) rotate(270deg);
}

@media (max-width: 576px) {
  .exp-title{
    transform: none;
  }
}
</style>

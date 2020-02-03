<template>
  <div>
    <div class="coverHome"></div>
    <div class="center-text">
      <h1 class="font-weight-normal">about me</h1>
    </div>
    <div class="backgroundAbout">
        <div class="page">
            <div class="content">
                <b-row>
                    <b-col data-aos="fade-in">
                        <h3>PROFILE</h3>
                        <p>Mr. Satawat thitisupakul</p>
                        <p>
                            20-year-old Software Engineer student<br>
                            with strong passion in coding and <br>
                            interest in advancing career <br>
                            in leadership company
                        </p>
                        <br><br>
                        <h3>EDUCATION</h3>
                        <p>
                            King Mongkut's Institute of Technology Ladkrabang<br>
                            Faculty of Information Technology<br>
                            Majoring in Software Engineer
                            <br><br>
                            Patumwan Demonstration School<br>
                            English and Mathematics program
                        </p>
                    </b-col>
                    <b-col sm="1"></b-col>
                    <b-col><img class="profileImg mr=5" src="../assets/myProfile.jpg" alt=""></b-col>
                </b-row>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.profileImg{
    width: 100%;
}
.page{
  margin-left: 20%;
  margin-right: 20%;
}
.content{
    text-align: left;
    color: #fff;
}
.cover {
  background: rgb(255,0,33);
  background: linear-gradient(90deg, rgba(255,0,33,0.8981967787114846) 0%, rgba(216,97,3,0.8057598039215687) 100%);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}
.coverHome {
  height: 800px;
  background: rgb(255,0,33);
  background: linear-gradient(90deg, rgba(255,0,33,0.8981967787114846) 0%, rgba(216,97,3,0.8057598039215687) 100%);
}
.backgroundAbout{
  background: rgb(255,0,33);
  background: linear-gradient(90deg, rgba(255,0,33,0.8981967787114846) 0%, rgba(216,97,3,0.8057598039215687) 100%);
  overflow: hidden;
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
@media (max-width: 400px) {
  .profileImg {
    width: 200px;
  }
}
</style>

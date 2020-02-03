<template>
    <div>
      <About></About>
      <Exprience></Exprience>
      <Activities></Activities>
      <Footer></Footer>
    </div>
</template>

<style>
</style>

<script>
import Footer from '@/components/Footer'
import Exprience from '@/components/Exprience'
import About from '@/components/About'
import Activities from '@/components/Activities'
export default {
  name: 'AboutMe',
  components: {
    About,
    Exprience,
    Footer,
    Activities
  }
}
</script>

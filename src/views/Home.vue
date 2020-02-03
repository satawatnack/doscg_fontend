<template>
<div>
  <Welcome></Welcome>
  <Footer></Footer>
</div>
</template>

<style>
</style>

<script>
import Footer from '@/components/Footer.vue'
import Welcome from '@/components/Welcome.vue'
export default {
  name: 'home',
  components: {
    Footer,
    Welcome
  }
}
</script>

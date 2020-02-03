<template>
<div>
  <GoogleMap></GoogleMap>
  <Footer></Footer>
</div>
</template>

<style>
</style>

<script>
import Footer from '@/components/Footer'
import GoogleMap from '@/components/GoogleMap'

export default {
  name: 'FindingDistance.vue',
  components: {
    Footer,
    GoogleMap
  }
}
</script>

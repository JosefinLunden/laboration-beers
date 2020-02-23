<template>
  <div>
    <navigation />
    <router-view /> 
    
    

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import navigation from './components/navigation.vue'
// import beer from './components/beer.vue'
// import index from './components/index.vue'
// import randomBeer from './components/random-beer.vue'



export default {
  name: 'app',
  components: {
    // HelloWorld,
    navigation
    // beer,
    // index,
    // randomBeer
    
  }, 
  
}
</script>
<style>

</style>

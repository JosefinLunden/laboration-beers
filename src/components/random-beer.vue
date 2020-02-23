<template>

  <div id="randomBeer">
    <h1>THE BEER RANDOMIZER</h1>
    <div v-for="randomBeer in randomBeers">
      <h2>Name: </h2>
      <p>{{ randomBeer.name }}</p>
      <h2>Description: </h2> 
      <p>{{ randomBeer.description }}</p>
      <img :src="randomBeer.image_url">
    </div>
  </div>
</template>

<script>
export default {
  props:['randomBeers'],
}
</script>

<style scoped>
@font-face {
  font-family: myFont;
  src: url(/Veneer.ttf);
}
#randomBeer {
  text-align: center;
	font-size: 1.3em;
  background-color:black;
  color:white;
}
#randomBeer  p{
  width: 40%;
  margin:0.5em auto;
  font-size: 1em;
}
#randomBeer h1 {
  font-size:2.8em;
  padding:0.5em;
}
#randomBeer h2 {
  font-size: 1.4em;
}
#randomBeer h1, h2 {
  font-family:myFont; 
}
#randomBeer img {
  height: 200px;
  width: 100px;
}
</style>

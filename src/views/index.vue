<template>
  <div>
   <header>
      <img :src="headerPic">
    </header>
    <section id="allBeers">
      <img id="header-pic" :src="beerHeader">
      <beerList />
    </section>    
  
    <randomBeer :randomBeers="randomBeers" />
    <div id="button">
      <b-button type="is-light" rounded outlined @click="fetchRandomBeer">RANDOMIZER</b-button>
    </div>
  </div>
</template>

<script>
import randomBeer from '../components/random-beer.vue'
import beerList from '../components/beerList.vue'
import headerPic from '../assets/picture1.jpg'
import beerHeader from '../assets/headerBeers.jpg'

export default {
  components: {
    randomBeer,
    beerList
  },
  methods: {
    fetchRandomBeer() {
      fetch('https://api.punkapi.com/v2/beers/random ')
        .then(response => response.json())
        .then(result => {
          this.randomBeers = result
        })
    }
  },
 data() {
    return {
      randomBeers: null,
      headerPic,
      beerHeader,
    }
  },
}
</script>
<style scoped>
@font-face {
  font-family:myFont;
  src: url(/Veneer.ttf);
}
#allBeers {
  margin:2em auto;
}
#header-pic {
 width:40%;
 margin-left:25em;
}
#allBeersTemplate {
  display:grid;
	grid-template-columns:repeat(4, 1fr);
	grid-gap:4rem;
	margin:0rem 4rem;
}
#product-pic {
  height:250px;
}
.grid-item-allBeer {
  padding:2em;
  text-align:center;
}  
.grid-item-allBeer:hover {
  transform:translateY(-1rem);
  transition:transform 0.3s;
  background-image:url('/bakgrund2.png');
  background-repeat:repeat-y;
  color:white;
}
#allBeers input[type=text] {
  border-radius:4px; 
  margin-left:98em;
  padding:1em;
}

#allBeers h2 {
  font-size:1.3em;
  font-family:myFont;
}
#allBeersTemplate{
  margin-top:3em;
}
#button {
  margin:0 auto;
  background-color: black;
  text-align: center; 
}
</style>
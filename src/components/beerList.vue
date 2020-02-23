<template>
  <div>
    <input type="text" v-model="searchBeers" placeholder="search beers">
    <div id="allBeersTemplate">
      <div v-for="beer in filteredBeers" class="grid-item-allBeer">
        <img :src="trashyBlond">
        <h2>{{ beer.name }} / {{ beer.abv }} %</h2>
        <p>{{ beer.tagline }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import trashyBlond from '../assets/trashy-blond.png'

export default {
  created() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(result => {
        this.beers = result
      })
  },
  computed: {
    filteredBeers(){ 
      return this.beers.filter((beer) => {
        return beer.name.toLowerCase().match(this.searchBeers);
      })
    }
  },
 data() {
    return {
      beers: [],
      searchBeers: "",
      trashyBlond,
    }
  },
}
</script>

<style scoped>
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
</style>
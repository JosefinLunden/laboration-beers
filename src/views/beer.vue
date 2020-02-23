<template>
  <div v-if="beers.length">
    <section>
      <img :src="electricIndia">
      <div id="products">
        <h1>
          {{ getBeerByName('electric').name}}
        </h1>
        <h2>
          {{ getBeerByName('electric').tagline }}
        </h2>
        <p>
          {{ getBeerByName('electric').description }}
        </p>
        <div id="alkVolym">
          <h2>ALC VOL.</h2>
          <span class="dot"></span>
          <h2 id="abv">{{getBeerByName('electric').abv }} %</h2>
        </div>
      </div>
    </section>
    <section id="progress">
      <div id="progress-img">
          <img :src="beerPicture" alt="">
      </div>
      <div id="progress-bars">
        <h2>COLOR</h2>
        <span class="dot1"></span>
        <span class="dot2"></span>
        <span class="dot3"></span>
        <span class="dot4"></span>
        <span class="dot5"></span>
        <span class="dot6"></span>
        <span class="dot7"></span>
        <span class="dot8"></span>
        <span class="dot9"></span>
        <span class="dot10"></span>
        <span class="dot11"></span>
        <h2>BITTERNESS</h2>
        <b-progress type="is-info" :value="20"></b-progress>
        <h2>HOPPY</h2>
        <b-progress type="is-info" :value="80"></b-progress>
        <h2>MALTY</h2>
        <b-progress type="is-info" :value="35"></b-progress>
      </div>
    </section>
    <section id="brew-sheet">
      <h2>THE BREW SHEET.</h2>
      <div id="grid-container">
        <div class="grid-item">
          <img src="https://www.brewdog.com/static/version1581078085/frontend/Born/arcticFox/en_US/images/icons/abv-white.svg" alt="">
          <p>ABV: {{ getBeerByName('electric').abv}}</span></p>   
        </div>
        <div class="grid-item">
          <img src="https://www.brewdog.com/static/version1581078085/frontend/Born/arcticFox/en_US/images/icons/ibu-white.svg" alt="">
          <p>IBU: {{ getBeerByName('electric').ibu  }}</p>
        </div> 
        <div class="grid-item">
          <img src="https://www.brewdog.com/static/version1581078085/frontend/Born/arcticFox/en_US/images/icons/style-white.svg" alt="">
          <p>Style: IPA</p>
        </div>
        <div class="grid-item">
          <img src="https://www.brewdog.com/static/version1581078085/frontend/Born/arcticFox/en_US/images/icons/malt-white.svg" alt="">
          <p id="pMalt">Malt: {{ getBeerByName('electric').ingredients.malt[0].name }} </p>
        </div>
      </div>
      <div id="ingredients">
        <h3>INGREDIENTS</h3>
        <h4>MALT: </h4>
        <p>
          {{ getBeerByName('electric').ingredients.malt[0].name }} </p>
          <h4>HOPS:</h4>
        <p> {{ getBeerByName('electric').ingredients.hops[0].name }} </p>
      </div>
    </section>    
  </div>
</template>

<script>
import electricIndia from '../assets/electric-india.jpg'
import beerPicture from '../assets/beer.jpg'

export default {
  created() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(result => {
        this.beers = result
      })
  },
  data() {
    return {
      beers: [],
      electricIndia,
      beerPicture
    }
  },
  methods: {
    getBeerByName(name) {
       return this.beers.find(beer => beer.name.toLowerCase().includes(name))
    }, 
  },
}
</script>

<style scoped>
@font-face {
  font-family:myFont;
  src:url(/Veneer.ttf);
}
#products  {
  position:absolute;
  margin-top:-32.3em;
  margin-left:6em;
  width:30%;
}
#products h1 {
  font-family:myFont;
  font-size:5em;
}
#products h2, #progress h2 {
  font-size:1.5em;
  font-family:myFont;
}
#products p {
  font-family:Roboto;
  font-weight:700;
}
#progress {
  margin:30px auto;
  display:flex;
  margin:auto;
}
#progress-img {
  width:50%;
  height:2em;
}
#progress-bars {
  width:50%;
  margin:13em 5em;
}
.dot1 {
  display:inline-block;
  height:20px;
  width:20px;
  background-color:rgb(254, 239, 118);
  border-radius:50%;
  margin-right:1em;
  margin-bottom:1em;
}
.dot2 {
  display:inline-block;
  height:20px;
  width:20px;
  background-color:rgb(253, 200, 2);
  border-radius:50%;
  margin-right:1em;
  margin-bottom:1em;
}
.dot3 {
  display:inline-block;
  height:20px;
  width:20px;
  background-color:rgb(233, 163, 2);
  border-radius:50%;
  margin-right:1em;
  margin-bottom:1em;
}
.dot4 {
  display:inline-block;
  height:20px;
  width:20px;
  background-color:rgb(226, 131, 0);
  border:solid 4px blue;
  border-radius:50%;
  margin-right:1em;
  margin-bottom:1em;
}
.dot5 {
  display:inline-block;
  height:20px;
  width:20px;
  background-color:rgb(208, 102, 0);
  border-radius:50%;
  margin-right:1em;
  margin-bottom:1em;
}
.dot6 {
  display:inline-block;
  height:20px;
  width:20px;
  background-color:rgb(184, 75, 19);
  border-radius:50%;
  margin-right:1em;
  margin-bottom:1em;
}
.dot7 {
  display:inline-block;
  height:20px;
  width:20px;
  background-color:rgb(163, 54, 22);
  border-radius:50%;
  margin-right:1em;
  margin-bottom:1em;
}
.dot8 {
  display:inline-block;
  height:20px;
  width:20px;
  background-color:rgb(136, 35, 16);
  border-radius:50%;
  margin-right:1em;
  margin-bottom:1em;
}
.dot9 {
  display:inline-block;
  height:20px;
  width:20px;
  background-color:rgb(107, 17, 18);
  border-radius:50%;
  margin-right:1em;
  margin-bottom:1em;
}
.dot9 {
  display:inline-block;
  height:20px;
  width:20px;
  background-color:rgb(76, 11, 10);
  border-radius:50%;
  margin-right:1em;
  margin-bottom:1em;
}
.dot10 {
  display:inline-block;
  height:20px;
  width:20px;
  background-color:rgb(61, 6, 10);
  border-radius:50%;
  margin-right:1em;
  margin-bottom:1em;
}
.dot11 {
  display:inline-block;
  height:20px;
  width:20px;
  background-color:rgb(50, 9, 10);
  border-radius:50%;
  margin-right:1em;
  margin-bottom:1em;
}
#abv {
  position:absolute;
  margin-top:-2.3em;
  margin-left:0.9em;
  color:white;
}
#alkVolym {
  margin-top:3em;
  font-family:myFont;
}
.dot {
  display:block;
  height:80px;
  width:80px;
  background-color:black;
  border-radius:50%;
}
#brew-sheet h2 {
  margin:0 auto;
  font-size:60px;
  text-align:center;
  color:white;
  font-family:myFont;
}
#brew-sheet {
  background:#000;
}
#grid-container {
  display:grid;
  grid-template-columns:auto auto;
  padding:10px;
}
.grid-item, #ingredients {
  padding:10px;
  font-size:1.2em;
  text-align:center;
  color:white;
  display:inline;
  position:relative;
  max-width:50%;
  margin:2em auto;
}
#pMalt {
  margin-left:3em;
}
.grid-item img {
  height:40px;
  position:absolute;
  margin-left:-5em;
  margin-top:-0.5em;
}
.grid-item p  {
  font-family:myFont;
}
#ingredients h3 {
  font-family:myFont;
  font-size:1.5em;
}
.grid-container img {
  width:100px;
  height:180px;
}
h4 {
  font-family:myFont;
}
</style>
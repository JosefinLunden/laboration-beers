<template>
  <div>
   
    <header>
      <img src="../assets/beer_brew.jpg">
    </header>
    <section id="intro">
      <div class="introText">
        <h1> Just barley, hops, yeast, water and mind-blowing flavour. Our best brewer Antonio show how we brew. </h1>
        <p>At BrewDog we are on a mission to make other people as passionate about great craft beer as we are. All we care about is brewing world-class craft beer; extraordinary beers that blow people's minds and kick-start a revolution. No preservatives. No chemicals. No cheap substitutes.</p>
      </div>
    </section>
    <div class="colorspot">
      <img id="malt" src="../assets/Malt.jpg">
      <img id="womanBrew" src="../assets/woman_brew.jpg">
    </div>
    <section id="brewInfo">
      <p id="smallHeadline">step one and two </p>
      <h2>Mashing and Lautering</h2>
      <p>Like any journey, brewing begins with a single step. Malted grain is mixed with hot water in a process known as mashing. It is pretty much what you’d expect given the name – dry barley, wheat and/or other grains are mixed into the water to form a glutinous substance that looks like watery porridge. This is the mash. And this is where the chemical process begins (also; the magic). As the malt is partly crushed before being soaked, the hot water can get into each individual kernel to expose the natural starches within. </p>
    </section>
    <div class="colorspot">
      <img id="womanBrew2" src="../assets/woma_brew2.jpg">
      <img id="boiling" src="../assets/boiling.jpg">
    </div>
    <section id="brewInfo2">
      <p id="smallHeadline">step three and four </p>
      <h2>Boiling and Fermenting</h2>
      <p>
        The wort is then transferred into another large vessel and heated. Known as the kettle, the wort will vigorously boil away here for well over an hour – exactly how long depends on the beer style. This prolonged heating stops the enzyme activity from the mash stage, fixes the amount of sugar that will become available to the yeast, and sterilises the wort at the same time. Anything that touches the beer from this stage on will have to be sterile. Brewers are notorious clean freaks.
      </p>
    </section>
    <div class="colorspot">
      <section id="newsletter">
        <img id="illustration" src="../assets/illustration2.png">
        <h3>Explore More</h3>
        <b-field label="Sign up to our newsletter for the latest beer, news, events and more">
          <b-input v-model="beerName"></b-input>
        </b-field>
        <p>Your email address is:  {{ $store.getters.beerName }} </p>
        <b-button type="is-dark" rounded outlined @click="toast">
              Sign up!
        </b-button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
     beerName: {
        get() {
          return this.$store.state.beerName;
      },
      set (value) {
        this.$store.commit('updateBeername', value)
      }
    },
    },
    
  
  methods: {
    toast() {
      this.$buefy.toast.open('You have been registered')
    },
  }
}
</script>

<style scoped>
@font-face {
  font-family:myFont;
  src:url(/Veneer.ttf);
}
#intro {
  margin:7em 40em;
  width:40%;
}
h1, h2, h3 {
  font-family:myFont;
  font-size:1.8em;
}
.colorspot {
  position:relative;
  height:35em;
  background-color:rgb(237, 237, 231)
}
#womanBrew {
  height:800px;
  position:absolute;
  margin-top:5em;
  margin-left:50em;
}
#malt {
  position:absolute;
  margin-top:5em;
  margin-left:10em;
}
#smallHeadline {
  font-family:myFont;
}
#brewInfo {
  width:35%;
  margin-top:15em;
  margin-left:14em;
  margin-bottom:15em;
}
#womanBrew2 {
  height:700px;
  position:absolute;
  margin-left:10em;
  margin-top:8em;
}
#boiling {
  position:absolute;
  margin-left:58em;
  margin-top:-10em;
}
#brewInfo2 {
  width:35%;
  margin-top:6em;
  margin-left:45em;
  margin-bottom:5em;
}
#newsletter {
  position:absolute;
  margin-top:12em;
  width:40%;
  margin-left:45em;
}
#illustration {
  position:absolute;
  margin-left:-45em;
  margin-top:-4em;
}
</style>
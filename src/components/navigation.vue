<template>
<div>
  <nav> 
    <ul>
      <b-navbar>
      <template slot="start">
        <b-navbar-item><router-link to="/">HOME.</router-link></b-navbar-item>
        <b-navbar-item> <router-link to="/brew"> BREW.</router-link></b-navbar-item>
        <b-navbar-dropdown label="BEERS.">
          <b-navbar-item><router-link to="/beer/electricindia"> ELECTRIC INDIA. </router-link></b-navbar-item>
          <b-navbar-item href="#"> DEAD PONY CLUB. </b-navbar-item>
          <b-navbar-item href="#"> LOST LAGER.</b-navbar-item>
        </b-navbar-dropdown>
      </template>
      </b-navbar>
    </ul>
  </nav>
</div>
</template>

<script>
export default {
}
</script>


<style scoped>
@font-face {
  font-family:myFont;
  src:url(/Veneer.ttf);
}
.navbar-item {
  font-size:1.5em;
}
nav ul {
  list-style-type:none;
  display:flex;
  font-family:myFont;
  top:0;
  height:5vw;
  z-index:1;
  color:#000;
  background-color:white;
  margin-top:0px;
}
</style>
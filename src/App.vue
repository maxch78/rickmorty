<template>
    <div class="principal">
      <div id="nav">
        <NavBar/>
      </div>
      <router-view/>
    <Footer/>
    </div>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';


export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  created() {
    this.$store.dispatch('llamadoAPI');
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,300&display=swap');

.principal{
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  background-image: url('https://hipertextual.com/files/2017/07/rick-morty-.jpg');
  background-size: contain ; 
  height: 100%;
}

#nav{
  margin-bottom: 80px;
}
#nav a {
  font-weight: bold;
  color: #f0f3f7;
}

#nav a.router-link-exact-active {
  color: #ec16be;
}

</style>


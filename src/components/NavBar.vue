<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">   

    <router-link to="/"><img class="ml-4" src="https://cdn6.aptoide.com/imgs/c/e/b/cebf74d33c469c358b361d6e7f0e1fce_icon.png?w=256" alt="logo_rick and morty"> </router-link><br>
    <router-link tag="div" class="navbar-brand" to="/">The Rick and Morty</router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse mr-4" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Opiniones'}">Opiniones</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Favoritos'}">Favoritos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Administracion'}">Administración</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'PaginacionPrueba'}">Prueba Paginación</router-link>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
img{
  width: 80px;
  height: 80px;
}
</style>

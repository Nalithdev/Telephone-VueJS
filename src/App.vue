<template>
  <nav>
    <router-link to="/">Journal</router-link> 
    <router-link to="/contact">Contact</router-link> 
    <router-link to="/clavier">Clavier</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding-top: 30px;
  padding-bottom: 26px;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
  background-color: rgb(255, 228, 182);
  border-top: 1px solid black;
  border-left: 1px solid black ;
  border-right: 1px solid black;
  padding: 27px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

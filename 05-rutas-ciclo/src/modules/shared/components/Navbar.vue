<template>
  <div>
      <router-link to="/">Pokemon List</router-link>
      <router-link to="/id">Pokemon Por ID</router-link>
      <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
    padding: 0 100px;
}
div a{  padding: 0 5px;
     text-decoration: none;
     color: #2c3e50;
     margin: 0 10px;
 }
div .router-link-exact-active{
    color:#42b983
}
</style>
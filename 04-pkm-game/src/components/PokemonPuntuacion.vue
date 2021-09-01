<template>
  <h3> Correctas {{ correctas }} </h3>
  <h3> Erroneas {{ erroneas}}</h3>
</template>

<script>
export default {
    props:{
        correctas:{type:Number,default:0},
        erroneas:{type:Number,default:0}
    }
}
</script>

<style>

</style>
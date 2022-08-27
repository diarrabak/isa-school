<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/departments">Departments</RouterLink>
      </nav>
  
  </header>

  <RouterView />
</template>

<style>
header{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
  min-height: 60px;
}
nav a{
padding: 5px 20px;
}

</style>

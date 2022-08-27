<template>
<main @click="this.$router.push(`/departments/${id}`)">
 <h2>{{ title }}</h2>
  <p>{{ description }}</p>
</main>
 
</template>

<script>
export default {
  name: "Department",
  props: {
    id:{
      type:Number,
      required:true,
    },
    title: {
      type: String,
      required: true,
    },
     description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
main{
  cursor: pointer;
}
</style>
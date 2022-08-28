<template>
  <div class="row">
    <h1>Detail about department {{ this.$route.params.id }}</h1>
    <div class="col-12">{{ department.name }}</div>
    <div class="col-12">{{ department.description }}</div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import DepartmentService from "../../services/DepartmentServices";


const route=useRoute();
const id=route.params.id;
const department = ref({});
onMounted(() => {
  DepartmentService.getDepartmentById(id)
    .then((res) => (department.value = res.data))
    .catch((err) => console.log(err));
});
</script>

<style lang="css" scoped>
.row {
  text-align: center;
}
</style>
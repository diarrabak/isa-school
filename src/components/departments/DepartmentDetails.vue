<template>
  <div class="row">
    <h1>Detail about department {{ id }}</h1>
    <div class="col-12">{{ department.name }}</div>
    <div class="col-12">{{ department.description }}</div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import DepartmentService from "../../services/DepartmentServices";
import { useDepartmentStore } from "../../stores/department";

const departmentStore = useDepartmentStore();
const route = useRoute();
const id = route.params.id;
const department = computed(() => departmentStore.currentDepartment);

onMounted(() => {
  departmentStore.getCurrentDepartment(id);
});
</script>

<style lang="css" scoped>
.row {
  text-align: center;
}
</style>
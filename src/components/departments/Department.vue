<template>
  <main @click="router.push(`/departments/${department.id}`)">
    <h2>{{ department.name }}</h2>
    <p>{{ department.description }}</p>
  </main>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  department: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
main {
  cursor: pointer;
}
</style>
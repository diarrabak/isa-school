<template>
  <h1>Addind a new Department</h1>
  <form @submit.prevent="submit()">
    <div class="row mb-3">
      <label for="name" class="form-control-label col-sm-2"
        >Department name</label
      >
      <input
        v-model="department.name"
        id="name"
        name="name"
        type="text"
        class="form-control col-sm-8"
      />
    </div>
    <div class="row mb-3">
      <label for="description" class="form-control-label col-sm-2"
        >Description</label
      >
      <input
        id="description"
        name="description"
        type="text"
        class="form-control col-sm-8"
        v-model="department.description"
      />
    </div>
    <div class="row mb-3">
      <label for="picture" class="form-control-label col-sm-2">Picture</label>
      <input
        v-model="department.picture"
        id="picture"
        name="picture"
        type="text"
        class="form-control col-sm-8"
      />
    </div>
    <div class="row">
      <button class="btn btn-success">Add</button>
    </div>
  </form>
</template>

<script setup>
import DepartmentService from "../../services/DepartmentServices";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const id = route.params.id;
const router=useRouter();
const department = ref({
  name: "",
  description: "",
  picture: "",
});

onMounted(() => {
  if (!!id) {
    DepartmentService.getDepartmentById(id)
      .then((res) => {
        console.log("res res", res.data);
        department.value = res.data;
      })
      .catch((err) => console.log("no such department", err));
  }
});

function submit() {
  if (
    department.name === "" ||
    department.description === "" ||
    department.picture === ""
  ) {
    console.log("All fields required");
    return;
  }

  if (!!id) {
    console.log(" depart", { ...department.value });
    DepartmentService.updateDepartment(id, {
      ...department.value,
    })
      .then((res) => {
        console.log("new depart", res);
        router.push("/departments");
      })
      .catch((err) => console.log("error adding new department", err));
  } else {
    console.log(" depart", { ...department.value });
    DepartmentService.createDepartment({ ...department.value })
      .then((res) => {
        console.log("new depart", res);
        router.push("/departments");
      })
      .catch((err) => console.log("error updating the department", err));
  }
}
</script>

<style scoped>
.row {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
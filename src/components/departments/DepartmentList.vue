<template>
  <h1>List of departments</h1>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="department in departments"
      :key="department.id"
    >
      <Department
        :department="department"
      />
      <div class="btns">
        <button
          @click="router.push(`/new-department/${department.id}`)"
          class="btn btn-success"
        >
          Update
        </button>
        <button @click="remove(department.id)" class="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  </ul>
  <div class="row">
    <div class="col-12 add">
      <button
        @click="router.push('/new-department')"
        class="btn btn-primary"
      >
        Add New Department
      </button>
    </div>
  </div>
</template>

<script setup>
import Department from "./Department.vue";
import DepartmentServices from "../../services/DepartmentServices";
import { onMounted } from "@vue/runtime-core";
import {ref} from "vue";
import { useRouter } from "vue-router";

const router=useRouter();

let departments= ref([]);

onMounted(() => {
  getAllDepartments();
});

function remove(id) {
  DepartmentServices.remove(id)
    .then((res) => {
      console.log(res.message);
      getAllDepartments();
    })
    .catch((err) => console.log("Issue removing", err));
}

function getAllDepartments() {
  DepartmentServices.getDepartments()
    .then((res) => {
      // departments.value = res.data.filter((depart) => depart.id < 15);
      departments.value = res.data;
      //   console.log(res.data);
    })
    .catch((err) => console.log(err));
}
</script>

<style >
h1 {
  text-align: center;
}
ul {
  margin: 0 auto;
  width: 60%;
}
li {
  list-style: none;
}
.btns,
.add {
  display: flex;
  justify-content: center;
}
.btn-success {
  margin-right: 20px;
}
.add {
  margin-bottom: 50px;
  padding-top: 20px;
}
</style>
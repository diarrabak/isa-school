<template>
  <h1>List of departments</h1>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="department in departments"
      :key="department.id"
    >
      <Department
        :id="department.id"
        :title="department.name"
        :description="department.description"
      />
      <div class="btns">
        <button @click="this.$router.push(`/new-department/${department.id}`)" class="btn btn-success">Update</button>
        <button @click="remove(department.id)" class="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  </ul>
  <div class="row">
    <div class="col-12 add">
      <button @click="this.$router.push('/new-department')" class="btn btn-primary">Add New Department</button>
    </div>
  </div>
</template>

<script>
import Department from "./Department.vue";
import DepartmentServices from "../../services/DepartmentServices";
export default {
  name: "DepartmentList",
  components: {
    Department,
  },

  data() {
    return {
      departments: [],
    };
  },
  created() {
     this.getAllDepartments();
  },
  methods: {
    remove(id) {
      DepartmentServices.remove(id)
        .then((res) => {
          console.log(res.message);
          this.getAllDepartments();
        })
        .catch((err) => console.log("Issue removing", err));
    },
    getAllDepartments() {
      DepartmentServices.getDepartments()
        .then((res) => {
          this.departments = res.data.filter((depart) => depart.id < 15);
          //   console.log(res.data);
        })
        .catch((err) => console.log(err));
    },
  },
  watch: {
   
  },
};
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
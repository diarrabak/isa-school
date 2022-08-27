<template>
  <div class="row">
    <h1>Detail about department {{ this.$route.params.id }}</h1>
    <div class="col-12">{{ department.name }}</div>
    <div class="col-12">{{ department.description }}</div>
  </div>
</template>

<script>
import DepartmentService from "../../services/DepartmentServices";
export default {
  name: "DepartmentDetails",

  data() {
    return {
      department: {},
    };
  },

  mounted() {
    DepartmentService.getDepartmentById(this.$route.params.id)
      .then((res) => (this.department = res.data))
      .catch((err) => console.log(err));
  },

  methods: {},
};
</script>

<style lang="css" scoped>
.row {
  text-align: center;
}
</style>
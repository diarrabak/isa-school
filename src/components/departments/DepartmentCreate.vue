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

<script>
import DepartmentService from "../../services/DepartmentServices";
export default {
  name: "NewDepartment",
  data() {
    return {
      department: {
        name: "",
        description: "",
        picture: "",
      },
    };
  },
  mounted() {
    if (!!this.$route.params.id) {
      DepartmentService.getDepartmentById(this.$route.params.id)
        .then((res) => {
          console.log("res res", res.data);
          this.department = res.data;
        })
        .catch((err) => console.log("no such department"));
    }
  },
  methods: {
    submit() {
      if (
        this.department.name === "" ||
        this.department.description === "" ||
        this.department.picture === ""
      ) {
        console.log("All fields required");
        return;
      }

      if (!!this.$route.params.id) {
        console.log(" depart", { ...this.department });
        DepartmentService.updateDepartment(this.$route.params.id, { ...this.department })
          .then((res) => {
            console.log("new depart", res);
            this.$router.push("/departments");
          })
          .catch((err) => console.log("error adding new department", err));
      } else {
        console.log(" depart", { ...this.department });
        DepartmentService.createDepartment({ ...this.department })
          .then((res) => {
            console.log("new depart", res);
            this.$router.push("/departments");
          })
          .catch((err) => console.log("error updating the department"));
      }
    },
  },
};
</script>

<style scoped>
.row {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
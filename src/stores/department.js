import { defineStore } from 'pinia';
import DepartmentService from '../services/DepartmentServices';

export const useDepartmentStore = defineStore('department', {
    state: () => ({
        departments: [],
        currentDepartment: {},
    }),
    getters: {
        getFirstDepartments(state) {
            return state.departments.filter((dept, index) => index < 5);
        }

    },
    actions: {
        getDepartments() {
            DepartmentService.getDepartments()
                .then((res) => {
                    this.departments = res.data;
                    //   console.log(res.data);
                })
                .catch((err) => console.log(err));
        },
        getCurrentDepartment(id) {
            DepartmentService.getDepartmentById(id)
                .then((res) => (this.currentDepartment = res.data))
                .catch((err) => console.log(err));
        },
        removeDepartment(id){
            DepartmentService.remove(id)
            .then((res) => {
                console.log(res.message);
                this.getDepartments();
              })
              .catch((err) => console.log("Issue removing", err));
        }

    }
})
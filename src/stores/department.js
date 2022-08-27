import {defineStore} from 'pinia';
import DepartmentService from '../services/DepartmentServices';

export const useDepartmentStore=defineStore('department',{
   state:()=>({
    departments:[],
    currentDepartment:{},
   }),
   getters:{
    
   },
   actions:{
    getDepartments(){
        DepartmentService.get
    }
   }
})
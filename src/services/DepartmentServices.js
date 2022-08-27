import axios from "axios"

export default class DepartmentService {

    static async getDepartments() {
        const result = await axios.get("http://localhost:8000/api/departments");
        return result.data;
    }

    static async getDepartmentById(id) {
        const result = await axios.get(`http://localhost:8000/api/departments/${id}`);
        return result.data;
    }

    static async remove(id) {
        const result = await axios.delete(`http://localhost:8000/api/departments/${id}`);
        return result.data;
    }

    static async createDepartment(data) {
        const result = await axios.post(`http://localhost:8000/api/departments`,data);
        return result.data;
    }

    static async updateDepartment(id, data) {

        console.log("update",id, data)
        const result = await axios.put(`http://localhost:8000/api/departments/${id}`,data);
        return result.data;
    }

}
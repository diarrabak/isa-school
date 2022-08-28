import axios from "axios"

export default class DepartmentService {

    static async getDepartments() {
        const result = await axios.get(`${import.meta.env.VITE_APP_BASE_ENDPOINT}/departments`);
        return result.data;
    }

    static async getDepartmentById(id) {
        const result = await axios.get(`${import.meta.env.VITE_APP_BASE_ENDPOINT}/departments/${id}`);
        return result.data;
    }

    static async remove(id) {
        const result = await axios.delete(`${import.meta.env.VITE_APP_BASE_ENDPOINT}/departments/${id}`);
        return result.data;
    }

    static async createDepartment(data) {
        const result = await axios.post(`${import.meta.env.VITE_APP_BASE_ENDPOINT}/departments`,data);
        return result.data;
    }

    static async updateDepartment(id, data) {

        console.log("update",id, data)
        const result = await axios.put(`${import.meta.env.VITE_APP_BASE_ENDPOINT}/departments/${id}`,data);
        return result.data;
    }

}
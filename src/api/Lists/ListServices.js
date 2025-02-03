import axiosInstance from "../axiosConfig";
import { API_ENDPOINTS } from "../apiEndpoints";

export const getLists = async () => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_LISTS);
        return response;
    } catch (error) {
        console.error("Error fetching lists:", error);
        throw error;
    }
}; 

export const createList = async (title) => {
    try {
        const response = await axiosInstance.post(API_ENDPOINTS.CREATE_LISTS, {title});
        return response;
    } catch (error) {
        console.error("Error creating list:", error);
        throw error;
    }
}

export const updateList = async (id, data) => {
    try {
        const response = await axiosInstance.put(API_ENDPOINTS.UPDATE_LISTS(id), data);
        return response.data;
    } catch (error) {
        console.error("Error updating list:", error);
        throw error;
    }
}

export const deleteList = async (id) => {
    try {
        const response = await axiosInstance.delete(API_ENDPOINTS.DELETE_LIST(id),id);
        return response.data;
    } catch (error) {
        console.error("Error deleting list:", error);
        throw error;
    }
}



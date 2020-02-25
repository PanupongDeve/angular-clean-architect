import axios, { AxiosRequestConfig } from 'axios';

export class HttpServices {
    private handleError: Function;

    constructor() {
        this.handleError = (error: any) => { 
            console.error(error.message);
            throw error
        };
    }

    setHandleError(handleError: Function) {
        this.handleError = handleError;
    }

    async get(url: string, axiosOptions: AxiosRequestConfig = {}) {
        try {
            const response = await axios.get(url, axiosOptions);
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    async post(url: string, data:any, axiosOptions: AxiosRequestConfig = {}) {
        try {
            const response = await axios.post(url, data, axiosOptions);
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    async patch(url: string, data:any, axiosOptions: AxiosRequestConfig = {}) {
        try {
            const response = await axios.patch(url, data, axiosOptions);
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    async put(url: string, data:any, axiosOptions: AxiosRequestConfig = {}) {
        try {
            const response = await axios.put(url, data, axiosOptions);
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    async delete(url: string, axiosOptions: AxiosRequestConfig = {}) {
        try {
            const response = await axios.delete(url, axiosOptions);
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }
}
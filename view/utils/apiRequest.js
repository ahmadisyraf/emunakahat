import axios from 'axios';

const baseUrl = 'http://localhost:8000';

const apiRequest = async ({ path, method, body }) => {
    try {
        const { data } = await axios({
            baseURL: baseUrl,
            url: path,
            method, method,
            data: body
        });

        if (data) {
            return data;
        }
    } catch (error) {
        return error;
    }

    return {};
};

export default apiRequest;
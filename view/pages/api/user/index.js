import apiRequest from "../../../utils/apiRequest";

export async function registerUser({ data }) {
    const res = await apiRequest({
        path: "/users/insertUser",
        body: data,
        method: "POST",
    })

    return res;
}
import apiRequest from "../../../utils/apiRequest";
export const apiEndpoint = 'http://localhost:3000';

export async function registerUser({ data }) {
    const res = await apiRequest({
        path: "/users/insertUser",
        body: data,
        method: "POST",
    })

    return res;
}

export async function getUser({ email }) {
    const res = await apiRequest({
        path: `/users/getUserByEmail/${email}`,
        method: "GET",
    });

    return res;
}

export async function updateUser({ email, updatedData }) {
    const res = await apiRequest({
        path: `/users/updateUser/${email}`,
        body: updatedData,
        method: "PUT",
    });

    return res;
}

export async function getUserByIC({ ic }) {
    const res = await apiRequest({
        path: `/users/getUserByIC/${ic}`,
        method: "GET",
    });

    return res;
}

export async function getUsers() {
    const res = await apiRequest({
      path: "/users/getUsers",
      method: "GET",
    });
  
    return res;
  }
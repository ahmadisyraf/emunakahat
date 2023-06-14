import apiRequest from "../../../utils/apiRequest";


export async function registerStaff({ data }) {
    const res = await apiRequest({
        path: "/staff/insertStaff",
        body: data,
        method: "POST",
    })

    return res;
}

export async function getAdminByEmail({ email }) {
    const res = await apiRequest({
        path: `/staff/getStaffByEmail/${email}`,
        method: "GET",
    });

    return res;
}

export async function getStaffByEmail({ email }) {
    const res = await apiRequest({
        path: `/staff/getStaffByEmail/${email}`,
        method: "GET",
    });

    return res;
}

export async function updateStaff({ email, updatedStaffData }) {
    const res = await apiRequest({
        path: `/staff/updateStaff/${email}`,
        body: updatedStaffData,
        method: "PUT",
    });

    return res;
}

export async function getStaffByIC({ ic }) {
    const res = await apiRequest({
        path: `/staff/getStaffByIC/${ic}`,
        method: "GET",
    });

    return res;
}
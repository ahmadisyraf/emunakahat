import apiRequest from "../../../utils/apiRequest";

export async function registerStaff({ staffData }) {
    const res = await apiRequest({
        path: "/staffs/insertStaff",
        body: staffData,
        method: "POST",
    })

    return res;
}

export async function getStaffByEmail({ email }) {
    const res = await apiRequest({
        path: `/staffs/getStaffByEmail/${email}`,
        method: "GET",
    });

    return res;
}

export async function updateStaff({ email, updatedData }) {
    const res = await apiRequest({
        path: `/staffs/updateStaff/${email}`,
        body: updatedData,
        method: "PUT",
    });

    return res;
}
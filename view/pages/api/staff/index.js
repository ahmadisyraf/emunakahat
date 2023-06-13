import apiRequest from "../../../utils/apiRequest";


export async function getAdminByEmail({ email }) {
    const res = await apiRequest({
        path: `/staff/getStaffByEmail/${email}`,
        method: "GET",
    });

    return res;
}
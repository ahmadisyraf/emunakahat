import apiRequest from "../../../utils/apiRequest";

export async function getCourse() {
    const res = await apiRequest({
        path: "/courses/getCourse",
        method: "GET",
    });

    return res;
}

export async function getCourseById({ id }) {
    const res = await apiRequest({
        path: `/courses/getCourseById/${id}`,
        method: "GET"
    });

    return res;
}

export async function insertBooking({ data }) {
    const res = await apiRequest({
        path: '/booking/insertBooking',
        method: "POST",
        body: data,
    });

    return res;
}

export async function getBookingById(id) {
    const res = await apiRequest({
        path: `/booking/getBookingById/${id}`,
        method: "GET"
    });

    return res;
}
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

export async function insertCourse({ data }) {
    const res = await apiRequest({
        path: `/courses/insertCourse`,
        method: "POST",
        body: data
    })

    return res;
}

export async function deleteCourse({ id }) {
    const res = await apiRequest({
        path: `/courses/deleteCourse/${id}`,
        method: "DELETE",
    });

    return res;
}

export async function updateCourse({ id, data }) {
    const res = await apiRequest({
        path: `/courses/updateCourse/${id}`,
        method: "PUT",
        body: data
    });

    return res;
}
import apiRequest from "../../../utils/apiRequest";

export async function getConsultation() {
    const res = await apiRequest({
        path: "/consultation/getConsulttation",
        method: "GET",
    });

    return res;
}

export async function getConsultationById({ id }) {
    const res = await apiRequest({
        path: `/consultation/getConsultationById/${id}`,
        method: "GET"
    });

    return res;
}

export async function insertConsultation({ data }) {
    const res = await apiRequest({
        path: '/consultation/insertConsultation',
        method: "POST",
        body: data,
    });

    return res;
}

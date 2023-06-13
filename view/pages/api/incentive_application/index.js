import apiRequest from "../../../utils/apiRequest";

export async function insertIncentiveApplication({ data }) {
    const res = apiRequest({
        path: "/incentive_application/insertIncentiveApplication",
        method: "POST",
        body: data,
    });

    return res;
}

export async function getIncentiveApplication({ ic }) {
    const res = apiRequest({
        path: `/incentive_application/getIncentiveApplication/${ic}`,
        method: "GET",
    });

    return res;
}

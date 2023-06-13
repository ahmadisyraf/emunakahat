import apiRequest from "../../../utils/apiRequest";

export async function insertMarriageRequest({ data }) {
    const res = apiRequest({
        path: "/marriageRequest/insertMarriageRequest",
        method: "POST",
        body: data,
    });

    return res;
}

export async function getMarriageRequest({ ic }) {
    const res = apiRequest({
        path: `/marriageRequest/getMarriageRequestByIC/${ic}`,
        method: "GET",
    });

    return res;
}

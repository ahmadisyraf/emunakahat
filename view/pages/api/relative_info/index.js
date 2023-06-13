import apiRequest from "../../../utils/apiRequest";

export async function insertRelativeInfo({ data }) {
    const res = apiRequest({
        path: "/relative_info/insertRelativeInfo",
        method: "POST",
        body: data,
    });

    return res;
}

export async function getRelativeInfo({ ic }) {
    const res = apiRequest({
        path: `/relative_info/getRelativeInfo/${ic}`,
        method: "GET",
    });

    return res;
}

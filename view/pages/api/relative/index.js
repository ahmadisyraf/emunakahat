import apiRequest from "../../../utils/apiRequest";

export async function insertRelative({ data }) {
    const res = apiRequest({
        path: "/relative/insertRelativeInfo",
        body: data,
    });

    return res;
}
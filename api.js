import axios from "axios";

// make easy request without URL copypasting.
// make post get delete put request
// send jwt automatically

const callApi = async (method, path, data, jwt) => {
    const headers = {
        Authorization : `bearer ${jwt}`,
        "Content-Type" : "application/json"
    };

    const baseUrl = "http://localhost:8000/api/v1"
    const fullUrl = `${baseUrl}${path}`;
    if(method === "get" || method === "delete") {
        return axios[method](fullUrl, { headers });
    } else {
        return axios[method](fullUrl, data, { headers })
    }
};


export default {
    createAccount : form => callApi("post", "/users/", form),
    login : form => callApi("post", "/users/login/", form),
    rooms : (page = 1, token) => callApi("get", `/rooms/?page=${page}`, null, token),
    favs : (id, token) => callApi("get", `/users/${id}/favs/`, null, token),
    toggleFavs : (userId, roomId, token ) => callApi("put", `/users/${userId}/favs/`, { pk : roomId }, token)
}
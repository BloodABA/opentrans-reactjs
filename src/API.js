const Axios = require('axios').create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true
})

const baseUrl = "http://localhost:8080";

const APIUrl = {
    session : {
        method : "get",
        url: baseUrl + "/account/session"
    },
    login : {
        method : "post",
        url: baseUrl + "/account/login"
    },
    project : {
        method : "get",
        url: baseUrl + "/project/"
    }
}


async function request(key, param={}, data={}, message=true) {

    // ai = Api Info
    const ai = APIUrl[key];

    const keys = Object.keys(param)
    let url = ai.url;
    for(let i=0;i<keys.length;i++) {
        url = url.replace(":" + keys[i], param[keys[i]])
    }
    var res = undefined;
    if(ai.method === "post") {
        res = await Axios.post(url, data)
    } else {
        res = await Axios.get(url);
    }
    if(!res.data.status) {
        if(message) {
            alert(res.data.message);
        }
        return false;
    }

    return res.data;
}

const API = {
    request: request
}

export default API;
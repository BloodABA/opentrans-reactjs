const domain = "http://localhost"

const Axios = require('axios').create({
    baseURL: domain + ':3000/',
    withCredentials: true
})

const baseUrl = domain + ":8080";

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
    },
    projectDetail : {
        method : "get",
        url: baseUrl + "/project/:projectUrl"
    },
    docsList : {
        method : "get",
        url: baseUrl + "/project/:projectUrl/list"
    },
    docsListMD : {
        method : "get",
        url: baseUrl + "/project/:projectUrl/list/md"
    },
    docsRead : {
        method : "get",
        url: baseUrl + "/project/:projectUrl/:fileHash"
    },
    projectCreate : {
        method : "post",
        url: baseUrl + "/project/create"
    },
    docsApply : {
        method : "post",
        url: baseUrl + "/project/:projectUrl/docsApply"
    },
    logout : {
        method : "get",
        url: baseUrl + "/account/logout"
    },
    LogSubmit : {
        method : "post",
        url: baseUrl + "/translate/:projectUrl/LogSubmit"
    },
    translateInfo : {
        method : "get",
        url: baseUrl + "/translate/:translateKey"
    },
    update : {
        method : "post",
        url: baseUrl + "/project/:projectUrl/docsUpdate"
    },
    vote : {
        method : "post",
        url: baseUrl + "/translate/:projectUrl/vote"
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

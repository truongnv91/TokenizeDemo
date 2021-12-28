const axios = require('axios');

const HEADER_INFO = {
    'Accept': `application/json, text/plain, */*`,
    'content-type': 'application/json;charset=utf-8',
    "user-agent": "Android;1.15.0",
    "TOK-DEVICE-ID": "ea278b7741967a5e"
}

module.exports.httpRequestGet = async function (url, callback, callError = null) {
    const config = {
        method: `GET`,
        url: url,
        headers: HEADER_INFO
        // timeout: 20000
    };
    const { body, data } = await axios(config);
    return data;
}
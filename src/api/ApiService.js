const BASE_URL = 'https://api.tokenize-dev.com';

module.exports.getmarkets = function () {
    return `${BASE_URL}/mobile-api/market/getmarkets`;
}

module.exports.get_summaries = function () {
    return `${BASE_URL}/public/v1/market/get-summaries`;
}
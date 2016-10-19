var server = getApp().use('lib/server.js');

function getPersonalCardSet(user_id, callback) {
    server.request({
        data: {
            "user_id": user_id   
        },
        route: "/cardset",
        success: function(data) {
            callback(data)
        }
    })
}

function getHotCardSet(page, callback) {
    server.request({
        data: {
            "page": page,
            'per-page': 3
        },
        route: "/cardset/hot",
        success: function(data) {
            callback(data)
        }
    })
}

module.exports = {
    getPersonalCardSet : getPersonalCardSet,
    getHotCardSet: getHotCardSet
}
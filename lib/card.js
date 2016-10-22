var server = getApp().use('lib/server.js');

/**
 * 获取所有卡牌
 * callback    回调函数
 */ 

function getAllCards(page, per_page, callback) {
    server.request({
        data: {
            "page": page,
            'per-page': per_page
        },
        route: "/card/index",
        success: function(data) {
            callback(data)
        }
    })
}

module.exports = {
    getAllCards: getAllCards
}
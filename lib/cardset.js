var server = getApp().use('lib/server.js');

/**
 * 获取个人卡组
 * user_id     用户id
 * callback    回调函数
 */ 

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

/**
 * 获取热门卡组
 * page       页码
 * callback   回调函数
 */
function getHotCardSet(page, per_page, callback) {
    server.request({
        data: {
            "page": page,
            'per-page': per_page
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
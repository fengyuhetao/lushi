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

/**
 * token FAC14ogcN8KXFAMdVjOnOa4U2P7J3Gzl_1469188877
 * cardset_id    卡组id
 */
function dealCardSet(cardset_id, callback) {
    server.request({
        data: {
            "access_token": access_token,
            "cardset_id": cardset_id
        },
        route: "/cardset/remove",
        success: function(data) {
            callback(data)
        }
    })
}

/**
 * 获取卡牌所有角色
 */
function getRoles(callback) {
    server.request({
        data: {
        },
        route: "/card/attrs",
        success: function(data) {
            callback(data)
        }
    })
}

module.exports = {
    getPersonalCardSet : getPersonalCardSet,
    getHotCardSet: getHotCardSet,
    dealCardSet: dealCardSet,
    getRoles: getRoles
}
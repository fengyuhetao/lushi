var server = getApp().use('lib/server.js');

function slide(callback) {
    server.request({
        data: {
            is_slide: 1,
            fields: 'info_id,slide_url'
        },
        route: '/info',
        success: function(data) {
            callback(data)
        }
    })
}

function getResource(callback) {
    server.request({
        data: {
            page: 1,
        },
        route: '/info',
        success: function(data) {
            callback(data)
        }
    })
}

function getAnchors(platform, callback) {
    server.request({
        data: {
            "platform": platform
        },
        route: '/anchor/index',
        success: function(data) {
            callback(data)
        }
    })
}

function getDetail(info_id, callback) {
    server.request({
        data: {
            "id": info_id
        },
        route: '/info/detail',
        success: function(data) {
            callback(data)
        }
    })
}

function getAnchorData(user_id, type = 0, tag = "", callback) {
    server.request({
        data: {
            "is_platform": 0,
            "user_id": user_id,
            "type": type,
            "tag": tag
        },
        route: '/info',
        success: function(data) {
            callback(data)
        }
    })
}

module.exports = {
    slide: slide,
    getResource: getResource,
    getAnchors: getAnchors,
    getDetail: getDetail,
    getAnchorData: getAnchorData
}
var server = getApp().use('lib/server.js');

// 获取首页轮播图
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

// 获取首页资讯
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

// 获取所有主播信息
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

// 获取单个主播信息
function getAnchor(user_id, callback) {
    server.request({
        data: {
            "id": user_id
        },
        route: '/anchor/detail',
        success: function(data) {
            callback(data)
        }
    })
}

// 获取单个资讯详情
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

// 获取资讯的内容
function getContent(info_id, callback) {
    server.request({
        data: {
            "id": info__id
        },
        route: '/html/info',
        success: function(data) {
            callback(data)
        }
    })
}

// 获取单个主播的资讯和视频
function getAnchorData(user_id, type = 0, callback) {
    server.request({
        data: {
            "user_id": user_id,
            "type": type
        },
        route: '/info',
        success: function(data) {
            callback(data)
        }
    })
}

// 获取单个主播的卡组
function getAnchorKazu(user_id, callback) {
    server.request({
        data: {
            "user_id": user_id,
            "tag": "卡组"
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
    getAnchor: getAnchor,
    getDetail: getDetail,
    getAnchorData: getAnchorData,
    getAnchorKazu: getAnchorKazu,
    getContent: getContent
}
var server = getApp().use('lib/server.js');

/**
 * 获取首页轮播图
 * callback     回调函数
 */
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

/**
 * 获取首页资讯
 * callback       回调函数
 */
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

/**
 * 获取所有主播信息
 * platfor     主播所属平台    若为空，则返回所有平台的主播
 * callback    回调函数
 */ 
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

/**
 * 获取单个主播信息
 * user_id     主播id
 * callback    回调函数
 */ 
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

/** 
 * 获取单个资讯详情
 * info_id    资讯id
 * callback   回调函数
 */
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

/**
 * 获取资讯的内容
 * info_id    资讯id
 * callback   回调函数
 */ 
function getContent(info_id, callback) {
    server.request({
        data: {
            "id": info_id
        },
        route: '/html/info',
        success: function(data) {
            callback(data)
        }
    })
}

/**
 * 获取单个主播的资讯和视频
 * user_id    主播id
 * type       类型：0 普通资讯  1 视频资讯
 * callback   回调函数
 */
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

/** 
 * 获取所有的视频信息
 * callback   回调函数
 */
function getVideos(callback) {
    server.request({
        data: {
            "type" : 1
        },
        route: '/info',
        success: function(data) {
            callback(data)
        }
    })
}

/**
 * 获取单个主播的卡组
 * user_id    主播id
 * callback   回调函数 
 */ 
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

/**
 * 获取主播所属平台信息
 * callback    回调函数
 * API地址     http://test.api.lushibo.com/v1/anchor/platforms 
 */
function getPlatForms(callback) {
    server.request({
        data: {
        },
        route: '/anchor/platforms',
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
    getContent: getContent,
    getVideos: getVideos,
    getPlatForms: getPlatForms
}
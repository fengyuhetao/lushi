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
            is_slide: 0,
            page: 1,
        },
        route: '/info',
        success: function(data) {
            callback(data)
        }
    })
}

module.exports = {
    slide: slide,
    getResource: getResource
}
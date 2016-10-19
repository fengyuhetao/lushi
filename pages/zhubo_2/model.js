var server = getApp().use('lib/server.js');

function getAnchorData(platform, callback) {
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


module.exports = {
    getAnchorData: getAnchorData,
}
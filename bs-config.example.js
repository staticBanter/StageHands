
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
 module.exports = {
    "ui":false,
    "files": [
        "./prod/",
        "./tests/"
    ],
    "watchEvents": [
        "change",
        "add",
        "addDir"
    ],
    "watch": true,
    "ignore": [],
    "single": false,
    "watchOptions": {
        "ignoreInitial": true
    },
    "server":{
        baseDir:"./tests",
        directory:false,
        index:"index.html",
        routes:{
            "/":"./tests/",
            "/prod/":"./prod/",
            "/fonts/":"./fonts/",
            "/storage/":"./storage/"
        }
    },
    "proxy": false,
    "port": 3000,
    "middleware": false,
    "serveStatic": [],
    "ghostMode":false,
    "logLevel": "debug",
    "logPrefix": "~StageHands~",
    "logConnections": true,
    "logFileChanges": true,
    "online":false,
    "logSnippet": true,
    "rewriteRules": [],
    "open": false,
    "browser": "default",
    "cors": false,
    "xip": false,
    "hostnameSuffix": false,
    "reloadOnRestart": true,
    "notify": false,
    "scrollProportionally": true,
    "scrollThrottle": 0,
    "scrollRestoreTechnique": "window.name",
    "scrollElements": [],
    "scrollElementMapping": [],
    "reloadDelay": 0,
    "reloadDebounce": 1500,
    "reloadThrottle": 3100, // This should allow for a max 2 reloads before it throttles, we add 100 just to make sure we don't false trigger this
    "plugins": [],
    "injectChanges": true,
    "startPath": null,
    "minify": false,
    "host": null,
    "localOnly": true,
    "codeSync": true,
    "timestamps": true,
    "clientEvents": [],
    "socket": {
        "namespace":"/stagehands",
        "domain":"localhost:3000",
        "socketIoOptions": {
            "log": false
        },
        "socketIoClientConfig": {
            "reconnectionAttempts": 50
        },
        "path": "/browser-sync/socket.io",
        "clientPath": "/browser-sync",
        "namespace": "/browser-sync",
        "clients": {
            "heartbeatTimeout": 5000
        }
    },
    "tagNames": {
        "less": "link",
        "scss": "link",
        "css": "link",
        "jpg": "img",
        "jpeg": "img",
        "png": "img",
        "svg": "img",
        "gif": "img",
        "js": "script"
    },
    "injectNotification": false
};
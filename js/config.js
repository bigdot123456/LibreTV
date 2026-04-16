// 全局常量配置（移除密码相关）
const PROXY_URL = '/proxy/';    
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// 【替换为稳定可访问的源】影视+直播源（亲测可用）
const API_SITES = {
    // === 影视类（稳定源） ===
    yingshi1: {
        api: 'https://jx.jsonplayer.com/player/api.php?url=',
        name: '解析源1',
        adult: false
    },
        yingshi1a: {
        api: 'https://6296.kstore.vip/facat.json',
        name: '肥猫',
        adult: false
    },
    yingshi1b: {
        api: 'https://www.fantuan.tv/api.php/provide/vod/',
        name: '饭团影视',
        adult: false
    },
    yingshi2: {
        api: 'https://www.ckmov.vip/api.php/provide/vod',
        name: 'CK影视',
        adult: false
    },
    yingshi3: {
        api: 'https://api.61g.tv/api.php/provide/vod',
        name: '61影视',
        adult: false
    },
    // === 直播类（稳定源） ===
    live1: {
        api: 'https://live.911cf.com/api/live/list',
        name: '911直播',
        adult: false,
        type: 'live'
    },
    live2: {
        api: 'https://www.tvbox1.com/api.php/provide/live',
        name: 'TVBox直播',
        adult: false,
        type: 'live'
    },
        live2a: {
        api: 'https://api.douban.com/v2/live/showing',
        name: '豆瓣直播',
        adult: false,
        type: 'live'
    },
    live3a: {
        api: 'https://www.tvbox1.com/api.php/provide/live',
        name: 'TVBox直播源',
        adult: false,
        type: 'live'
    },
    live4a: {
        api: 'https://live.fengniao.com/api/getLiveList',
        name: '蜂鸟直播',
        adult: false,
        type: 'live'
    },
    live3: {
        api: 'https://api.bilibili.com/x/player/playurl?cid=252106241&bvid=BV1xx411c7m8&qn=116',
        name: 'B站测试直播',
        adult: false,
        type: 'live'
    }
};

// 直播专属配置
const LIVE_CONFIG = {
    refreshInterval: 30000,
    liveTypeKey: 'type',
    liveValue: 'live',
    supportHLS: true,
    liveQuality: ['蓝光', '超清', '高清', '标清'],
    timeout: 10000
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;
window.LIVE_CONFIG = LIVE_CONFIG;

// 聚合搜索配置
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,
    timeout: 8000,
    maxResults: 10000,
    parallelRequests: true,
    showSourceBadges: true,
    includeLiveSources: true
};

// API请求配置（适配新源）
const API_CONFIG = {
    search: {
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    live: {
        path: '?ac=liveList&wd=',
        pagePath: '?ac=liveList&wd={query}&pg={page}',
        maxPages: 10,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 正则表达式（适配主流播放格式）
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;
const LIVE_STREAM_PATTERN = /\$https?:\/\/[^"'\s]+?\.flv|\$https?:\/\/[^"'\s]+?\.ts/g;

// 播放器配置
const CUSTOM_PLAYER_URL = 'player.html';
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,
    filterAds: true,
    autoPlayNext: true,
    adFilteringEnabled: true,
    adFilteringStorage: 'adFilteringEnabled',
    liveBuffer: 5,
    liveAutoReconnect: true
};

// 错误信息
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试',
    LIVE_ERROR: '直播流加载失败，请切换直播源或稍后重试'
};

// 安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,
    sanitizeUrls: true,
    maxQueryLength: 100,
};

// 自定义API配置
const CUSTOM_API_CONFIG = {
    separator: ',',
    maxSources: 5,
    testTimeout: 5000,
    namePrefix: 'Custom-',
    validateUrl: true,
    cacheResults: true,
    cacheExpiry: 5184000000,
    adultPropName: 'isAdult'
};

// 彻底移除密码相关配置（关键！）
const HIDE_BUILTIN_ADULT_APIS = false;

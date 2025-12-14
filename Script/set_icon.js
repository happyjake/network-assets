async function main(config) {
    // Qure icon URLs
    var icons = {
        // Streaming
        netflix: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netflix.png',
        disney: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Disney.png',
        youtube: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/YouTube.png',
        spotify: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Spotify.png',
        telegram: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Telegram.png',
        apple: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Apple.png',
        google: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Google_Search.png',
        microsoft: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Microsoft.png',
        openai: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Bot.png',
        // Gaming
        steam: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Steam.png',
        mihoyo: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Game.png',
        // Finance & Crypto
        paypal: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/PayPal.png',
        crypto: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Cryptocurrency_3.png',
        // Communication
        discord: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Discord.png',
        // Utility
        speedtest: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Speedtest.png',
        scholar: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Scholar.png',
        auto: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Auto.png',
        // Regional
        domestic: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/China_Map.png',
        asiantv: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/bilibili.png',
        globaltv: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/HBO_Max.png',
        hk: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png',
        us: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png',
        jp: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png',
        sg: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png',
        tw: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png',
        kr: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Korea.png',
        uk: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_Kingdom.png',
        de: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Germany.png',
        // System
        proxy: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Rocket.png',
        others: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Final.png',
        localservices: 'https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Server.png',
    };

    // Map proxy group names to icon keys (order matters - more specific first)
    var nameToIcon = {
        // Auto/UrlTest groups
        'auto': 'auto',
        'urltest': 'auto',
        'url-test': 'auto',
        // Region groups (check these before generic names)
        'jms-hk': 'hk',
        'jms-us': 'us',
        'jms-jp': 'jp',
        'jms-sg': 'sg',
        'jms-tw': 'tw',
        'jms-kr': 'kr',
        'jms-uk': 'uk',
        'jms-de': 'de',
        '-hk': 'hk',
        '-us': 'us',
        '-jp': 'jp',
        '-sg': 'sg',
        '-tw': 'tw',
        '-kr': 'kr',
        '-uk': 'uk',
        '-de': 'de',
        'hong kong': 'hk',
        'hongkong': 'hk',
        '香港': 'hk',
        'united states': 'us',
        '美国': 'us',
        'japan': 'jp',
        '日本': 'jp',
        'singapore': 'sg',
        '新加坡': 'sg',
        'taiwan': 'tw',
        '台湾': 'tw',
        'korea': 'kr',
        '韩国': 'kr',
        // Streaming
        'netflix': 'netflix',
        'disney': 'disney',
        'disney+': 'disney',
        'youtube': 'youtube',
        'spotify': 'spotify',
        'telegram': 'telegram',
        'apple': 'apple',
        'google': 'google',
        'microsoft': 'microsoft',
        'openai': 'openai',
        'chatgpt': 'openai',
        // Gaming
        'steam': 'steam',
        'mihoyo': 'mihoyo',
        // Finance
        'paypal': 'paypal',
        'crypto': 'crypto',
        'cryptocurrency': 'crypto',
        // Communication
        'discord': 'discord',
        // Utility
        'speedtest': 'speedtest',
        'scholar': 'scholar',
        // Regional content
        'domestic': 'domestic',
        'china': 'domestic',
        '国内': 'domestic',
        'asian tv': 'asiantv',
        'asiantv': 'asiantv',
        'global tv': 'globaltv',
        'globaltv': 'globaltv',
        // System
        'proxy': 'proxy',
        'others': 'others',
        'other': 'others',
        '其他': 'others',
        'localservices': 'localservices',
        'local services': 'localservices',
        'local': 'localservices',
    };

    // Assign icons to proxy groups
    if (config['proxy-groups']) {
        for (var group of config['proxy-groups']) {
            var name = group.name.toLowerCase();
            for (var key in nameToIcon) {
                if (name.includes(key) || name === key) {
                    group.icon = icons[nameToIcon[key]];
                    break;
                }
            }
        }
    }

    return config;
}

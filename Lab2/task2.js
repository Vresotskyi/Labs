function mergeSettings1(defaults, userSettings) {
    return Object.assign({}, defaults, userSettings);
}

function mergeSettings2(defaults, userSettings) {
    return { ...defaults, ...userSettings };
}

function mergeSettings3(defaults, userSettings) {
    let mergedSettings3 = { ...defaults };
    for (let key in userSettings) {
        if (userSettings.hasOwnProperty(key)) {
            mergedSettings3[key] = userSettings[key];
        }
    }
    return mergedSettings3;
}

const defaults = {
    mode: 'test',
    debugLevel: 'error',
    logFolder: 'root'
};

const userSettings = {
    mode: 'production',
    debugLevel: 'trace'
};

console.log(mergeSettings1(defaults, userSettings));
console.log(mergeSettings2(defaults, userSettings));
console.log(mergeSettings3(defaults, userSettings));
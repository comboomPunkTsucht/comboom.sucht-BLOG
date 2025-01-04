// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
    resolver: {
        sourceExts: ['jsx', 'js', 'ts', 'tsx', 'svg'],
    },
    projectRoot: './',
    watch: false,
    server: {
        port: 3000,
    },
    assetExts: ['png', 'jpg', 'jpeg', 'gif','svg'],
    platforms: ['web'],

});

module.exports = config;

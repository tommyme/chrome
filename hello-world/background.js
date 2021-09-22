// background.js

let color = '#3aa757';

// 安装完成的时候存储一个color值
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('pw.live')) {
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            files: ['content.js']
        });
    }
    });

chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.get(activeInfo.tabId, tab => {
        if (tab.url.includes('pw.live')) {
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['content.js']
        });
        } else {
        fetch('http://localhost:5000/mono/disable')
            .catch(error => console.error('Error disabling mono audio:', error));
        }
    });
});
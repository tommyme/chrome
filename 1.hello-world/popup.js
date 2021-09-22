// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor"); // 获取button ele

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color; // 改变button的颜色
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    });
}
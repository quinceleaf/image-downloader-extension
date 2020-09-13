// content.js

// for site: https://goskatalog.ru/

const regEx = /\/public\/150\/[0-9]{1,15}\//g;

let keyBlock = null;
let urlExtract = null;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            keyBlock = $("img.img-responsive.ng-scope")
            if (keyBlock !== undefined || keyBlock !== null) {
                for (let i = 0; i < keyBlock.length; i++) {
                    urlExtract = keyBlock[i].src;
                    urlExtract = urlExtract.replace(regEx,'/original/');
                    urlExtract = urlExtract.replace('.jpg?','?');
                    if (keyBlock !== undefined || keyBlock !== null) {
                        chrome.runtime.sendMessage({"message": "download_url", "url": `${urlExtract}`});
                    }
                }
            }
        }
    }
);



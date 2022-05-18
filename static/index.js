// zook is gay
//no you wh
//when react version doner mom
// i literally learned css before you finished react
//screw you
//bro did you memorize rejects
// (new RegEx(/*en/)).test(string) ? "gay" : "not gay"
//how to make blacklpist with a json file python9160 this is clientside
//yeye ik
const form = document.querySelector('form');
const input = document.querySelector('input');
// const blacklisted = require("./blacklisted.json").patterns;
form.addEventListener('submit', async event => {
  event.preventDefault();
  window.navigator.serviceWorker.register('./sw.js', {
    scope: __uv$config.prefix
  }).then(() => {
    let url = input.value.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    if (url == "pornhub.com") url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    if (url == "xvideo.com") url =
'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    if (url == "canary.giggl.app") url =
'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    if (url == "wattpad.com") url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
  });
});
//make a regex check for a url including from ./blacklisted.json
// if (blacklisted.some(regex => regex.test(url))) {
//   window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
// }
function isUrl(val = '') {
  if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
  return false;
};
if (window.Worker && !sessionStorage['stats-worker-active']) {
  var analyticsWorker = new Worker("/stats.worker.js");
  sessionStorage['ld-worker-active'] = analyticsWorker;
}

function onLoad(){
  let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}

if (!inFrame && !navigator.userAgent.includes("Firefox")) {
const popup = open("about:blank", "_blank")
if (!popup || popup.closed) {
  alert("Popups are disabled!")
} else {
  const doc = popup.document
  const iframe = doc.createElement("iframe")
  const style = iframe.style
  const img = doc.createElement("link")

  img.rel = "icon"
  img.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png"
  doc.title = "Google Drive"

  iframe.src = location.href
  style.position = "fixed"
  style.top = style.bottom = style.left = style.right = 0
  style.border = style.outline = "none"
  style.width = style.height = "100%"

  doc.body.appendChild(iframe)
  location.replace("https://google.com")
    }
}

}


// Theme stuff
let theme_chooser = document.getElementById('theme-chooser-sel')
theme_chooser.onchange = () => {
  localStorage.setItem('customThemeName', theme_chooser.options[theme_chooser.selectedIndex].value)
  location.reload()
}

// ==UserScript==
// @name         r/PlaceTux Overlay
// @namespace    https://github.com/r-PlaceTux/Overlay
// @version      1.0.4
// @description  FLOSS forever!
// @author       r/PlaceTux
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license      GPL-3.0
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = "https://github.com/uAliFurkanY/Overlay/raw/main/vcjoverlay.png";
                i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
                console.log(i);
                return i;
            })())
    }, false);
}

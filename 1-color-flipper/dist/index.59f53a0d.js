!function(){const e=document.querySelectorAll(".controls button"),t=document.querySelector("#color-random"),n=document.querySelector("#color-preview");function o(e){n.textContent=e,document.documentElement.style.setProperty("--bg",e)}function r(e,t){return Math.floor(Math.random()*(t-e+1)+e)}t.addEventListener("click",(()=>{o(function(e,t,n){let o=e.toString(16),r=t.toString(16),c=n.toString(16);return o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),c.length<2&&(c="0"+c),"#"+o+r+c}(r(0,255),r(0,255),r(0,255)))})),e.forEach((e=>{e.addEventListener("click",(e=>{let t="#"+e.target.dataset.for;const n=document.querySelector(t);n.classList.remove("hidden"),document.querySelectorAll(".panel").forEach((e=>{e!==n&&e.classList.add("hidden")}))}))}));const c=document.querySelector("#color-manual"),l=document.querySelector("#color-manual-submit"),u=document.querySelector("#panel-manual"),d=document.querySelector(".panel__error");function s(e){e.preventDefault();let t=c.value;t.startsWith("#")||(t="#"+t),!function(e){let t=/^#[0-9a-fA-F]{6}$/;return console.log(e,t,t.test(e)),t.test(e)}(t)?d.classList.contains("hidden")&&d.classList.remove("hidden"):(o(t),d.classList.add("hidden")),c.focus()}u.addEventListener("submit",(e=>{s(e)})),l.addEventListener("click",(e=>{s(e)}))}();
//# sourceMappingURL=index.59f53a0d.js.map
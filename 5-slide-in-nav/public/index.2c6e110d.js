!function(){const e=document.querySelector(".nav"),t=document.querySelector("body"),n=document.querySelector(".nav__open"),a=document.querySelector(".nav__close"),c=document.querySelectorAll("[tabindex]");function o(){c.forEach((e=>{"0"===e.getAttribute("tabindex")?e.setAttribute("tabindex","-1"):e.setAttribute("tabindex",0)}))}function r(){e.classList.remove("nav--open"),t.classList.remove("no-scroll"),e.setAttribute("aria-hidden","true"),n.removeAttribute("aria-expanded"),o(),n.focus()}n.addEventListener("click",(()=>{e.classList.contains("nav--open")?r():(e.classList.add("nav--open"),t.classList.add("no-scroll"),e.removeAttribute("aria-hidden"),n.setAttribute("aria-expanded","true"),o(),a.focus())})),a.addEventListener("click",(()=>{r()})),t.addEventListener("click",(e=>{e.target.classList.contains("no-scroll")&&r()}))}();
//# sourceMappingURL=index.2c6e110d.js.map

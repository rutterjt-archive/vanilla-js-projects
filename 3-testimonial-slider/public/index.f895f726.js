!function(){const e=document.querySelector("#prev"),c=document.querySelector("#next"),t=document.querySelectorAll(".card");let r=0;function d(e){t.forEach((c=>{c.id===`card${e}`?c.classList.add("card--active"):c.classList.remove("card--active")}))}e.addEventListener("click",(()=>{r<=0?r=4:r--,d(r)})),c.addEventListener("click",(()=>{r>=4?r=0:r++,d(r)}))}();
//# sourceMappingURL=index.f895f726.js.map
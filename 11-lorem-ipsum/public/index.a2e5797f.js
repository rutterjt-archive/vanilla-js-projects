!function(){const e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Porta lorem mollis aliquam ut. Tortor posuere ac ut consequat semper viverra nam. Venenatis lectus magna fringilla urna. Interdum velit laoreet id donec ultrices tincidunt arcu. Eu scelerisque felis imperdiet proin fermentum leo vel. Et netus et malesuada fames. Turpis tincidunt id aliquet risus feugiat. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.","Sit amet purus gravida quis blandit turpis cursus. Senectus et netus et malesuada fames. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Faucibus turpis in eu mi bibendum neque. Id cursus metus aliquam eleifend mi in nulla. Maecenas sed enim ut sem. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Tellus id interdum velit laoreet id. Quis commodo odio aenean sed adipiscing. Nibh tortor id aliquet lectus proin nibh nisl. Sed faucibus turpis in eu mi bibendum neque egestas congue. Pulvinar elementum integer enim neque. Tincidunt lobortis feugiat vivamus at augue eget arcu. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Interdum consectetur libero id faucibus nisl tincidunt eget. Imperdiet massa tincidunt nunc pulvinar sapien et. Vivamus arcu felis bibendum ut tristique et egestas.","Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Ut diam quam nulla porttitor massa id neque aliquam. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Quisque id diam vel quam elementum pulvinar etiam non. Orci ac auctor augue mauris augue neque gravida. Ac orci phasellus egestas tellus rutrum tellus. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Rutrum quisque non tellus orci ac auctor. Fermentum dui faucibus in ornare quam viverra. Sit amet cursus sit amet dictum sit amet justo. Placerat duis ultricies lacus sed. Eu sem integer vitae justo eget magna fermentum iaculis eu. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Dignissim diam quis enim lobortis scelerisque fermentum dui. Vel quam elementum pulvinar etiam non quam. Ac turpis egestas maecenas pharetra convallis posuere morbi. Ut eu sem integer vitae justo.","Metus vulputate eu scelerisque felis. Pellentesque elit ullamcorper dignissim cras tincidunt. Commodo elit at imperdiet dui accumsan. Proin sed libero enim sed faucibus turpis in eu mi. Eget nunc lobortis mattis aliquam. Mauris sit amet massa vitae tortor. Orci phasellus egestas tellus rutrum tellus. Eu sem integer vitae justo eget magna fermentum iaculis eu. Nam aliquam sem et tortor consequat id porta nibh. Sit amet purus gravida quis blandit.","Viverra mauris in aliquam sem fringilla. Sit amet porttitor eget dolor morbi non arcu. Adipiscing commodo elit at imperdiet dui accumsan. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Amet facilisis magna etiam tempor. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Lectus arcu bibendum at varius vel pharetra vel. Netus et malesuada fames ac turpis. Risus nullam eget felis eget nunc lobortis mattis. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Leo a diam sollicitudin tempor id eu nisl nunc mi. Tellus id interdum velit laoreet id. Duis convallis convallis tellus id. Augue neque gravida in fermentum et sollicitudin ac. Commodo ullamcorper a lacus vestibulum sed arcu non. Condimentum id venenatis a condimentum."],i=document.querySelector("#generator"),t=document.querySelector("#number"),u=document.querySelector("#type"),a=document.querySelector("#submit"),n=document.querySelector("#copy"),s=document.querySelector("#result");function r(){for(;s.firstChild;)s.removeChild(s.firstChild)}function l(){return e.join(" ")}function m(i){let t=i<e.length?i:i%e.length;return e[t]}function o(e){if(r(),!(e<=0))for(let i=0;i<e;i++){const e=document.createElement("p");e.textContent=m(i),s.appendChild(e)}}function c(e){if(r(),e<=0)return;let i=function(e){let i=[];do{i=i.concat(l().split(". ")),i.pop()}while(i.length<=e);return i.slice(0,e)}(e);const t=document.createElement("p");for(let u=0;u<e;u++){let e=i[u]+". ";const a=document.createTextNode(e);t.appendChild(a)}s.appendChild(t)}function d(e){if(r(),e<=0)return;let i=function(e){let i=[];do{i=i.concat(l().split(" "))}while(i.length<=e);return i.slice(0,e).map((e=>e.replace(/\W/,"")))}(e);const t=document.createElement("p");for(let e=0;e<i.length;e++){let u=i[e]+" ";const a=document.createTextNode(u);t.appendChild(a)}s.appendChild(t)}function p(e){e.preventDefault();let i=u.value,a=parseInt(t.value);(isNaN(a)||a<0)&&(a=0),"paragraph"===i?o(a):"sentence"===i?c(a):"word"===i&&d(a),g=s.innerText}i.addEventListener("submit",p),a.addEventListener("click",p),n.addEventListener("click",(()=>{navigator.clipboard.writeText(g).then((function(){console.log("Copied!")}),(function(){console.log("Failed!")}))})),o(1);let g=s.innerText}();
//# sourceMappingURL=index.a2e5797f.js.map
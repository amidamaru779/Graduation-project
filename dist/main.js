(()=>{"use strict";const e=({formName:e,someElem:t=[]})=>{const o=document.querySelector(e),c="Ошибка...",n=()=>o.querySelector(".status"),s=e=>{n().textContent=e};try{if(!o)throw new Error("Пожалуйста введите правильную форму");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=new FormData(o),l={},r=o.querySelectorAll('input[type="text"]'),a=document.querySelector("#calc .container");var i;(e=>{const t=document.createElement("div");t.classList.add("status"),t.style.color="black",e.append(t)})(o),s("Загрузка..."),e.forEach(((e,t)=>{l[t]=e})),a&&t.forEach((e=>{const t=document.getElementById(e.id);("block"===e.type||"input"===e.type)&&(l[e.id]=t.value)})),(e=>{let t=!0;return e.forEach((e=>{e.classList.contains("success")||(t=!1)})),t})(r)?(i=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{s("Спасибо! Наш менеджер с Вами свяжется"),r.forEach((e=>{e.value=""})),setTimeout((()=>{n().remove()}),2e3)})).catch((e=>{s(c)})):(s(c),setTimeout((()=>{n().remove()}),2e3))})()}))}catch(e){console.log(e.message)}};(()=>{const e=document.querySelector(".overlay"),t=document.querySelector(".btn-block"),o=document.querySelectorAll(".btn-sm"),c=document.querySelectorAll(".header-modal__close, .services-modal__close");let n;const s=(t,o)=>{n=o,((t,o)=>{n&&(n.style.opacity=o,e.style.opacity=o,(({timing:e,draw:t,duration:o})=>{const c=performance.now();requestAnimationFrame((function n(s){let l=(s-c)/o;l>1&&(l=1);const r=e(l);t(r),l<1&&requestAnimationFrame(n)}))})({duration:200,timing:e=>e,draw(c){"block"===t?(n.style.display=t,n.style.opacity=o+c,e.style.display=t,e.style.opacity=o+c):(n.style.opacity=o-c,e.style.opacity=o-c,n.style.opacity<=0&&e.style.opacity<=0&&(n.style.display=t,e.style.display=t))}}))})(t,"block"===t?0:1)};t.addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector(".header-modal");s("block",t)})),o.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector(".services-modal");s("block",t)}))})),c.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),s("none",n)}))})),e.addEventListener("click",(e=>{n&&!n.contains(e.target)&&s("none",n)}))})(),(()=>{const e=document.querySelector(".smooth-scroll"),t=document.querySelector("#header"),o=()=>{t.getBoundingClientRect().bottom<=0?(e.classList.add("pointer"),e.style.display="block"):e.style.display="none"};window.addEventListener("scroll",(()=>{o()})),e.addEventListener("click",(e=>{e.preventDefault(),(()=>{const e=window.scrollY;let t;const o=c=>{t||(t=c);const n=c-t,s=Math.min(n/500,1);window.scrollTo(0,e+(0-e)*s),s<1&&requestAnimationFrame(o)};requestAnimationFrame(o)})()})),o()})(),(()=>{const e=/^[А-Яа-яЁёA-Za-z+$]/,t=/^\+?[0-9]{0,16}$/,o=document.querySelectorAll('.form-control[name="fio"]'),c=document.querySelectorAll('.form-control[name="phone"]'),n=(e,t)=>e.test(t);o.forEach((t=>{t.addEventListener("input",(o=>{o.preventDefault(),n(e,t.value)?(t.classList.add("success"),t.setCustomValidity("")):""===t.value.trim()?(t.classList.remove("success"),t.setCustomValidity("Заполните это поле")):(t.classList.remove("success"),t.setCustomValidity("Ввод должен состоять из русских или латинских символов"))}))})),c.forEach((e=>{e.addEventListener("input",(o=>{o.preventDefault(),n(t,e.value)?(e.classList.add("success"),e.setCustomValidity("")):""===e.value.trim()?(e.classList.remove("success"),e.setCustomValidity("Заполните это поле")):(e.classList.remove("success"),e.setCustomValidity("Разрешён ввод только: + (плюс) и 16 цифр"))}))}))})(),(()=>{const e=document.querySelector("#calc .container"),t=document.querySelector("#calc-type"),o=document.querySelector("#calc-type-material"),c=document.querySelector("#calc-input"),n=document.querySelector("#calc-total"),s=/^[0-9]+$/;(()=>{if(e){const l=e=>{e.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.match(s,"")}))},r=()=>{const e=t.options[0],c=o.options[0];e.text="Это обязательное поле*",c.text="Это обязательное поле*"};e.addEventListener("input",(e=>{e.preventDefault(),e.target!==t&&e.target!==o&&e.target!==c||(()=>{const e=+t.options[t.selectedIndex].value,s=+o.options[o.selectedIndex].value,l=c.value;if(isNaN(e)||isNaN(s))n.textContent=0;else{let t=Math.round(e*s*l);n.value=t}})()})),r(),l(c)}})()})(),(e=>{const t=document.querySelectorAll(".count_1 span"),o=document.querySelectorAll(".count_2 span"),c=document.querySelectorAll(".count_3 span"),n=document.querySelectorAll(".count_4 span");let s;const l=()=>{let l=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;t<0&&(t=0);let o=Math.floor(t/60/60/24),c=Math.floor(t/60/60%24),n=Math.floor(t/60%60),s=Math.floor(t%60);return o=o<10?"0"+o:o,c=c<10?"0"+c:c,n=n<10?"0"+n:n,s=s<10?"0"+s:s,{timeRemaining:t,days:o,hours:c,minutes:n,seconds:s}})();t.forEach((e=>{e.textContent=l.days})),o.forEach((e=>{e.textContent=l.hours})),c.forEach((e=>{e.textContent=l.minutes})),n.forEach((e=>{e.textContent=l.seconds})),0===l.timeRemaining&&clearInterval(s)};l(),s=setInterval(l,1e3)})("30 october 2024 12:45:00"),(()=>{const e=(e,t,o,c,n,s)=>{const l=document.querySelector(e),r=document.querySelectorAll(t);let a=0,i=0;const d=()=>{r.forEach(((e,t)=>{e.style.display="none",window.innerWidth>=576?(a=s,t>=i&&t<i+a&&(e.style.display="block")):(a=1,t===i&&(e.style.display="block"))}))};l.addEventListener("click",(e=>{e.preventDefault(),r[i].classList.remove(n),d(),e.target.closest(o)?i-=a:e.target.closest(c)&&(i+=a),i>=r.length&&(i=0),i<0&&(i=r.length-a),r[i].classList.add(n),d()})),window.addEventListener("resize",d),d()};e("#benefits",".benefits__item",".benefits__arrow--left",".benefits__arrow--right","benefits__item-active",3),e("#services",".service-block",".services__arrow--left",".services__arrow--right","service-block-active",2)})(),(()=>{const e=document.querySelectorAll(".sertificate-document"),t=document.getElementById("modal"),o=document.getElementById("modalImg"),c=document.getElementById("closeBtn"),n=document.querySelector(".document-overlay");e.forEach((e=>{e.addEventListener("click",(c=>{c.preventDefault();const s=e.getAttribute("href");o.src=s,t.style.display="flex",n.style.display="flex"}))})),c.addEventListener("click",(()=>{t.style.display="none"})),t.addEventListener("click",(e=>{e.target===t&&(t.style.display="none")}))})(),e({formName:'form[name="action-form"]',someElem:[{type:"block",id:"calc-total"}]}),e({formName:'[name="action-form2"]',someElem:[{type:"block",id:"calc-total"}]})})();
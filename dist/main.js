(()=>{"use strict";const e=({formName:e,someElem:t=[]})=>{const o=document.querySelector(e),c="Ошибка...",s=()=>o.querySelector(".status"),n=e=>{s().textContent=e};try{if(!o)throw new Error("Пожалуйста введите правильную форму");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=new FormData(o),l={},a=o.querySelectorAll('input[type="text"]'),r=document.querySelector("#calc .container");var i;(e=>{const t=document.createElement("div");t.classList.add("status"),t.style.color="black",e.append(t)})(o),n("Загрузка..."),e.forEach(((e,t)=>{l[t]=e})),r&&t.forEach((e=>{const t=document.getElementById(e.id);("block"===e.type||"input"===e.type)&&(l[e.id]=t.value)})),(e=>{let t=!0;return e.forEach((e=>{e.classList.contains("success")||(t=!1)})),t})(a)?(i=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{n("Спасибо! Наш менеджер с Вами свяжется"),a.forEach((e=>{e.value=""})),setTimeout((()=>{s().remove()}),2e3)})).catch((e=>{n(c)})):(n(c),setTimeout((()=>{s().remove()}),2e3))})()}))}catch(e){console.log(e.message)}};(()=>{const e=document.querySelector(".overlay"),t=document.querySelector(".btn-block"),o=document.querySelectorAll(".btn-sm"),c=document.querySelectorAll(".header-modal__close, .services-modal__close");let s;const n=(t,o)=>{s=o,((t,o)=>{s&&(s.style.opacity=o,e.style.opacity=o,(({timing:e,draw:t,duration:o})=>{const c=performance.now();requestAnimationFrame((function s(n){let l=(n-c)/o;l>1&&(l=1);const a=e(l);t(a),l<1&&requestAnimationFrame(s)}))})({duration:200,timing:e=>e,draw(c){"block"===t?(s.style.display=t,s.style.opacity=o+c,e.style.display=t,e.style.opacity=o+c):(s.style.opacity=o-c,e.style.opacity=o-c,s.style.opacity<=0&&e.style.opacity<=0&&(s.style.display=t,e.style.display=t))}}))})(t,"block"===t?0:1)};t.addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector(".header-modal");n("block",t)})),o.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector(".services-modal");n("block",t)}))})),c.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),n("none",s)}))})),e.addEventListener("click",(e=>{s&&!s.contains(e.target)&&n("none",s)}))})(),(()=>{const e=document.querySelector(".smooth-scroll"),t=document.querySelector("#header"),o=()=>{t.getBoundingClientRect().bottom<=0?(e.classList.add("pointer"),e.style.display="block"):e.style.display="none"};window.addEventListener("scroll",(()=>{o()})),e.addEventListener("click",(e=>{e.preventDefault(),(()=>{const e=window.scrollY;let t;const o=c=>{t||(t=c);const s=c-t,n=Math.min(s/500,1);window.scrollTo(0,e+(0-e)*n),n<1&&requestAnimationFrame(o)};requestAnimationFrame(o)})()})),o()})(),(()=>{const e=/^[А-Яа-яЁёA-Za-z+$]/,t=/^\+?[0-9]{0,16}$/,o=document.querySelectorAll('.form-control[name="fio"]'),c=document.querySelectorAll('.form-control[name="phone"]'),s=(e,t)=>e.test(t);o.forEach((t=>{t.addEventListener("input",(o=>{o.preventDefault(),s(e,t.value)?(t.classList.add("success"),t.setCustomValidity("")):""===t.value.trim()?(t.classList.remove("success"),t.setCustomValidity("Заполните это поле")):(t.classList.remove("success"),t.setCustomValidity("Ввод должен состоять из русских или латинских символов"))}))})),c.forEach((e=>{e.addEventListener("input",(o=>{o.preventDefault(),s(t,e.value)?(e.classList.add("success"),e.setCustomValidity("")):""===e.value.trim()?(e.classList.remove("success"),e.setCustomValidity("Заполните это поле")):e.value.length>17?(e.classList.remove("success"),e.setCustomValidity("Разрешён ввод только: + (плюс) и 16 цифр")):e.classList.remove("success")}))}))})(),(()=>{const e=document.querySelector("#calc .container"),t=document.querySelector("#calc-type"),o=document.querySelector("#calc-type-material"),c=document.querySelector("#calc-input"),s=document.querySelector("#calc-total"),n=/^[0-9]+$/;(()=>{if(e){const l=e=>{e.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.match(n,"")}))},a=()=>{const e=t.options[0],c=o.options[0];e.text="Это обязательное поле*",c.text="Это обязательное поле*"};e.addEventListener("input",(e=>{e.preventDefault(),e.target!==t&&e.target!==o&&e.target!==c||(()=>{const e=+t.options[t.selectedIndex].value,n=+o.options[o.selectedIndex].value,l=c.value;if(isNaN(e)||isNaN(n))s.textContent=0;else{const t=Math.round(e*n*l);s.value=t}})()})),a(),l(c)}})()})(),(e=>{const t=document.querySelectorAll(".count_1 span"),o=document.querySelectorAll(".count_2 span"),c=document.querySelectorAll(".count_3 span"),s=document.querySelectorAll(".count_4 span");let n;const l=()=>{let l=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;t<0&&(t=0);let o=Math.floor(t/60/60/24),c=Math.floor(t/60/60%24),s=Math.floor(t/60%60),n=Math.floor(t%60);return o=o<10?"0"+o:o,c=c<10?"0"+c:c,s=s<10?"0"+s:s,n=n<10?"0"+n:n,{timeRemaining:t,days:o,hours:c,minutes:s,seconds:n}})();t.forEach((e=>{e.textContent=l.days})),o.forEach((e=>{e.textContent=l.hours})),c.forEach((e=>{e.textContent=l.minutes})),s.forEach((e=>{e.textContent=l.seconds})),0===l.timeRemaining&&clearInterval(n)};l(),n=setInterval(l,1e3)})("30 october 2024 12:45:00"),(()=>{const e=(e,t,o,c,s,n)=>{const l=document.querySelector(e),a=document.querySelectorAll(t);let r=0,i=0;const d=()=>{a.forEach(((e,t)=>{e.style.display="none",window.innerWidth>=576?(r=n,t>=i&&t<i+r&&(e.style.display="block")):(r=1,t===i&&(e.style.display="block"))}))};l.addEventListener("click",(e=>{e.preventDefault(),a[i].classList.remove(s),d(),e.target.closest(o)?i-=r:e.target.closest(c)&&(i+=r),i>=a.length&&(i=0),i<0&&(i=a.length-r),a[i].classList.add(s),d()})),window.addEventListener("resize",d),d()};e("#benefits",".benefits__item",".benefits__arrow--left",".benefits__arrow--right","benefits__item-active",3),e("#services",".service-block",".services__arrow--left",".services__arrow--right","service-block-active",2)})(),(()=>{const e=document.querySelectorAll(".sertificate-document"),t=document.getElementById("modal"),o=document.getElementById("modalImg"),c=document.getElementById("closeBtn"),s=document.querySelector(".document-overlay");e.forEach((e=>{e.addEventListener("click",(c=>{c.preventDefault();const n=e.getAttribute("href");o.src=n,t.style.display="flex",s.style.display="flex"}))})),c.addEventListener("click",(()=>{t.style.display="none"})),t.addEventListener("click",(e=>{e.target===t&&(t.style.display="none")}))})(),e({formName:'form[name="action-form"]',someElem:[{type:"block",id:"calc-total"}]}),e({formName:'[name="action-form2"]',someElem:[{type:"block",id:"calc-total"}]})})();
function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("eWCmQ");let l=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]');const a=document.querySelector('[name="amount"]'),d=document.querySelector(".form");document.querySelectorAll("input");function s(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}let c;d.addEventListener("submit",(function(t){t.preventDefault();let n=a.value,o=parseInt(l.value),r=parseInt(u.value);if(n<0||o<0||r<0)return alert("Wypełnij pola wartością nieujemną!");for(let t=1;t<=n;t++)c=t,s(c,o).then((({position:t,delay:n})=>{e(i).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`Rejected promise ${t} in ${n}ms`)})),o+=r}));
//# sourceMappingURL=03-promises.a540a797.js.map

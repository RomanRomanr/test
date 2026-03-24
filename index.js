import{a as l}from"./assets/vendor-Dl2X3eg5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function u(r,o){const s="28988b93b6304d3885e33119dfdb45e9",t="https://newsapi.org/v2/everything",c={apiKey:s,q:r,pageSize:10,page:o};return(await l.get(t,{params:c})).data}function p(r){const o="https://static6.depositphotos.com/1026266/543/i/450/depositphotos_5437053-stock-photo-woman-pressing-modern-error-button.jpg";let{autor:s,title:n,description:e,publishedAt:t,url:c,urlToImage:i=o}=r;return`
      <li class="li-elem">
    <h2 class="title-h2">${n}</h2>
    <img class="image" src="${i}" alt="">
    ${s?`<p class="autor">${s}</p>`:""}
    <p class="decr">${e}</p>
    <a class="link" href="${c}">Посилання на джерело</a>
    <p class="date"> Was posted ${new Date(t).toLocaleString()}</p>
  </li>`}function f(r){return r.map(p).join("")}const a={form:document.querySelector(".form"),btn:document.querySelector(".js-btn"),ul_list:document.querySelector(".ul-js")};a.form.addEventListener("submit",async r=>{r.preventDefault();const s=new FormData(r.target).get("search-text"),n=await u(s,1),e=f(n.articles);a.ul_list.innerHTML=e,r.target.reset()});
//# sourceMappingURL=index.js.map

import{a}from"./assets/vendor-Dl2X3eg5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function u(r,o){const s="28988b93b6304d3885e33119dfdb45e9",t="https://newsapi.org/v2/everything",i={apiKey:s,q:r,pageSize:10,page:o};return(await a.get(t,{params:i})).data}function l(r){let{autor:o,title:s,description:n,publishedAt:e,url:t,urlToImage:i}=r;return`
      <li>
    <h2>${s}</h2>
    <img src="${i}" alt="">
    <p>${o}</p>
    <p>${n}</p>
    <a href="${t}">Джерело</a>
    <span>${e}</span>
  </li>

    `}function f(r){return r.map(l).join()}const c={form:document.querySelector(".form"),btn:document.querySelector(".js-btn"),ul_list:document.querySelector(".ul-js")};c.form.addEventListener("submit",async r=>{r.preventDefault();const s=new FormData(r.target).get("search-text"),n=await u(s,1),e=f(n.articles);c.ul_list.innerHTML=e,r.target.reset()});
//# sourceMappingURL=index.js.map

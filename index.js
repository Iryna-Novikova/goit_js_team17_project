import{a as p}from"./assets/vendor-B2YOV0tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const e={headerBurger:document.querySelector("[data-menu-open]"),modalHeaderCloseBtn:document.querySelector(".close-menu-btn"),modalHeader:document.querySelector("[data-menu]"),logoLinkMenu:document.querySelector(".logo-link"),mobileNavLinks:document.querySelector(".mobile-nav-links"),artistsListElm:document.querySelector("[data-artist-gallery]"),loadMoreBtnElm:document.querySelector("[data-btn-load-more]"),artistLoaderElm:document.querySelector("[data-artist-loader]"),artistInfoElm:document.querySelector("[data-artist-info]"),artistsModalBackdrop:document.querySelector("[data-artists-modal]"),artistsModalCloseBtn:document.querySelector(".artists-modal-close-btn"),artistModalLoaderElm:document.querySelector("[data-artist-detail-loader]"),feedbackSliderPrevBtn:document.querySelector(".swiper-button-prev"),feedbackSliderNextBtn:document.querySelector(".swiper-button-next"),feedbackSliderPagination:document.querySelector(".swiper-pagination"),openFeedbackBtn:document.querySelector(".leave-feedback-btn"),feedbackLoaderElm:document.querySelector("[data-feedback-loader]"),feedbackSliderWrapperElm:document.querySelector("[data-feedbackLists]"),feedbackFormBackdrop:document.querySelector("[data-feedback-form]"),feedbackFormEL:document.querySelector(".form-main"),feedbackFormCloseBtn:document.querySelector(".form-main-btn"),feedbackFormRatingContainer:document.querySelector(".form-str"),feedbackFormSubmitBtn:document.querySelector(".form-end-button"),body:document.body};function C(){e.modalHeader.classList.add("is-shown-menu-header"),document.addEventListener("keydown",b),e.modalHeader.addEventListener("click",L),e.modalHeaderCloseBtn.addEventListener("click",c),e.mobileNavLinks.addEventListener("click",k),document.body.classList.add("no-scroll")}function c(){e.modalHeader.classList.remove("is-shown-menu-header"),document.removeEventListener("keydown",b),e.modalHeader.removeEventListener("click",L),e.modalHeaderCloseBtn.removeEventListener("click",c),e.mobileNavLinks.removeEventListener("click",k),document.body.classList.remove("no-scroll")}function b(t){t.key==="Escape"&&c()}function L(t){t.currentTarget===t.target&&c()}function k(t){t.target.tagName==="A"&&c()}e.headerBurger.addEventListener("click",C);function x(t){const{_id:r,strArtist:a,strArtistThumb:i,genres:s=[],strBiographyEN:o}=t,n='<ul class="artists-genres-list">'+s.map(d=>`<li class="artists-genre-item">${d}</li>`).join(" ")+"</ul>",l=o?o.slice(0,60)+"...":"No description available.";return`
    <li class="artists-card">
      <img src="${i}" alt="${a}" class="artist-photo" />
      ${n}
      <h4 class="artists-name epilogue">${a}</h4>
      <p class="artists-description">${l}</p>
      <button class="learn-more-btn" data-id="${r}" type="button">
        <span class="learn-more-text">Learn More</span>
        <svg class="learn-more-icon" viewBox="0 0 31 32" width="24" height="24">
          <use href="/img/icons.svg#icon-right-caret-learn-more"></use>
        </svg>
      </button>
    </li>
  `}function T(t){const r=t.map(x).join("");e.artistsListElm.insertAdjacentHTML("beforeend",r)}function H(){e.loadMoreBtnElm.classList.remove("visually-hidden")}function y(){e.loadMoreBtnElm.classList.add("visually-hidden")}function N(){e.artistLoaderElm.classList.remove("visually-hidden")}function P(){e.artistLoaderElm.classList.add("visually-hidden")}function F(){e.artistModalLoaderElm.classList.remove("visually-hidden")}function j(){e.artistModalLoaderElm.classList.add("visually-hidden")}p.defaults.baseURL="https://sound-wave.b.goit.study/api";async function I(t=1,r=8){const a="/artists",i={limit:r,page:t};return(await p.get(a,{params:i})).data}async function O(t){const r=`/artists/${t}/albums`,a={id:t};return(await p.get(r,{params:a})).data}function D(t){const r=Y(t);e.artistInfoElm.innerHTML=r}function Y(t){const{strArtist:r,strArtistThumb:a,intFormedYear:i,intDiedYear:s,strGender:o,intMembers:n,strCountry:l,strBiographyEN:d,albumsList:$=[],genres:w=[]}=t,A=`
    <ul class="artists-genres-list">
      ${w.map(u=>`<li class="artists-genre-item">${u}</li>`).join(" ")}
    </ul>`,q=$.map(u=>R(u)).join(" ");let f=i;return f+=s?`-${s}`:"-present",`
    <h5 class="epilogue artist-name">${r}</h5>
    <div class="artist-info">
      <img class="artist-photo" src="${a}" alt="${r} photo" />
      <div class="artist-about">
      <div class="artist-about-part">
        <div class="artist-category-info artist-about-part-left">
          <p class="artist-category-name">Years active</p>
          <p class="artist-category-text">${f}</p>
        </div>
        <div class="artist-category-info">
          <p class="artist-category-name">Sex</p>
          <p class="artist-category-text">${o}</p>
        </div>
      </div>
      <div class="artist-about-part ">
        <div class="artist-category-info artist-about-part-left">
          <p class="artist-category-name">Members</p>
          <p class="artist-category-text">${n}</p>
        </div>
        <div class="artist-category-info">
          <p class="artist-category-name">Country</p>
          <p class="artist-category-text">${l}</p>
        </div>
       </div>
        <div class="biography-box">
        <p class="artist-category-name">Biography</p>
        <p class="artist-category-text-biography">${d}</p>
        </div>
        ${A}
      </div>
    </div>
    <p class="albums-header">Albums</p>
    <ul class="albums-list">${q}</ul>
  `}function R(t){const{strAlbum:r,tracks:a=[]}=t,i=a.map(s=>_(s)).join("");return`<li>
    <p class="album-name">${r}</p>
    <ul class="tracks-title">
      <li>Track</li>
      <li>Time</li>
      <li>Link</li>
    </ul>
    <ul class="tracks-list">
      ${i}
    </ul>
  </li>`}function _({strTrack:t,intDuration:r,movie:a}){const i=G(r);return`
    <li class="track-item">
      <p class="track-title">${t}</p>
      <p class="track-time">${i}</p>
      <a class="track-movie${a?"":" movie-hidden"}" href="${a||""}" target="_blank" rel="noopener noreferrer">
        <svg class="modal-youtube-icon" width="24px" height="24px">
          <use href="/img/icons.svg#icon-youtube"></use>
        </svg>
      </a>
    </li>`}function G(t){const i=Math.floor(t/6e4),s=Math.floor(t%6e4/1e3);return i.toString().padStart(2,"0")+":"+s.toString().padStart(2,"0")}function K(){e.body.style.overflow="hidden"}function U(){e.body.style.overflow=""}function h(t){t.key==="Escape"&&S()}function M(t){t.target,e.artistsModalBackdrop}function E(){S()}function W(t){e.artistsModalBackdrop.classList.add("is-open"),K(),document.addEventListener("keydown",h),e.artistsModalBackdrop.addEventListener("click",M),e.artistsModalCloseBtn.addEventListener("click",E),z(t)}async function z(t){F();try{const r=await O(t);D(r)}catch{e.artistInfoElm.innerHTML=`
      <p class="error-msg">Artist info failed to load. Please try again later.</p>
    `}finally{j()}}function S(){e.artistsModalBackdrop.classList.remove("is-open"),document.removeEventListener("keydown",h),e.artistsModalBackdrop.removeEventListener("click",M),e.artistsModalCloseBtn.removeEventListener("click",E),e.artistInfoElm.innerHTML="",U()}let m=1;const v=8;let g;B();async function B(){try{y(),N();const t=await I(m,v),r=t.artists,a=t.totalArtists;T(r),g=Math.ceil(a/v),m<g?(H(),m++):y()}catch(t){e.artistsListElm.innerHTML=`Помилка завантаження артистів: ${t}`}P()}function J(){B()}e.loadMoreBtnElm.addEventListener("click",J);e.artistsListElm.addEventListener("click",t=>{const r=t.target.closest(".learn-more-btn");if(!r)return;const a=r.dataset.id;if(!a){console.warn('Не знайдено data-id на кнопці "Learn More"');return}W(a)});
//# sourceMappingURL=index.js.map

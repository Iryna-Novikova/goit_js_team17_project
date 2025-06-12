import{a as m}from"./assets/vendor-B2YOV0tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const s={headerBurger:document.querySelector("[data-menu-open]"),modalHeaderCloseBtn:document.querySelector(".close-menu-btn"),modalHeader:document.querySelector("[data-menu]"),logoLinkMenu:document.querySelector(".logo-link"),mobileNavLinks:document.querySelector(".mobile-nav-links"),artistsListElm:document.querySelector("[data-artist-gallery]"),loadMoreBtnElm:document.querySelector("[data-btn-load-more]"),artistLoaderElm:document.querySelector("[data-artist-loader]"),artistInfoElm:document.querySelector("[data-artist-info]"),artistsModalBackdrop:document.querySelector("[data-artists-modal]"),artistsModalCloseBtn:document.querySelector(".artists-modal-close-btn"),artistModalLoaderElm:document.querySelector("[data-artist-detail-loader]"),feedbackSliderPrevBtn:document.querySelector(".swiper-button-prev"),feedbackSliderNextBtn:document.querySelector(".swiper-button-next"),feedbackSliderPagination:document.querySelector(".swiper-pagination"),openFeedbackBtn:document.querySelector(".leave-feedback-btn"),feedbackLoaderElm:document.querySelector("[data-feedback-loader]"),feedbackSliderWrapperElm:document.querySelector("[data-feedbackLists]"),feedbackFormBackdrop:document.querySelector("[data-feedback-form]"),feedbackFormEL:document.querySelector(".form-main"),feedbackFormCloseBtn:document.querySelector(".form-main-btn"),feedbackFormRatingContainer:document.querySelector(".form-str"),feedbackFormSubmitBtn:document.querySelector(".form-end-button"),body:document.body};function $(t){const{_id:e,strArtist:a,strArtistThumb:i,genres:r=[],strBiographyEN:o}=t,n='<ul class="artists-genres-list">'+r.map(l=>`<li class="artists-genre-item">${l}</li>`).join(" ")+"</ul>",c=o?o.slice(0,60)+"...":"No description available.";return`
    <li class="artists-card">
      <img src="${i}" alt="${a}" class="artist-photo" />
      ${n}
      <h4 class="artists-name epilogue">${a}</h4>
      <p class="artists-description">${c}</p>
      <button class="learn-more-btn" data-id="${e}" type="button">
        <span class="learn-more-text">Learn More</span>
        <svg class="learn-more-icon" viewBox="0 0 31 32" width="24" height="24">
          <use href="/img/icons.svg#icon-right-caret-learn-more"></use>
        </svg>
      </button>
    </li>
  `}function q(t){const e=t.map($).join("");s.artistsListElm.insertAdjacentHTML("beforeend",e)}function A(){s.loadMoreBtnElm.classList.remove("visually-hidden")}function f(){s.loadMoreBtnElm.classList.add("visually-hidden")}function w(){s.artistLoaderElm.classList.remove("visually-hidden")}function x(){s.artistLoaderElm.classList.add("visually-hidden")}function C(){s.artistModalLoaderElm.classList.remove("visually-hidden")}function T(){s.artistModalLoaderElm.classList.add("visually-hidden")}m.defaults.baseURL="https://sound-wave.b.goit.study/api";async function P(t=1,e=8){const a="/artists",i={limit:e,page:t};return(await m.get(a,{params:i})).data}async function F(t){const e=`/artists/${t}/albums`,a={id:t};return(await m.get(e,{params:a})).data}function H(t){const e=N(t);s.artistInfoElm.innerHTML=e}function N(t){const{strArtist:e,strArtistThumb:a,intFormedYear:i,intDiedYear:r,strGender:o,intMembers:n,strCountry:c,strBiographyEN:l,albumsList:M=[],genres:S=[]}=t,E=`
    <ul class="artists-genres-list">
      ${S.map(d=>`<li class="artists-genre-item">${d}</li>`).join(" ")}
    </ul>`,B=M.map(d=>j(d)).join(" ");let p=i;return p+=r?`-${r}`:"-present",`
    <h5 class="epilogue artist-name">${e}</h5>
    <div class="artist-info">
      <img class="artist-photo" src="${a}" alt="${e} photo" />
      <div class="artist-about">
      <div class="artist-about-part">
        <div class="artist-category-info artist-about-part-left">
          <p class="artist-category-name">Years active</p>
          <p class="artist-category-text">${p}</p>
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
          <p class="artist-category-text">${c}</p>
        </div>
       </div>
        <div class="biography-box">
        <p class="artist-category-name">Biography</p>
        <p class="artist-category-text-biography">${l}</p>
        </div>
        ${E}
      </div>
    </div>
    <p class="albums-header">Albums</p>
    <ul class="albums-list">${B}</ul>
  `}function j(t){const{strAlbum:e,tracks:a=[]}=t,i=a.map(r=>I(r)).join("");return`<li>
    <p class="album-name">${e}</p>
    <ul class="tracks-title">
      <li>Track</li>
      <li>Time</li>
      <li>Link</li>
    </ul>
    <ul class="tracks-list">
      ${i}
    </ul>
  </li>`}function I({strTrack:t,intDuration:e,movie:a}){const i=O(e);return`
    <li class="track-item">
      <p class="track-title">${t}</p>
      <p class="track-time">${i}</p>
      <a class="track-movie${a?"":" movie-hidden"}" href="${a||""}" target="_blank" rel="noopener noreferrer">
        <svg class="modal-youtube-icon" width="24px" height="24px">
          <use href="/img/icons.svg#icon-youtube"></use>
        </svg>
      </a>
    </li>`}function O(t){const i=Math.floor(t/6e4),r=Math.floor(t%6e4/1e3);return i.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")}function D(){s.body.style.overflow="hidden"}function Y(){s.body.style.overflow=""}function b(t){t.key==="Escape"&&L()}function v(t){t.target,s.artistsModalBackdrop}function h(){L()}function R(t){s.artistsModalBackdrop.classList.add("is-open"),D(),document.addEventListener("keydown",b),s.artistsModalBackdrop.addEventListener("click",v),s.artistsModalCloseBtn.addEventListener("click",h),_(t)}async function _(t){C();try{const e=await F(t);H(e)}catch{s.artistInfoElm.innerHTML=`
      <p class="error-msg">Artist info failed to load. Please try again later.</p>
    `}finally{T()}}function L(){s.artistsModalBackdrop.classList.remove("is-open"),document.removeEventListener("keydown",b),s.artistsModalBackdrop.removeEventListener("click",v),s.artistsModalCloseBtn.removeEventListener("click",h),s.artistInfoElm.innerHTML="",Y()}let u=1;const y=8;let g;k();async function k(){try{f(),w();const t=await P(u,y),e=t.artists,a=t.totalArtists;q(e),g=Math.ceil(a/y),u<g?(A(),u++):f()}catch(t){s.artistsListElm.innerHTML=`Помилка завантаження артистів: ${t}`}x()}function G(){k()}s.loadMoreBtnElm.addEventListener("click",G);s.artistsListElm.addEventListener("click",t=>{const e=t.target.closest(".learn-more-btn");if(!e)return;const a=e.dataset.id;if(!a){console.warn('Не знайдено data-id на кнопці "Learn More"');return}R(a)});
//# sourceMappingURL=index.js.map

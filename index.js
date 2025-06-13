import{a as d,S as P}from"./assets/vendor-kRNmL_n_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const r={headerBurger:document.querySelector("[data-menu-open]"),modalHeaderCloseBtn:document.querySelector(".close-menu-btn"),modalHeader:document.querySelector("[data-menu]"),logoLinkMenu:document.querySelector(".logo-link"),mobileNavLinks:document.querySelector(".mobile-nav-links"),artistsListElm:document.querySelector("[data-artist-gallery]"),loadMoreBtnElm:document.querySelector("[data-btn-load-more]"),artistLoaderElm:document.querySelector("[data-artist-loader]"),artistInfoElm:document.querySelector("[data-artist-info]"),artistsModalBackdrop:document.querySelector("[data-artists-modal]"),artistsModalCloseBtn:document.querySelector(".artists-modal-close-btn"),artistModalLoaderElm:document.querySelector("[data-artist-detail-loader]"),feedbackSliderPrevBtn:document.querySelector(".swiper-button-prev"),feedbackSliderNextBtn:document.querySelector(".swiper-button-next"),feedbackSliderPagination:document.querySelector(".swiper-pagination"),openFeedbackBtn:document.querySelector(".leave-feedback-btn"),feedbackLoaderElm:document.querySelector("[data-feedback-loader]"),feedbackSliderWrapperElm:document.querySelector("[data-feedbackLists]"),feedbackFormBackdrop:document.querySelector("[data-feedback-form]"),feedbackFormEL:document.querySelector(".form-main"),feedbackFormCloseBtn:document.querySelector(".form-main-btn"),feedbackFormRatingContainer:document.querySelector(".form-str"),feedbackFormSubmitBtn:document.querySelector(".form-end-button"),body:document.body};function N(){r.modalHeader.classList.add("is-shown-menu-header"),document.addEventListener("keydown",E),r.modalHeader.addEventListener("click",M),r.modalHeaderCloseBtn.addEventListener("click",l),r.mobileNavLinks.addEventListener("click",B),document.body.classList.add("no-scroll")}function l(){r.modalHeader.classList.remove("is-shown-menu-header"),document.removeEventListener("keydown",E),r.modalHeader.removeEventListener("click",M),r.modalHeaderCloseBtn.removeEventListener("click",l),r.mobileNavLinks.removeEventListener("click",B),document.body.classList.remove("no-scroll")}function E(e){e.key==="Escape"&&l()}function M(e){e.currentTarget===e.target&&l()}function B(e){e.target.tagName==="A"&&l()}r.headerBurger.addEventListener("click",N);function I(e){const{_id:t,strArtist:s,strArtistThumb:i,genres:a=[],strBiographyEN:n}=e,c='<ul class="artists-genres-list">'+a.map(m=>`<li class="artists-genre-item">${m}</li>`).join(" ")+"</ul>",u=n?n.slice(0,60)+"...":"No description available.";return`
    <li class="artists-card">
      <img src="${i}" alt="${s}" class="artist-photo" />
      ${c}
      <h4 class="artists-name epilogue">${s}</h4>
      <p class="artists-description">${u}</p>
      <button class="learn-more-btn" data-id="${t}" type="button">
        <span class="learn-more-text">Learn More</span>
        <svg class="learn-more-icon" viewBox="0 0 31 32" width="24" height="24">
          <use href="/img/icons.svg#icon-right-caret-learn-more"></use>
        </svg>
      </button>
    </li>
  `}function F(e){const t=e.map(I).join("");r.artistsListElm.insertAdjacentHTML("beforeend",t)}function O(){r.loadMoreBtnElm.classList.remove("visually-hidden")}function y(){r.loadMoreBtnElm.classList.add("visually-hidden")}function D(){r.artistLoaderElm.classList.remove("visually-hidden")}function j(){r.artistLoaderElm.classList.add("visually-hidden")}function Y(){r.artistModalLoaderElm.classList.remove("visually-hidden")}function R(){r.artistModalLoaderElm.classList.add("visually-hidden")}d.defaults.baseURL="https://sound-wave.b.goit.study/api";async function _(e=1,t=8){const s="/artists",i={limit:t,page:e};return(await d.get(s,{params:i})).data}async function G(e){const t=`/artists/${e}/albums`,s={id:e};return(await d.get(t,{params:s})).data}function K(e){const t=U(e);r.artistInfoElm.innerHTML=t}function U(e){const{strArtist:t,strArtistThumb:s,intFormedYear:i,intDiedYear:a,strGender:n,intMembers:c,strCountry:u,strBiographyEN:m,albumsList:q=[],genres:x=[]}=e,H=`
    <ul class="artists-genres-list">
      ${x.map(p=>`<li class="artists-genre-item">${p}</li>`).join(" ")}
    </ul>`,T=q.map(p=>V(p)).join(" ");let v=i;return v+=a?`-${a}`:"-present",`
    <h5 class="epilogue artist-name">${t}</h5>
    <div class="artist-info">
      <img class="artist-photo" src="${s}" alt="${t} photo" />
      <div class="artist-about">
      <div class="artist-about-part">
        <div class="artist-category-info artist-about-part-left">
          <p class="artist-category-name">Years active</p>
          <p class="artist-category-text">${v}</p>
        </div>
        <div class="artist-category-info">
          <p class="artist-category-name">Sex</p>
          <p class="artist-category-text">${n}</p>
        </div>
      </div>
      <div class="artist-about-part ">
        <div class="artist-category-info artist-about-part-left">
          <p class="artist-category-name">Members</p>
          <p class="artist-category-text">${c}</p>
        </div>
        <div class="artist-category-info">
          <p class="artist-category-name">Country</p>
          <p class="artist-category-text">${u}</p>
        </div>
       </div>
        <div class="biography-box">
        <p class="artist-category-name">Biography</p>
        <p class="artist-category-text-biography">${m}</p>
        </div>
        ${H}
      </div>
    </div>
    <p class="albums-header">Albums</p>
    <ul class="albums-list">${T}</ul>
  `}function V(e){const{strAlbum:t,tracks:s=[]}=e,i=s.map(a=>W(a)).join("");return`<li>
    <p class="album-name">${t}</p>
    <ul class="tracks-title">
      <li>Track</li>
      <li>Time</li>
      <li>Link</li>
    </ul>
    <ul class="tracks-list">
      ${i}
    </ul>
  </li>`}function W({strTrack:e,intDuration:t,movie:s}){const i=z(t);return`
    <li class="track-item">
      <p class="track-title">${e}</p>
      <p class="track-time">${i}</p>
      <a class="track-movie${s?"":" movie-hidden"}" href="${s||""}" target="_blank" rel="noopener noreferrer">
        <svg class="modal-youtube-icon" width="24px" height="24px">
          <use href="/img/icons.svg#icon-youtube"></use>
        </svg>
      </a>
    </li>`}function z(e){const i=Math.floor(e/6e4),a=Math.floor(e%6e4/1e3);return i.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")}function J(){r.body.style.overflow="hidden"}function Q(){r.body.style.overflow=""}function S(e){e.key==="Escape"&&A()}function w(e){e.target,r.artistsModalBackdrop}function $(){A()}function X(e){r.artistsModalBackdrop.classList.add("is-open"),J(),document.addEventListener("keydown",S),r.artistsModalBackdrop.addEventListener("click",w),r.artistsModalCloseBtn.addEventListener("click",$),Z(e)}async function Z(e){Y();try{const t=await G(e);K(t)}catch{r.artistInfoElm.innerHTML=`
      <p class="error-msg">Artist info failed to load. Please try again later.</p>
    `}finally{R()}}function A(){r.artistsModalBackdrop.classList.remove("is-open"),document.removeEventListener("keydown",S),r.artistsModalBackdrop.removeEventListener("click",w),r.artistsModalCloseBtn.removeEventListener("click",$),r.artistInfoElm.innerHTML="",Q()}let f=1;const b=8;let L;C();async function C(){try{y(),D();const e=await _(f,b),t=e.artists,s=e.totalArtists;F(t),L=Math.ceil(s/b),f<L?(O(),f++):y()}catch(e){r.artistsListElm.innerHTML=`Помилка завантаження артистів: ${e}`}j()}function ee(){C()}r.loadMoreBtnElm.addEventListener("click",ee);r.artistsListElm.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");if(!t)return;const s=t.dataset.id;if(!s){console.warn('Не знайдено data-id на кнопці "Learn More"');return}X(s)});const h=document.getElementById("feedback-wrapper"),k=document.getElementById("pagination");let o;async function te(){try{let t=(await d.get("https://sound-wave.b.goit.study/api/feedbacks",{params:{limit:3,page:1}})).data.data;for(t&&t.length>3&&(t=t.slice(0,3)),!t||t.length;t.length<3;)t.push({name:`Користувач ${t.length+1}`,descr:"Наразі немає додаткових відгуків для відображення.",rating:3});se(t),ae(),ne()}catch(e){console.error("Помилка при завантаженні відгуків",e),showErrorMessage()}}function se(e){h.innerHTML="",e.forEach(t=>{const s=Math.round(t.rating),i=document.createElement("div");i.className="swiper-slide",i.innerHTML=`
            <div class="rating">
                ${re(s)}
            </div>
            <div class="text">"${t.descr}"</div>
            <div class="user">${t.name}</div>
        `,h.appendChild(i)})}function re(e){let t="";for(let s=1;s<=5;s++)s<=e?t+='<i class="fas fa-star star"></i>':t+='<i class="fas fa-star star-empty"></i>';return t}function ae(){o&&o.destroy(!0,!0),o=new P(".swiper-container",{loop:!1,slidesPerView:1,spaceBetween:0,grabCursor:!0,centeredSlides:!0,autoHeight:!0,speed:1e3,observer:!0,observeParents:!0,watchOverflow:!0,slidesOffsetBefore:0,slidesOffsetAfter:0,on:{slideChange:g,init:g}}),ie(3),g()}function ie(e){k.innerHTML="";for(let t=0;t<e;t++){const s=document.createElement("span");s.id=`pag-${t}`,s.addEventListener("click",()=>{o&&o.slideToLoop(t)}),k.appendChild(s)}}function ne(){document.getElementById("prevBtn").addEventListener("click",()=>{o&&o.slidePrev()}),document.getElementById("nextBtn").addEventListener("click",()=>{o&&o.slideNext()})}function g(){if(!o||o.slides.length===0)return;const e=o.realIndex,t=o.slides.length;document.querySelectorAll(".pagination span").forEach((s,i)=>{s.classList.toggle("active",i===e)}),e===0?prevBtn.classList.add("disabled"):prevBtn.classList.remove("disabled"),e===t-1?nextBtn.classList.add("disabled"):nextBtn.classList.remove("disabled")}document.addEventListener("DOMContentLoaded",te);
//# sourceMappingURL=index.js.map

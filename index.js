import{a as d,i as N,S as F}from"./assets/vendor-BtjH1Lxz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const a={headerBurger:document.querySelector("[data-menu-open]"),modalHeaderCloseBtn:document.querySelector(".close-menu-btn"),modalHeader:document.querySelector("[data-menu]"),mobileNavLinks:document.querySelector(".mobile-nav-links"),artistsListElm:document.querySelector("[data-artist-gallery]"),loadMoreBtnElm:document.querySelector("[data-btn-load-more]"),artistLoaderElm:document.querySelector("[data-artist-loader]"),artistInfoElm:document.querySelector("[data-artist-info]"),artistsModalBackdrop:document.querySelector("[data-artists-modal]"),artistsModalCloseBtn:document.querySelector(".artists-modal-close-btn"),artistModalLoaderElm:document.querySelector("[data-artist-detail-loader]"),feedbackSliderPrevBtn:document.querySelector(".swiper-button-prev"),feedbackSliderNextBtn:document.querySelector(".swiper-button-next"),feedbackSliderPagination:document.querySelector(".swiper-pagination"),openFeedbackBtn:document.querySelector(".leave-feedback-btn"),feedbackLoaderElm:document.querySelector("[data-feedback-loader]"),feedbackSliderWrapperElm:document.querySelector("[data-feedbackLists]"),feedbackFormBackdrop:document.querySelector("[data-feedback-form]"),feedbackFormEL:document.querySelector(".form-main"),feedbackFormCloseBtn:document.querySelector(".form-main-btn"),feedbackFormRatingContainer:document.querySelector(".form-str"),feedbackFormSubmitBtn:document.querySelector(".form-end-button"),body:document.body};function I(){a.modalHeader.classList.add("is-shown-menu-header"),document.addEventListener("keydown",E),a.modalHeader.addEventListener("click",M),a.modalHeaderCloseBtn.addEventListener("click",l),a.mobileNavLinks.addEventListener("click",B),document.body.classList.add("no-scroll")}function l(){a.modalHeader.classList.remove("is-shown-menu-header"),document.removeEventListener("keydown",E),a.modalHeader.removeEventListener("click",M),a.modalHeaderCloseBtn.removeEventListener("click",l),a.mobileNavLinks.removeEventListener("click",B),document.body.classList.remove("no-scroll")}function E(e){e.key==="Escape"&&l()}function M(e){e.currentTarget===e.target&&l()}function B(e){e.target.tagName==="A"&&l()}a.headerBurger.addEventListener("click",I);function O(e){const{_id:t,strArtist:s,strArtistThumb:i,genres:r=[],strBiographyEN:o}=e,c='<ul class="artists-genres-list">'+r.map(m=>`<li class="artists-genre-item">${m}</li>`).join(" ")+"</ul>",u=o?o.slice(0,60)+"...":"No description available.";return`
    <li class="artists-card">
      <img src="${i}" alt="${s}" class="artist-photo" />
      ${c}
      <h4 class="artists-name epilogue">${s}</h4>
      <p class="artists-description">${u}</p>
      <button class="learn-more-btn" data-id="${t}" type="button">
        <span class="learn-more-text">Learn More</span>
        <svg class="learn-more-icon" viewBox="0 0 31 32" width="24" height="25">
          <use href="/img/icons.svg#icon-right-caret-learn-more"></use>
        </svg>
      </button>
    </li>
  `}function D(e){const t=e.map(O).join("");a.artistsListElm.insertAdjacentHTML("beforeend",t)}function j(){a.loadMoreBtnElm.classList.remove("visually-hidden")}function y(){a.loadMoreBtnElm.classList.add("visually-hidden")}function R(){a.feedbackLoaderElm.classList.remove("visually-hidden")}function Y(){a.feedbackLoaderElm.classList.add("visually-hidden")}function _(){a.artistLoaderElm.classList.remove("visually-hidden")}function z(){a.artistLoaderElm.classList.add("visually-hidden")}function G(){a.artistModalLoaderElm.classList.remove("visually-hidden")}function K(){a.artistModalLoaderElm.classList.add("visually-hidden")}d.defaults.baseURL="https://sound-wave.b.goit.study/api";async function U(e=1,t=8){const s="/artists",i={limit:t,page:e};return(await d.get(s,{params:i})).data}async function V(e){const t=`/artists/${e}/albums`,s={id:e};return(await d.get(t,{params:s})).data}function W(e){const t=J(e);a.artistInfoElm.innerHTML=t}function J(e){const{strArtist:t,strArtistThumb:s,intFormedYear:i,intDiedYear:r,strGender:o,intMembers:c,strCountry:u,strBiographyEN:m,albumsList:x=[],genres:T=[]}=e,H=`
    <ul class="artist-genres-list">
      ${T.map(p=>`<li class="artist-genre-item">${p}</li>`).join(" ")}
    </ul>`,P=x.map(p=>Q(p)).join(" ");let v=i;return v+=r?`-${r}`:"-present",`
    <h5 class="epilogue artist-name">${t}</h5>
    <div class="artist-info">
      <img class="artist-photo-modal" src="${s}" alt="${t} photo" />
      <div class="artist-about">
      <div class="artist-about-part">
        <div class="artist-category-info artist-about-part-left">
          <p class="artist-category-name">Years active</p>
          <p class="artist-category-text">${v}</p>
        </div>
        <div class="artist-category-info">
          <p class="artist-category-name">Sex</p>
          <p class="artist-category-text">${o}</p>
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
    <ul class="albums-list">${P}</ul>
  `}function Q(e){const{strAlbum:t,tracks:s=[]}=e,i=s.map(r=>X(r)).join("");return`<li>
    <p class="album-name">${t}</p>
    <ul class="tracks-title">
      <li>Track</li>
      <li>Time</li>
      <li>Link</li>
    </ul>
    <ul class="tracks-list">
      ${i}
    </ul>
  </li>`}function X({strTrack:e,intDuration:t,movie:s}){const i=Z(t);return`
    <li class="track-item">
      <p class="track-title">${e}</p>
      <p class="track-time">${i}</p>
      <a class="track-movie${s?"":" movie-hidden"}" href="${s||""}" target="_blank" rel="noopener noreferrer">
        <svg class="modal-youtube-icon" width="24px" height="24px">
          <use href="/img/icons.svg#icon-youtube"></use>
        </svg>
      </a>
    </li>`}function Z(e){const i=Math.floor(e/6e4),r=Math.floor(e%6e4/1e3);return i.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")}function ee(){a.body.style.overflow="hidden"}function te(){a.body.style.overflow=""}function w(e){e.key==="Escape"&&C()}function S(e){e.target,a.artistsModalBackdrop}function $(){C()}function se(e){a.artistsModalBackdrop.classList.add("is-open"),ee(),document.addEventListener("keydown",w),a.artistsModalBackdrop.addEventListener("click",S),a.artistsModalCloseBtn.addEventListener("click",$),ae(e)}async function ae(e){G();try{const t=await V(e);W(t)}catch{a.artistInfoElm.innerHTML=`
      <p class="error-msg">Artist info failed to load. Please try again later.</p>
    `}finally{K()}}function C(){a.artistsModalBackdrop.classList.remove("is-open"),document.removeEventListener("keydown",w),a.artistsModalBackdrop.removeEventListener("click",S),a.artistsModalCloseBtn.removeEventListener("click",$),a.artistInfoElm.innerHTML="",te()}function A(e,t="topRight"){N.show({title:"",message:e,backgroundColor:"rgb(118, 65, 145)",messageColor:"rgb(255, 255, 255)",position:t})}let f=1;const b=8;let h;q();async function q(){try{y(),_();const e=await U(f,b),t=e.artists,s=e.totalArtists;D(t),h=Math.ceil(s/b),f<h?(j(),f++):y()}catch(e){a.artistsListElm.innerHTML=`Помилка завантаження артистів: ${e}`}z()}function re(){q()}a.loadMoreBtnElm.addEventListener("click",re);a.artistsListElm.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");if(!t)return;const s=t.dataset.id;if(!s){A('Не знайдено data-id на кнопці "Learn More"');return}se(s)});const L=document.getElementById("feedback-wrapper"),k=document.getElementById("pagination");let n;async function ie(){R();try{let t=(await d.get("https://sound-wave.b.goit.study/api/feedbacks",{params:{limit:3,page:1}})).data.data;for(t&&t.length>3&&(t=t.slice(0,3)),!t||t.length;t.length<3;)t.push({name:`Користувач ${t.length+1}`,descr:"Наразі немає додаткових відгуків для відображення.",rating:3});oe(t),ce(),de()}catch(e){A(`Помилка при завантаженні відгуків ${e}`,"bottomCenter"),showErrorMessage()}Y()}function oe(e){L.innerHTML="",e.forEach(t=>{const s=Math.round(t.rating),i=document.createElement("div");i.className="swiper-slide",i.innerHTML=`
            <div class="rating">
                ${ne(s)}
            </div>
            <div class="text">"${t.descr}"</div>
            <div class="user">${t.name}</div>
        `,L.appendChild(i)})}function ne(e){let t="";for(let s=1;s<=5;s++)s<=e?t+='<i class="fas fa-star star"></i>':t+='<i class="fas fa-star star-empty"></i>';return t}function ce(){n&&n.destroy(!0,!0),n=new F(".swiper-container",{loop:!1,slidesPerView:1,spaceBetween:0,grabCursor:!0,centeredSlides:!0,autoHeight:!0,speed:1e3,observer:!0,observeParents:!0,watchOverflow:!0,slidesOffsetBefore:0,slidesOffsetAfter:0,on:{slideChange:g,init:g}}),le(3),g()}function le(e){k.innerHTML="";for(let t=0;t<e;t++){const s=document.createElement("span");s.id=`pag-${t}`,s.addEventListener("click",()=>{n&&n.slideToLoop(t)}),k.appendChild(s)}}function de(){document.getElementById("prevBtn").addEventListener("click",()=>{n&&n.slidePrev()}),document.getElementById("nextBtn").addEventListener("click",()=>{n&&n.slideNext()})}function g(){if(!n||n.slides.length===0)return;const e=n.realIndex,t=n.slides.length;document.querySelectorAll(".pagination span").forEach((s,i)=>{s.classList.toggle("active",i===e)}),e===0?prevBtn.classList.add("disabled"):prevBtn.classList.remove("disabled"),e===t-1?nextBtn.classList.add("disabled"):nextBtn.classList.remove("disabled")}document.addEventListener("DOMContentLoaded",ie);
//# sourceMappingURL=index.js.map

import{a as d,i as F,S as I}from"./assets/vendor-Cg6shDk6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const a={headerBurger:document.querySelector("[data-menu-open]"),modalHeaderCloseBtn:document.querySelector(".close-menu-btn"),modalHeader:document.querySelector("[data-menu]"),mobileNavLinks:document.querySelector(".mobile-nav-links"),artistsListElm:document.querySelector("[data-artist-gallery]"),loadMoreBtnElm:document.querySelector("[data-btn-load-more]"),artistLoaderElm:document.querySelector("[data-artist-loader]"),artistInfoElm:document.querySelector("[data-artist-info]"),artistsModalBackdrop:document.querySelector("[data-artists-modal]"),artistsModalCloseBtn:document.querySelector(".artists-modal-close-btn"),artistModalLoaderElm:document.querySelector("[data-artist-detail-loader]"),feedbackSliderPrevBtn:document.querySelector(".swiper-button-prev"),feedbackSliderNextBtn:document.querySelector(".swiper-button-next"),feedbackSliderPagination:document.querySelector(".swiper-pagination"),openFeedbackBtn:document.querySelector(".leave-feedback-btn"),feedbackLoaderElm:document.querySelector("[data-feedback-loader]"),feedbackSliderWrapperElm:document.querySelector("[data-feedbackLists]"),feedbackFormBackdrop:document.querySelector("[data-feedback-form]"),feedbackFormEL:document.querySelector(".form-main"),feedbackFormCloseBtn:document.querySelector(".form-main-btn"),feedbackFormRatingContainer:document.querySelector(".form-str"),feedbackFormSubmitBtn:document.querySelector(".form-end-button"),body:document.body};function O(){a.modalHeader.classList.add("is-shown-menu-header"),document.addEventListener("keydown",M),a.modalHeader.addEventListener("click",B),a.modalHeaderCloseBtn.addEventListener("click",l),a.mobileNavLinks.addEventListener("click",w),document.body.classList.add("no-scroll")}function l(){a.modalHeader.classList.remove("is-shown-menu-header"),document.removeEventListener("keydown",M),a.modalHeader.removeEventListener("click",B),a.modalHeaderCloseBtn.removeEventListener("click",l),a.mobileNavLinks.removeEventListener("click",w),document.body.classList.remove("no-scroll")}function M(e){e.key==="Escape"&&l()}function B(e){e.currentTarget===e.target&&l()}function w(e){e.target.tagName==="A"&&l()}a.headerBurger.addEventListener("click",O);const S="/goit_js_team17_project/assets/icons-Dpxc_yEu.svg";function j(e){const{_id:t,strArtist:s,strArtistThumb:i,genres:r=[],strBiographyEN:o}=e,c='<ul class="artists-genres-list">'+r.map(m=>`<li class="artists-genre-item">${m}</li>`).join(" ")+"</ul>",u=o?o.slice(0,60)+"...":"No description available.";return`
    <li class="artists-card">
      <img src="${i}" alt="${s}" class="artist-photo" />
      ${c}
      <h4 class="artists-name epilogue">${s}</h4>
      <p class="artists-description">${u}</p>
      <button class="learn-more-btn" data-id="${t}" type="button">
        <span class="learn-more-text">Learn More</span>
        <svg class="learn-more-icon" viewBox="0 0 31 32" width="24" height="25">
          <use href="${S}#icon-right-caret-learn-more"></use>
        </svg>
      </button>
    </li>
  `}function D(e){const t=e.map(j).join("");a.artistsListElm.insertAdjacentHTML("beforeend",t)}function _(){a.loadMoreBtnElm.classList.remove("visually-hidden")}function b(){a.loadMoreBtnElm.classList.add("visually-hidden")}function R(){a.feedbackLoaderElm.classList.remove("visually-hidden")}function Y(){a.feedbackLoaderElm.classList.add("visually-hidden")}function z(){a.artistLoaderElm.classList.remove("visually-hidden")}function G(){a.artistLoaderElm.classList.add("visually-hidden")}function K(){a.artistModalLoaderElm.classList.remove("visually-hidden")}function U(){a.artistModalLoaderElm.classList.add("visually-hidden")}d.defaults.baseURL="https://sound-wave.b.goit.study/api";async function V(e=1,t=8){const s="/artists",i={limit:t,page:e};return(await d.get(s,{params:i})).data}async function W(e){const t=`/artists/${e}/albums`,s={id:e};return(await d.get(t,{params:s})).data}function J(e){const t=Q(e);a.artistInfoElm.innerHTML=t}function Q(e){const{strArtist:t,strArtistThumb:s,intFormedYear:i,intDiedYear:r,strGender:o,intMembers:c,strCountry:u,strBiographyEN:m,albumsList:T=[],genres:H=[]}=e,P=`
    <ul class="artist-genres-list">
      ${H.map(p=>`<li class="artist-genre-item">${p}</li>`).join(" ")}
    </ul>`,N=T.map(p=>X(p)).join(" ");let y=i;return y+=r?`-${r}`:"-present",`
    <h5 class="epilogue artist-name">${t}</h5>
    <div class="artist-info">
      <img class="artist-photo-modal" src="${s}" alt="${t} photo" />
      <div class="artist-about">
      <div class="artist-about-part">
        <div class="artist-category-info artist-about-part-left">
          <p class="artist-category-name">Years active</p>
          <p class="artist-category-text">${y}</p>
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
        ${P}
      </div>
    </div>
    <p class="albums-header">Albums</p>
    <ul class="albums-list">${N}</ul>
  `}function X(e){const{strAlbum:t,tracks:s=[]}=e,i=s.map(r=>Z(r)).join("");return`<li>
    <p class="album-name">${t}</p>
    <ul class="tracks-title">
      <li>Track</li>
      <li>Time</li>
      <li>Link</li>
    </ul>
    <ul class="tracks-list">
      ${i}
    </ul>
  </li>`}function Z({strTrack:e,intDuration:t,movie:s}){const i=ee(t);return`
    <li class="track-item">
      <p class="track-title">${e}</p>
      <p class="track-time">${i}</p>
      <a class="track-movie${s?"":" movie-hidden"}" href="${s||""}" target="_blank" rel="noopener noreferrer">
        <svg class="modal-youtube-icon" width="24px" height="24px">
          <use href="${S}#icon-youtube"></use>
        </svg>
      </a>
    </li>`}function ee(e){const i=Math.floor(e/6e4),r=Math.floor(e%6e4/1e3);return i.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")}function te(){a.body.style.overflow="hidden"}function se(){a.body.style.overflow=""}function $(e){e.key==="Escape"&&v()}function C(e){e.target===a.artistsModalBackdrop&&v()}function A(){v()}function ae(e){a.artistsModalBackdrop.classList.add("is-open"),te(),document.addEventListener("keydown",$),a.artistsModalBackdrop.addEventListener("click",C),a.artistsModalCloseBtn.addEventListener("click",A),re(e)}async function re(e){K();try{const t=await W(e);J(t)}catch{a.artistInfoElm.innerHTML=`
      <p class="error-msg">Artist info failed to load. Please try again later.</p>
    `}finally{U()}}function v(){a.artistsModalBackdrop.classList.remove("is-open"),document.removeEventListener("keydown",$),a.artistsModalBackdrop.removeEventListener("click",C),a.artistsModalCloseBtn.removeEventListener("click",A),a.artistInfoElm.innerHTML="",se()}function q(e,t="topRight"){F.show({title:"",message:e,backgroundColor:"rgb(118, 65, 145)",messageColor:"rgb(255, 255, 255)",position:t})}let f=1;const h=8;let L;x();async function x(){try{b(),z();const e=await V(f,h),t=e.artists,s=e.totalArtists;D(t),L=Math.ceil(s/h),f<L?(_(),f++):b()}catch(e){a.artistsListElm.innerHTML=`Помилка завантаження артистів: ${e}`}G()}function ie(){x()}a.loadMoreBtnElm.addEventListener("click",ie);a.artistsListElm.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");if(!t)return;const s=t.dataset.id;if(!s){q('Не знайдено data-id на кнопці "Learn More"');return}ae(s)});const k=document.getElementById("feedback-wrapper"),E=document.getElementById("pagination");let n;async function oe(){R();try{let t=(await d.get("https://sound-wave.b.goit.study/api/feedbacks",{params:{limit:3,page:1}})).data.data;for(t&&t.length>3&&(t=t.slice(0,3)),!t||t.length;t.length<3;)t.push({name:`Користувач ${t.length+1}`,descr:"Наразі немає додаткових відгуків для відображення.",rating:3});ne(t),le(),ue()}catch(e){q(`Помилка при завантаженні відгуків ${e}`,"bottomCenter"),showErrorMessage()}Y()}function ne(e){k.innerHTML="",e.forEach(t=>{const s=Math.round(t.rating),i=document.createElement("div");i.className="swiper-slide",i.innerHTML=`
            <div class="rating">
                ${ce(s)}
            </div>
            <div class="text epilogue">"${t.descr}"</div>
            <div class="user">${t.name}</div>
        `,k.appendChild(i)})}function ce(e){let t="";for(let s=1;s<=5;s++)s<=e?t+='<i class="fas fa-star star"></i>':t+='<i class="fas fa-star star-empty"></i>';return t}function le(){n&&n.destroy(!0,!0),n=new I(".swiper-container",{loop:!1,slidesPerView:1,spaceBetween:0,grabCursor:!0,centeredSlides:!0,autoHeight:!0,speed:1e3,observer:!0,observeParents:!0,watchOverflow:!0,slidesOffsetBefore:0,slidesOffsetAfter:0,on:{slideChange:g,init:g}}),de(3),g()}function de(e){E.innerHTML="";for(let t=0;t<e;t++){const s=document.createElement("span");s.id=`pag-${t}`,s.addEventListener("click",()=>{n&&n.slideToLoop(t)}),E.appendChild(s)}}function ue(){document.getElementById("prevBtn").addEventListener("click",()=>{n&&n.slidePrev()}),document.getElementById("nextBtn").addEventListener("click",()=>{n&&n.slideNext()})}function g(){if(!n||n.slides.length===0)return;const e=n.realIndex,t=n.slides.length;document.querySelectorAll(".pagination span").forEach((s,i)=>{s.classList.toggle("active",i===e)}),e===0?prevBtn.classList.add("disabled"):prevBtn.classList.remove("disabled"),e===t-1?nextBtn.classList.add("disabled"):nextBtn.classList.remove("disabled")}document.addEventListener("DOMContentLoaded",oe);
//# sourceMappingURL=index.js.map

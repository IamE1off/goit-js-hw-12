import{a as _,S as R,i as n}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const B="44081515-c4a529d06247cd72f265dbdd7",H="https://pixabay.com/api/",f=15;_.defaults.baseURL=H;const b=async(e,t=1)=>(await _.get("",{params:{key:B,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:f,page:t}})).data,L=e=>e.reduce((t,{tags:o,webformatURL:a,largeImageURL:r,likes:s,views:m,comments:M,downloads:q})=>t+`
			<li class="gallery__item item-gallery">
				<a class="item-gallery__link" href="${r}">
					<img class="item-gallery__img" src="${a}" alt="${o}">
				</a>
				<ul class="item-gallery__data">
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Likes</h2>
						<p class="item-gallery__counter">${s}</p>
					</li>
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Views</h2>
						<p class="item-gallery__counter">${m}</p>
					</li>
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Comments</h2>
						<p class="item-gallery__counter">${M}</p>
					</li>
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Downloads</h2>
						<p class="item-gallery__counter">${q}</p>
					</li>
				</ul>
			</li>
		`,""),c=e=>{e.classList.add("is-hidden")},S=e=>{e.classList.remove("is-hidden")},v=e=>{e.classList.remove("is-hidden")},P=e=>{e.classList.add("is-hidden")},j=e=>{e.classList.add("is-disabled")},h=e=>{e.classList.remove("is-disabled")},p=document.querySelector(".js-gallery"),O=document.querySelector(".js-search-form"),l=document.querySelector(".js-search-form-submit-btn"),i=document.querySelector(".js-loader"),d=document.querySelector(".js-load-more-btn");let g="",u=1,y=0;const w=new R(".item-gallery__link",{captionsData:"alt",captionsDelay:250}),$=async e=>{e.preventDefault(),p.innerHTML="",u=1,P(d);const t=e.currentTarget;if(g=t.elements.searchword.value.trim(),g===""){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.reset();return}try{j(l),S(i);const{hits:o,totalHits:a}=await b(g,u);if(a===0){h(l),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.reset(),c(i);return}if(p.insertAdjacentHTML("beforeend",L(o)),w.refresh(),c(i),h(l),a<15){h(l),n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),t.reset(),c(i);return}y=Math.ceil(a/f),y>1&&v(d)}catch{h(l),c(i),n.error({message:"Search params is not valid!",position:"topRight"}),t.reset();return}t.reset()};O.addEventListener("submit",$);const A=()=>{const o=document.querySelector(".gallery__item").getBoundingClientRect().height*2;window.scrollBy({top:o,left:0,behavior:"smooth"})},E=async e=>{try{P(d),S(i),u+=1;const{hits:t,totalHits:o}=await b(g,u);if(p.insertAdjacentHTML("beforeend",L(t)),w.refresh(),A(),c(i),y=Math.ceil(o/f),u<y)v(d);else{d.removeEventListener("click",E),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch{h(l),c(i),n.error({message:"Search params is not valid!",position:"topRight"}),form.reset();return}};d.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map

(()=>{"use strict";var e=[{id:0,img:"./src/assets/images/oddworld.webp",title:"Oddworld: Stranger's wrath",isOwned:!1,price:9.99,promotionValue:50,isCart:!1},{id:1,img:"./src/assets/images/deponia.webp",title:"chaos on deponia",isOwned:!0,price:9.99,promotionValue:50,isCart:!1},{id:2,img:"./src/assets/images/setllers.webp",title:"The settlers 2: gold edition",isOwned:!1,price:5.99,promotionValue:null,isCart:!0},{id:3,img:"./src/assets/images/neverwinter.webp",title:"neverwinter nights",isOwned:!1,price:9.99,promotionValue:50,isCart:!1},{id:4,img:"./src/assets/images/assasins.webp",title:"assassin’s creed: director’s cut",isOwned:!1,price:9.99,promotionValue:null,isCart:!0}],t=[],n=document.querySelector(".js-games"),i=document.querySelector(".js-dropdown"),r=document.querySelector(".js-price"),a=document.querySelectorAll(".js-count"),s=document.querySelector(".js-clear"),o=document.querySelector(".js-cart-button");!function(){for(var i,r,a,s,o,c,d,l,u,m=0,g=e;m<g.length;m++){var v=g[m];v.isCart&&t.push(v),null==n||n.appendChild((i=v.id,r=v.img,a=v.title,s=v.price,o=v.promotionValue,c=v.isCart,d=v.isOwned,void 0,u=void 0,(u=document.createElement("li")).classList.add("game"),u.innerHTML='\n            <div class="game__image">\n            <img src="'+r+'" alt="'+a+'">\n            </div>\n            <div class="game__info js-info">\n            <div class="game__title">'+a+"</div>\n            "+function(e){return e?'<div class="game__tag game__tag--owned">Owned</div>':""}(d)+"\n            "+function(e){return e?'<div class="game__tag game__tag--cart">In cart</div>':""}(c)+'\n            <button class="game__tag game__tag--price" data-id='+i+">$"+s+"</button>\n            "+((l=o)?'<div class="game__tag game__tag--promotion">-'+l+"%</div>":"")+"\n            </div>",u))}}();var c=function(e){e||(t=[],Array.from(document.querySelectorAll(".game__tag--cart")).forEach((function(e){return e.remove()})),l(0),d([])),i&&Array.from(i.querySelectorAll(".cart-dropdown__item")).forEach((function(e){return i.removeChild(e)}))};null==n||n.addEventListener("click",(function(n){return function(n){var i,r=n.target;if(r.classList.contains("game__tag--price")){var a=document.createElement("div");r.closest(".game__title"),a.textContent="in cart",a.classList.add("game__tag","game__tag--cart"),null===(i=r.closest(".js-info"))||void 0===i||i.prepend(a);var s=e.find((function(e){return e.id===Number(r.getAttribute("data-id"))}));s&&t.push(s),c(!0),u(t)}}(n)}));var d=function(e){var t=e.reduce((function(e,t){return t.price+e}),0);r&&(r.textContent="$"+t)},l=function(e){a.forEach((function(t){return t.textContent=String(e)}))},u=function(e){e.forEach((function(e){return null==i?void 0:i.appendChild(function(e){var t=document.createElement("div");return t.classList.add("cart-dropdown__item"),t.innerHTML='\n    <img class="cart-dropdown__image" src="'+e.img+'" alt="assasin">\n    <div class="cart-dropdown__title">'+e.title+'</div>\n    <div class="cart-dropdown__item-price">$'+e.price+'</div>\n    <span class="cart-dropdown__remove js-remove" data-id='+e.id+">Remove</span>",t}(e))})),d(e),l(e.length)};u(t),null==s||s.addEventListener("click",(function(){return c(!1)})),null==o||o.addEventListener("click",(function(){null==i||i.classList.toggle("cart-dropdown--active")})),null==i||i.addEventListener("click",(function(e){var n,i=e.target,r=Number(i.getAttribute("data-id"));if(i.classList.contains("js-remove")){t=t.filter((function(e){return e.id!==r}));var a=null===(n=document.querySelector('.game__tag[data-id="'+r+'"]'))||void 0===n?void 0:n.parentElement,s=null==a?void 0:a.querySelector(".game__tag--cart");s&&(null==a||a.removeChild(s)),c(!0),u(t)}}))})();
//# sourceMappingURL=main.js.map
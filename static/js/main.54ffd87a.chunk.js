(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__36s4b"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1sLww",Modal:"Modal_Modal__ipfKk"}},14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__sep3T",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3vFyX"}},15:function(e,t,a){e.exports={Button:"Button_Button__78C1N"}},27:function(e,t,a){e.exports={Loader:"Loader_Loader__1rSs7"}},32:function(e,t,a){},33:function(e,t,a){},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1Y2Pk",SearchForm:"Searchbar_SearchForm__1oL23",SearchFormButton:"Searchbar_SearchFormButton__3hwz5",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3Qtql",SearchFormInput:"Searchbar_SearchFormInput__PHh0U"}},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(5),o=a.n(c),s=(a(32),a(33),a(16)),u=a(4),l=a(78),i=a(8),m=(a(34),a(12)),b=a.n(m),j=a(6),h=a.n(j),d=a(1);function f(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(u.a)(a,2),c=n[0],o=n[1];return Object(d.jsx)("header",{className:h.a.Searchbar,children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):i.b.error("Enter what you need to find.")},className:h.a.SearchForm,children:[Object(d.jsx)("button",{type:"submit",className:h.a.SearchFormButton,children:Object(d.jsx)("span",{className:h.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:h.a.SearchFormInput,type:"text",name:"searchQuery",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var O=a(25),g=a.n(O);var _=a(26),p=a.n(_),S=(a(75),a(27)),v=a.n(S),x=function(){return Object(d.jsx)(p.a,{type:"TailSpin",color:"#3f51b5",height:80,width:80,className:v.a.Loader,timeout:3e3})},y=a(13),I=a.n(y),w=document.querySelector("#modal-root");function L(e){var t=e.children,a=e.onClose;Object(r.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&a()};return Object(c.createPortal)(Object(d.jsx)("div",{className:I.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(d.jsx)("div",{className:I.a.Modal,children:t})}),w)}var N=a(14),F=a.n(N);var k=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL,c=Object(r.useState)(!1),o=Object(u.a)(c,2),s=o[0],l=o[1],i=function(){l((function(e){return!e}))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{className:F.a.ImageGalleryItem,onClick:i,children:Object(d.jsx)("img",{className:F.a.ImageGalleryItemImage,src:t,alt:a})}),s&&Object(d.jsx)(L,{onClose:i,children:Object(d.jsx)("img",{src:n,alt:a})})]})},B=a(15),C=a.n(B);var G=function(e){var t=e.onClick;return Object(d.jsx)("button",{type:"button",onClick:function(){return t()},className:C.a.Button,children:Object(d.jsx)("span",{className:C.a.ButtonName,children:"Load more"})})};var E=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),o=Object(u.a)(c,2),m=o[0],j=o[1],h=Object(r.useState)(1),O=Object(u.a)(h,2),_=O[0],p=O[1],S=Object(r.useState)(!1),v=Object(u.a)(S,2),y=v[0],I=v[1],w=Object(r.useState)(null),L=Object(u.a)(w,2),N=L[0],F=L[1];Object(r.useEffect)((function(){if(a){I(!0),function(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r;return g.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(n,"&key=").concat("22640330-7a3d8d7b0f506b04b575708a2","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}({searchQuery:a,currentPage:_}).then((function(e){if(0===e.length)return F(!0),void i.b.error("Please enter a more correct request!");j((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e))}))})).catch((function(e){return F(e)})).finally((function(){I(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}}),[a,_]);var B=m.length>0&&!y;return Object(d.jsxs)("div",{className:b.a.Container,children:[Object(d.jsx)(f,{onSubmit:function(e){n(e),p(1),j([]),F(N)}}),m&&Object(d.jsx)("ul",{className:b.a.ImageGallery,children:m.map((function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.tags;return Object(d.jsx)(k,{webformatURL:t,largeImageURL:a,tags:r},Object(l.a)())}))}),y&&Object(d.jsx)(x,{}),B&&Object(d.jsx)(G,{onClick:function(){p((function(e){return e+1}))}}),Object(d.jsx)(i.a,{autoClose:3e3})]})};function U(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(E,{})})}o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.54ffd87a.chunk.js.map
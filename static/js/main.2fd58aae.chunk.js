(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__36s4b"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1sLww",Modal:"Modal_Modal__ipfKk"}},13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__sep3T",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3vFyX"}},14:function(e,t,a){e.exports={Button:"Button_Button__78C1N"}},26:function(e,t,a){e.exports={Loader:"Loader_Loader__1rSs7"}},31:function(e,t,a){},32:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1Y2Pk",SearchForm:"Searchbar_SearchForm__1oL23",SearchFormButton:"Searchbar_SearchFormButton__3hwz5",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3Qtql",SearchFormInput:"Searchbar_SearchFormInput__PHh0U"}},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),o=a.n(c),s=(a(31),a(32),a(15)),u=a(4),l=a(76),i=a(11),m=a.n(i),b=a(5),j=a.n(b),h=a(0);function d(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(u.a)(a,2),c=r[0],o=r[1];return Object(h.jsx)("header",{className:j.a.Searchbar,children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()&&(t(c),o(""))},className:j.a.SearchForm,children:[Object(h.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(h.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(h.jsx)("input",{className:j.a.SearchFormInput,type:"text",name:"searchQuery",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var f=a(24),O=a.n(f);var g=a(25),_=a.n(g),p=(a(73),a(26)),S=a.n(p),v=function(){return Object(h.jsx)(_.a,{type:"TailSpin",color:"#3f51b5",height:80,width:80,className:S.a.Loader,timeout:3e3})},x=a(12),y=a.n(x),I=document.querySelector("#modal-root");function L(e){var t=e.children,a=e.onClose;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&a()};return Object(c.createPortal)(Object(h.jsx)("div",{className:y.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(h.jsx)("div",{className:y.a.Modal,children:t})}),I)}var w=a(13),N=a.n(w);var F=function(e){var t=e.webformatURL,a=e.tags,r=e.largeImageURL,c=Object(n.useState)(!1),o=Object(u.a)(c,2),s=o[0],l=o[1],i=function(){l((function(e){return!e}))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:N.a.ImageGalleryItem,onClick:i,children:Object(h.jsx)("img",{className:N.a.ImageGalleryItemImage,src:t,alt:a})}),s&&Object(h.jsx)(L,{onClose:i,children:Object(h.jsx)("img",{src:r,alt:a})})]})},k=a(14),B=a.n(k);var G=function(e){var t=e.onClick;return Object(h.jsx)("button",{type:"button",onClick:function(){return t()},className:B.a.Button,children:Object(h.jsx)("span",{className:B.a.ButtonName,children:"Load more"})})};var C=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(u.a)(c,2),i=o[0],b=o[1],j=Object(n.useState)(1),f=Object(u.a)(j,2),g=f[0],_=f[1],p=Object(n.useState)(!1),S=Object(u.a)(p,2),x=S[0],y=S[1],I=Object(n.useState)(null),L=Object(u.a)(I,2),w=L[0],N=L[1];Object(n.useEffect)((function(){if(a){y(!0),function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n;return O.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(r,"&key=").concat("22640330-7a3d8d7b0f506b04b575708a2","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}({searchQuery:a,currentPage:g}).then((function(e){0!==e.length?b((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e))})):N(!0)})).catch((function(e){return N(e)})).finally((function(){y(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}}),[a,g]);var k=i.length>0&&!x;return Object(h.jsxs)("div",{className:m.a.Container,children:[Object(h.jsx)(d,{onSubmit:function(e){r(e),_(1),b([]),N(w)}}),i&&Object(h.jsx)("ul",{className:m.a.ImageGallery,children:i.map((function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags;return Object(h.jsx)(F,{webformatURL:t,largeImageURL:a,tags:n},Object(l.a)())}))}),x&&Object(h.jsx)(v,{}),k&&Object(h.jsx)(G,{onClick:function(){_((function(e){return e+1}))}})]})};function E(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(C,{})})}o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.2fd58aae.chunk.js.map
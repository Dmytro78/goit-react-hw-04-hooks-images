(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__uR_Lb",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1k45_"}},14:function(e,t,a){e.exports={Button:"Button_Button__78C1N"}},16:function(e,t,a){e.exports={Spinner:"Loader_Spinner__asdN4"}},21:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1Y2Pk",SearchForm:"Searchbar_SearchForm__1oL23",SearchFormButton:"Searchbar_SearchFormButton__3hwz5",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3Qtql",SearchFormInput:"Searchbar_SearchFormInput__PHh0U"}},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),o=a.n(r),s=(a(21),a(10)),i=a(3),u=a(4),l=a.n(u),m=a(1);function b(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],o=c[1];return Object(m.jsx)("header",{className:l.a.Searchbar,children:Object(m.jsxs)("form",{className:l.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==r.trim()?t(r):alert("enter your request")},children:[Object(m.jsx)("button",{type:"submit",className:l.a.SearchFormButton,children:Object(m.jsx)("span",{className:l.a.SearchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{className:l.a.SearchFormInput,type:"text",autoComplete:"off",name:"searchQuery",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){switch(e.target.name){case"searchQuery":o(e.target.value);break;default:return}},value:r})]})})}var j=a(11),h=a(13),f=a.n(h);function d(e){var t=e.id,a=e.webformatURL,n=e.onItemClick;return Object(m.jsx)("img",{src:a,alt:"",className:f.a.ImageGalleryItemImage,onClick:function(){return function(e){n(e)}(t)}})}var O=a(8),p=a.n(O);function _(e){var t=e.images,a=e.onItemClick,n=e.onClick;return Object(m.jsx)("ul",{className:p.a.ImageGallery,onClick:function(e){e.target!==e.currentTarget&&n()},children:t&&t.map((function(e){return Object(m.jsx)("li",{className:p.a.ImageGalleryItem,children:Object(m.jsx)(d,Object(j.a)(Object(j.a)({},e),{},{onItemClick:a}))},e.id)}))})}var g=a(9),S=a.n(g);function x(e){var t=e.content,a=e.onBackdrop;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var c=function(e){"Escape"===e.code&&a()};return Object(m.jsx)("div",{className:S.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(m.jsx)("div",{className:S.a.Modal,children:Object(m.jsx)("img",{src:t,alt:""})})})}var I=a(14),v=a.n(I),y=function(e){var t=e.onPress;return Object(m.jsx)("button",{type:"button",onClick:t,className:v.a.Button,children:"Load more"})},k=a(15),F=a.n(k),w=a(16),B=a.n(w),N=function(){return Object(m.jsx)("div",{className:B.a.Spinner,children:Object(m.jsx)(F.a,{type:"Bars",color:"#00BFFF",height:80,width:80})})},C=function(e,t){var a="".concat("https://pixabay.com/api/?","q=").concat(e,"&page=").concat(t,"&key=").concat("22640330-7a3d8d7b0f506b04b575708a2","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(e){return e.json()}))};a(43);function L(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),u=o[0],l=o[1],j=Object(n.useState)(1),h=Object(i.a)(j,2),f=h[0],d=h[1],O=Object(n.useState)([]),p=Object(i.a)(O,2),g=p[0],S=p[1],I=Object(n.useState)(!1),v=Object(i.a)(I,2),k=v[0],F=(v[1],Object(n.useState)(!1)),w=Object(i.a)(F,2),B=w[0],L=w[1];Object(n.useEffect)((function(){E()}),[u,f]),Object(n.useEffect)((function(){M()}));var G=function(){L(!B)},E=function(){""===u&&1===f||C(u,f).then((function(e){var t=e.hits;return S([].concat(Object(s.a)(g),Object(s.a)(t)))})).then(M).catch((function(e){return alert(e.message)}))},M=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},P=g.length/f===12,q=g.length>0&&!k&&P;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(b,{onSubmit:function(e){l(e),d(1),S([])}}),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(_,{images:g,onClick:G,onItemClick:function(e){var t=g.find((function(t){return t.id===e}));c(t.largeImageURL)}}),B&&Object(m.jsx)(x,{content:a,onBackdrop:G}),k&&Object(m.jsx)(N,{}),q&&Object(m.jsx)(y,{name:"Load more",onPress:function(){d((function(e){return e+1}))}})]})]})}o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__36s4b"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1sLww",Modal:"Modal_Modal__ipfKk"}}},[[44,1,2]]]);
//# sourceMappingURL=main.dfe3c7c3.chunk.js.map
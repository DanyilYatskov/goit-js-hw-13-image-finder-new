(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1QKO":function(e,n,t){},"2tg5":function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,l){var r,s=null!=n?n:e.nullContext||{},o=e.hooks.helperMissing,i="function",c=e.escapeExpression,m=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="gallery-item">\r\n\r\n\r\n    <img src="'+c(typeof(r=null!=(r=m(t,"webformatURL")||(null!=n?m(n,"webformatURL"):n))?r:o)===i?r.call(s,{name:"webformatURL",hash:{},data:l,loc:{start:{line:5,column:14},end:{line:5,column:30}}}):r)+'" alt="image" class="gallery-image" data-source="'+c(typeof(r=null!=(r=m(t,"largeImageURL")||(null!=n?m(n,"largeImageURL"):n))?r:o)===i?r.call(s,{name:"largeImageURL",hash:{},data:l,loc:{start:{line:5,column:79},end:{line:5,column:96}}}):r)+'" />\r\n    <div class="stats">\r\n        <p class="stats-item">\r\n            <i class="material-icons">thumb_up</i>\r\n            '+c(typeof(r=null!=(r=m(t,"likes")||(null!=n?m(n,"likes"):n))?r:o)===i?r.call(s,{name:"likes",hash:{},data:l,loc:{start:{line:9,column:12},end:{line:9,column:21}}}):r)+'\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">visibility</i>\r\n            '+c(typeof(r=null!=(r=m(t,"views")||(null!=n?m(n,"views"):n))?r:o)===i?r.call(s,{name:"views",hash:{},data:l,loc:{start:{line:13,column:12},end:{line:13,column:21}}}):r)+'\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">comment</i>\r\n            '+c(typeof(r=null!=(r=m(t,"comments")||(null!=n?m(n,"comments"):n))?r:o)===i?r.call(s,{name:"comments",hash:{},data:l,loc:{start:{line:17,column:12},end:{line:17,column:24}}}):r)+'\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">cloud_download</i>\r\n            '+c(typeof(r=null!=(r=m(t,"downloads")||(null!=n?m(n,"downloads"):n))?r:o)===i?r.call(s,{name:"downloads",hash:{},data:l,loc:{start:{line:21,column:12},end:{line:21,column:25}}}):r)+"\r\n        </p>\r\n    </div>\r\n\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var r;return null!=(r=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:26,column:9}}}))?r:""},useData:!0})},QfWi:function(e,n,t){"use strict";t.r(n);t("vJJZ");var a={searchFormRef:document.querySelector("#search-form"),galleryRef:document.querySelector(".gallery"),moreImagesBtnRef:document.querySelector(".more-images")},l=(t("JBxO"),t("FdtR"),t("QJ3N"));t("bzha"),t("zrP5"),t("voa7"),t("/191");var r={searchTag:"",page:1,itemsOnPage:12,fetchImages:function(){var e=this,n="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+this.searchTag+"&page="+this.page+"&per_page="+this.itemsOnPage+"&key=20320156-7ced8cd7704588c90dd479ccb";return fetch(n).then((function(e){if(e.ok)return e.json()})).then((function(n){if(0!=n.hits.length)return n.total>12&&a.moreImagesBtnRef.classList.remove("is-hidden"),e.page+=1,n.hits;(0,l.alert)({title:"No matches found",text:"There is No images with such tag please try again"})}))},resetPageToFirst:function(){this.page=1},get tag(){return this.searchTag},set tag(e){this.searchTag=e}},s=t("2tg5"),o=t.n(s);var i=t("dcBu");t("1QKO");function c(){r.fetchImages().then((function(e){var n,t,l;n=e,t=a.galleryRef,l=o()(n),t.insertAdjacentHTML("beforeend",l),window.scrollTo({top:document.documentElement.offsetHeight,behavior:"smooth"})}))}a.searchFormRef.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements.query.value;r.tag=n,a.galleryRef.innerHTML="",a.moreImagesBtnRef.classList.add("is-hidden"),r.resetPageToFirst(),c()})),a.moreImagesBtnRef.addEventListener("click",(function(){c()})),a.galleryRef.addEventListener("click",(function(e){"IMG"===e.target.nodeName&&i.create('\n        <img src="'+e.target.dataset.source+'" alt="" />\n      ').show()}))},vJJZ:function(e,n,t){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.a06bc99561fbc2083acf.js.map
!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var c={headers:{Authorization:"0bd27c01866f453fb86ca5c40830dd1c"}},u=function(){"use strict";function r(){e(t)(this,r),this.searchQuery="",this.page=1}return e(n)(r,[{key:"fetchArticles",value:function(){var e=this,t="".concat("https://newsapi.org/v2","/everything?q=").concat(this.searchQuery,"&language=en&pageSize=5&page=").concat(this.page);return fetch(t,c).then((function(e){return e.json()})).then((function(t){var n=t.articles;return e.incrementPage(),n}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),r}(),a=document.querySelector(".form-js"),o=document.querySelector(".btn-load"),i=document.querySelector(".article-container"),s=new u;console.log(s),a.addEventListener("submit",(function(e){if(e.preventDefault(),function(){i.innerHTML=""}(),s.query=e.currentTarget.elements.query.value,""===s.query)return alert("Введите запрос!");s.resetPage(),s.fetchArticles().then((function(e){return console.log(e)}))})),o.addEventListener("click",(function(){s.fetchArticles().then((function(e){return console.log(e)}))}))}();
//# sourceMappingURL=pagination.301773b7.js.map
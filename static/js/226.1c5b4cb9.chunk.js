"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[226],{854:function(n,t,e){e.d(t,{a:function(){return a}});var r=e(8881),i=e(184),a=function(){return(0,i.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}},9555:function(n,t,e){e.d(t,{O:function(){return v}});var r,i,a,o,c,s=e(168),u=e(5867),l=u.ZP.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  grid-gap: 16px;\n  margin-top: 20px;\n  margin-bottom: 30px;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),d=e(1087),p=u.ZP.li(i||(i=(0,s.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),x=u.ZP.img(a||(a=(0,s.Z)(["\n  width: 100%;\n  height: 360px;\n  margin-bottom: 15px;\n  object-fit: contain;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n  transform: scale(1.03);\n  "]))),f=(0,u.ZP)(d.OL)(o||(o=(0,s.Z)(["\n  &:hover {\n    color: orangered;\n  }\n"]))),m=u.ZP.h3(c||(c=(0,s.Z)(["\n  text-align: center;\n"]))),h=e(7689),g=e(184),b=function(n){var t=n.movies,e=(0,h.TH)();return console.log(e),t.map((function(n){var t="/"===e.pathname?"movies/".concat(n.id):"".concat(n.id);return(0,g.jsx)(p,{children:(0,g.jsxs)(f,{to:t,state:{from:e},children:[(0,g.jsx)(x,{src:n.poster_path?"http://image.tmdb.org/t/p/w500".concat(n.poster_path):"https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg",alt:n.title}),(0,g.jsxs)(m,{children:[(0,g.jsx)("span",{children:n.release_date?n.release_date.slice(0,4):"\ud83d\ude31"}),",",n.title]})]})},n.id)}))},v=function(n){var t=n.movies;return(0,g.jsx)(l,{children:(0,g.jsx)(b,{movies:t})})}},2378:function(n,t,e){e.d(t,{FE:function(){return s},IQ:function(){return o},Jh:function(){return c},Pg:function(){return a},XT:function(){return i}});var r=e(1243);r.Z.defaults.baseURL="https://api.themoviedb.org/3",r.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWZmYTlmNjVjYWUyNWIxZjU5N2IyNDhmZmZiZWQzMiIsInN1YiI6IjY1NGI2NjNhMWFjMjkyN2IyZGNmNzBiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wt2WcEuurlXNU4SFGIcSzLE3fb4Vg87kUc19yKbL2iA";var i=function(n){return r.Z.get("/trending/movie/".concat(n))},a=function(n){return r.Z.get("/movie/".concat(n))},o=function(n){return r.Z.get("/movie/".concat(n,"/credits"))},c=function(n){return r.Z.get("/movie/".concat(n,"/reviews"))},s=function(n,t){return r.Z.get("/search/movie?query=".concat(n,"&page=").concat(t))}},8226:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,i=e(5861),a=e(9439),o=e(4687),c=e.n(o),s=e(2791),u=e(2378),l=e(9555),d=e(168),p=e(5867).ZP.button(r||(r=(0,d.Z)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n\n  &:disabled {\n    background-color: orangered;\n  }\n"]))),x=e(184),f=function(n){var t=n.onButtonClick,e=n.children,r=n.timeWindow;n.disabled;return(0,x.jsx)(p,{className:"Button",type:"button",onClick:t,"data-time":r,children:e})},m=function(n){var t=n.firstBtnText,e=n.secondBtnText,r=n.day,i=n.week,a=n.onChangeTrend;n.disabled;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{children:[(0,x.jsx)(f,{onButtonClick:a,children:t,timeWindow:r}),(0,x.jsx)(f,{onButtonClick:a,children:e,timeWindow:i})]})})},h=e(854),g=e(38),b=function(){var n=(0,s.useState)(null),t=(0,a.Z)(n,2),e=t[0],r=t[1],o=(0,s.useState)("day"),d=(0,a.Z)(o,2),p=d[0],f=d[1],b=(0,s.useState)(!1),v=(0,a.Z)(b,2),Z=v[0],j=v[1],w=(0,s.useState)(!1),y=(0,a.Z)(w,2),k=y[0],I=y[1],N=(0,s.useState)(null),W=(0,a.Z)(N,2),B=W[0],C=W[1];(0,s.useEffect)((function(){var n=function(){var n=(0,i.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,I(!0),r(null),C(null),n.next=6,(0,u.XT)(p);case 6:t=n.sent,r(t.data.results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),C(n.t0);case 13:return n.prev=13,I(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[p]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h1",{children:"Find the movie you wanted and enjoy it"}),(0,x.jsx)(m,{onChangeTrend:function(n){console.log(n.target),"day"===n.target.dataset.time?(j((function(n){return!n})),n.target.disabled=!Z,n.target.nextElementSibling.disabled=Z):(j((function(n){return!n})),n.target.disabled=Z,n.target.previousElementSibling.disabled=!Z),f(n.target.dataset.time)},firstBtnText:"Day",secondBtnText:"Week",day:"day",week:"week"}),B&&g.Am.error("".concat(B.message)),k&&(0,x.jsx)(h.a,{}),e&&(0,x.jsx)(l.O,{movies:e})]})}}}]);
//# sourceMappingURL=226.1c5b4cb9.chunk.js.map
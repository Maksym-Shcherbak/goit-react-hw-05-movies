"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[718],{854:function(n,e,t){t.d(e,{a:function(){return o}});var r=t(8881),i=t(184),o=function(){return(0,i.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}},2378:function(n,e,t){t.d(e,{FE:function(){return s},IQ:function(){return a},Jh:function(){return c},Pg:function(){return o},XT:function(){return i}});var r=t(1243);r.Z.defaults.baseURL="https://api.themoviedb.org/3",r.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWZmYTlmNjVjYWUyNWIxZjU5N2IyNDhmZmZiZWQzMiIsInN1YiI6IjY1NGI2NjNhMWFjMjkyN2IyZGNmNzBiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wt2WcEuurlXNU4SFGIcSzLE3fb4Vg87kUc19yKbL2iA";var i=function(n){return r.Z.get("/trending/movie/".concat(n))},o=function(n){return r.Z.get("/movie/".concat(n))},a=function(n){return r.Z.get("/movie/".concat(n,"/credits"))},c=function(n){return r.Z.get("/movie/".concat(n,"/reviews"))},s=function(n,e){return r.Z.get("/search/movie?query=".concat(n,"&page=").concat(e))}},2718:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,i,o,a,c,s,l,u=t(5861),d=t(9439),h=t(4687),p=t.n(h),f=t(2791),m=t(7689),x=t(168),j=t(8617),g=t(1087),v=t(5867),Z=t(184),b=(0,v.ZP)(g.rU)(r||(r=(0,x.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),w=function(n){var e=n.to,t=n.children;return(0,Z.jsxs)(b,{to:e,children:[(0,Z.jsx)(j.jTe,{size:"24"}),t]})},N=t(2378),I=v.ZP.h2(i||(i=(0,x.Z)(["\n  font-size: 30px;\n  font-weight: 600;\n  margin-bottom: 20px;\n"]))),k=v.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n"]))),y=v.ZP.div(a||(a=(0,x.Z)(["\n  width: 350px;\n  height: 450px;\n"]))),P=v.ZP.img(c||(c=(0,x.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"]))),U=v.ZP.h3(s||(s=(0,x.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 15px;\n"]))),W=v.ZP.div(l||(l=(0,x.Z)(["\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n\n  &:not(:last-child) {\n    border-bottom: 2px solid black;\n  }\n"]))),_=t(8977),z=function(n){var e,t,r,i=n.movie,o=Number(i.vote_average/10*100).toFixed(0);return i.release_date&&(t=i.release_date.split("-").join(","),e=(0,_.Z)(new Date(t),"PPP")),i.production_countries.length>0&&(r=i.production_countries[0].name),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(I,{children:i.title}),(0,Z.jsx)(W,{children:(0,Z.jsxs)(k,{children:[(0,Z.jsx)(y,{children:(0,Z.jsx)(P,{src:i.poster_path?"http://image.tmdb.org/t/p/w500".concat(i.poster_path):"https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg",alt:i.title})}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("p",{children:["User score: ",o,"%"]}),i.tagline&&(0,Z.jsxs)("p",{children:["Tagline: ",i.tagline]}),(0,Z.jsxs)("p",{children:["Genres:"," ",i.genres.length>0?i.genres.map((function(n,e){return e!==i.genres.length-1?"".concat(n.name,", "):"".concat(n.name)})):"No information"]}),(0,Z.jsxs)("p",{children:["Release date: ",e||"No information"]}),(0,Z.jsxs)("p",{children:["Country: ",r||"No information"]}),(0,Z.jsxs)("p",{children:["Duration: ",i.runtime," min"]})]})]})}),(0,Z.jsxs)(W,{children:[(0,Z.jsxs)(U,{children:["What the movie ",i.title," is about:"]}),(0,Z.jsx)("p",{children:i.overview})]}),(0,Z.jsxs)(W,{children:[(0,Z.jsx)(U,{children:"Additional information"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(g.rU,{to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(g.rU,{to:"reviews",children:"Reviews"})})]}),(0,Z.jsx)(m.j3,{})]})]})},J=t(854),C=t(38),S=function(){var n,e,t=(0,f.useState)(null),r=(0,d.Z)(t,2),i=r[0],o=r[1],a=(0,f.useState)(null),c=(0,d.Z)(a,2),s=c[0],l=c[1],h=(0,f.useState)(!1),x=(0,d.Z)(h,2),j=x[0],g=x[1],v=(0,m.UO)().movieId,b=null!==(n=null===(e=(0,m.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,f.useEffect)((function(){if(v){var n=function(){var n=(0,u.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),n.next=4,(0,N.Pg)(v);case 4:e=n.sent,o(e.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),l(n.t0);case 11:return n.prev=11,g(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n(v)}}),[v]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(w,{to:b,children:"Back to movies"}),s&&C.Am.error("".concat(s.message)),j&&(0,Z.jsx)(J.a,{}),i&&(0,Z.jsx)(z,{movie:i})]})}}}]);
//# sourceMappingURL=718.6de6d5d0.chunk.js.map
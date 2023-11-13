"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[718],{854:function(n,e,t){t.d(e,{a:function(){return o}});var r=t(8881),i=t(184),o=function(){return(0,i.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}},2378:function(n,e,t){t.d(e,{FE:function(){return s},IQ:function(){return a},Jh:function(){return c},Pg:function(){return o},XT:function(){return i}});var r=t(1243);r.Z.defaults.baseURL="https://api.themoviedb.org/3",r.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWZmYTlmNjVjYWUyNWIxZjU5N2IyNDhmZmZiZWQzMiIsInN1YiI6IjY1NGI2NjNhMWFjMjkyN2IyZGNmNzBiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wt2WcEuurlXNU4SFGIcSzLE3fb4Vg87kUc19yKbL2iA";var i=function(n){return r.Z.get("/trending/movie/".concat(n))},o=function(n){return r.Z.get("/movie/".concat(n))},a=function(n){return r.Z.get("/movie/".concat(n,"/credits"))},c=function(n){return r.Z.get("/movie/".concat(n,"/reviews"))},s=function(n,e){return r.Z.get("/search/movie?query=".concat(n,"&page=").concat(e))}},2718:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,i,o,a,c,s,l,d,u,h=t(5861),p=t(9439),x=t(4687),f=t.n(x),m=t(2791),g=t(7689),j=t(168),v=t(8617),Z=t(1087),b=t(5867),w=t(184),N=(0,b.ZP)(Z.rU)(r||(r=(0,j.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),k=function(n){var e=n.to,t=n.children;return(0,w.jsxs)(N,{to:e,children:[(0,w.jsx)(v.jTe,{size:"24"}),t]})},I=t(2378),y=b.ZP.h2(i||(i=(0,j.Z)(["\n  font-size: 30px;\n  font-weight: 600;\n  margin-bottom: 20px;\n"]))),P=b.ZP.div(o||(o=(0,j.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n"]))),W=b.ZP.div(a||(a=(0,j.Z)(["\n  width: 350px;\n  height: 450px;\n"]))),_=b.ZP.img(c||(c=(0,j.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"]))),z=b.ZP.h3(s||(s=(0,j.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 15px;\n"]))),J=b.ZP.div(l||(l=(0,j.Z)(["\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n\n  &:not(:last-child) {\n    border-bottom: 2px solid black;\n  }\n"]))),U=(0,b.ZP)(Z.OL)(d||(d=(0,j.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  border: 1px solid orangered;\n\n  &.active {\n    color: white;\n    background: linear-gradient(\n      to right bottom,\n      hsl(154, 97%, 62%),\n      hsl(225, 97%, 62%)\n    );\n    border: none;\n  }\n"]))),C=b.ZP.ul(u||(u=(0,j.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  margin-bottom: 20px;\n"]))),S=t(8977),F=function(n){var e,t,r,i=n.movie,o=Number(i.vote_average/10*100).toFixed(0);return i.release_date&&(t=i.release_date.split("-").join(","),e=(0,S.Z)(new Date(t),"PPP")),i.production_countries.length>0&&(r=i.production_countries[0].name),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(y,{children:i.title}),(0,w.jsx)(J,{children:(0,w.jsxs)(P,{children:[(0,w.jsx)(W,{children:(0,w.jsx)(_,{src:i.poster_path?"http://image.tmdb.org/t/p/w500".concat(i.poster_path):"https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg",alt:i.title})}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("p",{children:["User score: ",o,"%"]}),i.tagline&&(0,w.jsxs)("p",{children:["Tagline: ",i.tagline]}),(0,w.jsxs)("p",{children:["Genres:"," ",i.genres.length>0?i.genres.map((function(n,e){return e!==i.genres.length-1?"".concat(n.name,", "):"".concat(n.name)})):"No information"]}),(0,w.jsxs)("p",{children:["Release date: ",e||"No information"]}),(0,w.jsxs)("p",{children:["Country: ",r||"No information"]}),(0,w.jsxs)("p",{children:["Duration: ",i.runtime," min"]})]})]})}),(0,w.jsxs)(J,{children:[(0,w.jsxs)(z,{children:["What the movie ",i.title," is about:"]}),(0,w.jsx)("p",{children:i.overview})]}),(0,w.jsxs)(J,{children:[(0,w.jsx)(z,{children:"Additional information"}),(0,w.jsxs)(C,{children:[(0,w.jsx)("li",{children:(0,w.jsx)(U,{to:"cast",children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(U,{to:"reviews",children:"Reviews"})})]}),(0,w.jsx)(g.j3,{})]})]})},G=t(854),L=t(38),B=function(){var n,e,t=(0,m.useState)(null),r=(0,p.Z)(t,2),i=r[0],o=r[1],a=(0,m.useState)(null),c=(0,p.Z)(a,2),s=c[0],l=c[1],d=(0,m.useState)(!1),u=(0,p.Z)(d,2),x=u[0],j=u[1],v=(0,g.UO)().movieId,Z=null!==(n=null===(e=(0,g.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,m.useEffect)((function(){if(v){var n=function(){var n=(0,h.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,j(!0),n.next=4,(0,I.Pg)(v);case 4:e=n.sent,o(e.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),l(n.t0);case 11:return n.prev=11,j(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n(v)}}),[v]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(k,{to:Z,children:"Back to movies"}),s&&L.Am.error("".concat(s.message)),x&&(0,w.jsx)(G.a,{}),i&&(0,w.jsx)(F,{movie:i})]})}}}]);
//# sourceMappingURL=718.d2ffbaed.chunk.js.map
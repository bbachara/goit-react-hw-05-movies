"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[385],{385:function(e,t,n){n.r(t);var s=n(439),i=n(791),r=n(689),c=n(87),o=n(184);t.default=function(){var e=(0,r.UO)().movieId,t=(0,i.useState)(null),n=(0,s.Z)(t,2),a=n[0],l=n[1],d=(0,i.useState)(!1),h=(0,s.Z)(d,2),x=h[0],j=h[1],u=(0,r.s0)();return(0,i.useEffect)((function(){j(!0),fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=35349a736eae14c1caed3005a307c333")).then((function(e){return e.json()})).then((function(e){l(e),j(!1)})).catch((function(e){console.error("Error fetching movie details:",e),j(!1)}))}),[e]),x?(0,o.jsx)("div",{children:"Loading..."}):a?(0,o.jsxs)("div",{style:{display:"flex",alignItems:"flex-start"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{onClick:function(){u(-1)},style:{marginBottom:"10px"},children:"Go Back"}),(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a.poster_path),alt:a.title,style:{marginRight:"20px"}})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:a.title}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Overview:"})," ",a.overview]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Genres:"})," ",a.genres.map((function(e){return e.name})).join(", ")]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Release Date:"})," ",a.release_date]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Rating:"})," ",a.vote_average," / 10"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(c.rU,{to:"cast",children:"Cast"})," | ",(0,o.jsx)(c.rU,{to:"reviews",children:"Reviews"})]}),(0,o.jsx)(r.j3,{})]})]}):(0,o.jsx)("div",{children:"No movie found"})}}}]);
//# sourceMappingURL=385.86a79ee3.chunk.js.map
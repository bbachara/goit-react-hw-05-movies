"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{910:function(e,t,a){a.r(t);var c=a(439),i=a(791),n=a(689),r=a(184);t.default=function(){var e=(0,n.UO)().movieId,t=(0,i.useState)([]),a=(0,c.Z)(t,2),o=a[0],s=a[1],h=(0,i.useState)(!1),l=(0,c.Z)(h,2),p=l[0],d=l[1];return(0,i.useEffect)((function(){d(!0),fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=35349a736eae14c1caed3005a307c333")).then((function(e){return e.json()})).then((function(e){s(e.cast),d(!1)})).catch((function(e){console.error("Error fetching cast:",e),d(!1)}))}),[e]),p?(0,r.jsx)("div",{children:"Loading..."}):(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Cast"}),(0,r.jsx)("ul",{children:o.map((function(e){return(0,r.jsxs)("li",{style:{listStyleType:"none",marginBottom:"10px"},children:[(0,r.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w200".concat(e.profile_path):"https://via.placeholder.com/200x300?text=No+Image",alt:e.name,style:{width:"100px",height:"150px",marginRight:"10px",verticalAlign:"middle"}}),e.name," as ",e.character]},e.cast_id)}))})]})}}}]);
//# sourceMappingURL=910.c1fa6396.chunk.js.map
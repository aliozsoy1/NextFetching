(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{9049:(e,s,l)=>{Promise.resolve().then(l.bind(l,3242))},3242:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>d});var n=l(5155),t=l(2115);l(347);var i=l(2651);function r(e){let{setActiveUserId:s}=e,[l,r]=(0,t.useState)([]),[c,d]=(0,t.useState)(!0);return(0,t.useEffect)(()=>{(0,i.A)("https://jsonplaceholder.typicode.com/users").then(e=>r(e.data)).finally(()=>d(!1))},[]),(0,n.jsxs)("div",{children:[c&&(0,n.jsx)("div",{children:"Y\xfckleniyor..."}),(0,n.jsx)("ul",{children:l.map(e=>(0,n.jsx)("li",{onClick:()=>s(e.id),children:e.name},e.id))})]})}function c(e){let{activeUserId:s}=e,[l,r]=(0,t.useState)(null),[c,d]=(0,t.useState)();return(0,t.useEffect)(()=>{d(!0),(0,i.A)("https://jsonplaceholder.typicode.com/users/".concat(s)).then(e=>r(e.data)).finally(()=>d(!1))},[s]),(0,n.jsxs)("div",{children:[c&&(0,n.jsx)("div",{children:"Y\xfckleniyor..."}),(0,n.jsx)("pre",{children:!c&&JSON.stringify(l,null,2)})]})}function d(){let[e,s]=(0,t.useState)(null);return(0,n.jsxs)("div",{className:"divbody",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Kullanıcılar"}),(0,n.jsx)(r,{setActiveUserId:s})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Kullanıcı Detayı"}),e&&(0,n.jsx)(c,{activeUserId:e})]})]})}},347:()=>{}},e=>{var s=s=>e(e.s=s);e.O(0,[690,651,441,517,358],()=>s(9049)),_N_E=e.O()}]);
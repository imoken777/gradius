(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{1319:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/controller",function(){return o(6289)}])},6289:function(t,e,o){"use strict";o.r(e);var n=o(5893),l=o(7294),r=o(1290),c=o(1985),s=o.n(c);let a=()=>{var t,e;let o=(0,l.useCallback)(t=>{let e=r.x.player.$post({body:t});console.log(e)},[]),[c,a]=(0,l.useState)(),[i,u]=(0,l.useState)(!1),[d,h]=(0,l.useState)(!1),[k,w]=(0,l.useState)(!1),[b,_]=(0,l.useState)(!1),x=()=>{let t=r.x.bullet.$post();console.log(t)},f=(0,l.useCallback)(()=>{i&&o({toX:0,toY:-1}),d&&o({toX:0,toY:1}),k&&o({toX:-1,toY:0}),b&&o({toX:1,toY:0})},[o,i,d,k,b]);return(0,l.useEffect)(()=>{window.addEventListener("keydown",t=>{switch(t.key){case"ArrowUp":u(!0);break;case"ArrowDown":h(!0);break;case"ArrowLeft":w(!0);break;case"ArrowRight":_(!0)}}),window.addEventListener("keyup",t=>{switch(t.key){case"ArrowUp":u(!1);break;case"ArrowDown":h(!1);break;case"ArrowLeft":w(!1);break;case"ArrowRight":_(!1)}}),f()},[i,d,k,b,f]),(0,l.useEffect)(()=>{let t=setInterval(async()=>{let t=await r.x.player.status.$get();null!==t&&a({health:t.health,score:t.score})},100);return()=>clearInterval(t)},[]),(0,n.jsxs)("div",{className:s().container,children:[(0,n.jsxs)("p",{children:["HP: ",null!==(t=null==c?void 0:c.health)&&void 0!==t?t:0," SCORE: ",null!==(e=null==c?void 0:c.score)&&void 0!==e?e:0]}),(0,n.jsxs)("div",{className:s().controller,children:[(0,n.jsx)("button",{onClick:()=>o({toX:-1,toY:-1}),children:"↖"}),(0,n.jsx)("button",{onClick:()=>o({toX:0,toY:-1}),children:"↑"}),(0,n.jsx)("button",{onClick:()=>o({toX:1,toY:-1}),children:"↗"}),(0,n.jsx)("button",{onClick:()=>o({toX:-1,toY:0}),children:"←"}),(0,n.jsx)("button",{onClick:()=>x(),children:"\uD83E\uDD29"}),(0,n.jsx)("button",{onClick:()=>o({toX:1,toY:0}),children:"→"}),(0,n.jsx)("button",{onClick:()=>o({toX:-1,toY:1}),children:"↙"}),(0,n.jsx)("button",{onClick:()=>o({toX:0,toY:1}),children:"↓"}),(0,n.jsx)("button",{onClick:()=>o({toX:1,toY:1}),children:"↘"})]})]})};e.default=a},1985:function(t){t.exports={container:"controller_container__cQDFp",controller:"controller_controller__eEHNq"}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=1319)}),_N_E=t.O()}]);
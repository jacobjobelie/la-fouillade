import f from"./index.5cf93082.js";import{b as x,e as t,o as _,f as g,k as r,$ as n,u as a,r as v,h as y,j as l,w as o,m as i}from"./entry.dd459083.js";const S=["src"],N=x({__name:"index",props:{src:{type:String,default:"/img/sample.jpg"},reverse:{type:Boolean,default:!1},imgSize:{type:Number,default:1},textSize:{type:Number,default:1}},setup(m){const e=m,u=t(()=>e.reverse?"flex-row-reverse <sm:flex-col-reverse":""),c=t(()=>({flex:e.imgSize})),d=t(()=>({flex:e.textSize}));return(p,h)=>{const s=f;return _(),g("div",{class:y(["flex my-4 w-full gap-4 <md:flex-col-reverse",a(u)])},[r("div",{class:"flex items-center rounded-2xl",style:n(a(c))},[r("img",{class:"max-w-full rounded-2xl transition-all hover:rounded-4xl",src:e.src,alt:"images"},null,8,S)],4),r("div",{class:"p-4 <md:p-0 <md:mb-2",style:n(a(d))},[v(p.$slots,"default",{},()=>[l(s,null,{default:o(()=>[i("Hi there!")]),_:1}),l(s,{h3:""},{default:o(()=>[i("Dignissimos asperiores")]),_:1}),l(s,null,{default:o(()=>[i(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis fugit earum voluptas officia, quasi saepe et commodi, dolores cumque quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet repellendus ")]),_:1})])],4)],2)}}});export{N as _};
import{_ as u}from"./button.vue_vue_type_script_setup_true_lang.e940614f.js";import{b as m,v as d,a0 as f,o as x,f as h,j as n,w as r,u as t,i as y,m as i,t as p}from"./entry.764ef635.js";import{q as k}from"./query.92f356e6.js";const v={class:"flex-between pt-8 pb-6 border-t-gray-200"},g=m({__name:"index",async setup(w){let e,s;const l=d(),[o,a]=([e,s]=f(()=>k("/article").only(["_path","title"]).sort({date:-1}).findSurround(l.path)),e=await e,s(),e);return(B,b)=>{const _=u,c=y;return x(),h("div",v,[n(c,{to:t(o)?t(o)._path:"/article"},{default:r(()=>[n(_,{type:"prev"},{default:r(()=>[i(p(t(o)?t(o).title:"Back to Article"),1)]),_:1})]),_:1},8,["to"]),n(c,{to:t(a)?t(a)._path:"/article"},{default:r(()=>[n(_,{type:"next"},{default:r(()=>[i(p(t(a)?t(a).title:"Back to Article"),1)]),_:1})]),_:1},8,["to"])])}}});export{g as _};

import{b as t,o as a,f as n,r as o,h as s}from"./entry.764ef635.js";const p=t({__name:"ColorLink",props:{type:{type:String,default:"primary",validator(r){return["primary","secondary","success","warning","error"].includes(r)}}},setup(r){return(e,l)=>(a(),n("a",{class:s(`inline-block px-0.3rem rounded-1rem transition-all transform hover:text-white hover:-translate-y-2px hover:cursor-pointer active:translate-y-1px ${r.type}`)},[o(e.$slots,"default")],2))}});export{p as _};

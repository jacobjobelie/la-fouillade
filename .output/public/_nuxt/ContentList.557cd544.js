import n from"./ContentQuery.d2503107.js";import{b as c,y,A as u}from"./entry.e6c3838a.js";import"./asyncData.4c17e590.js";import"./query.58da4f08.js";import"./utils.5ff099c0.js";const q=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(p){const t=y(),{path:f,query:o}=p,m={...o||{},path:f||(o==null?void 0:o.path)||"/"},r=(e,a)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:e,data:a},null,2));return u(n,m,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:d})=>t==null?void 0:t.default({list:e,refresh:a,isPartial:d,...this.$attrs}):({data:e})=>r("default",e),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):r("not-found",e==null?void 0:e.data)}})}});export{q as default};

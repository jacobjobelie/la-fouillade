import{u as h,s as d,v as y,x as w,b as v,y as C,z as D,A as s}from"./entry.e6c3838a.js";import{u as _}from"./composables.cefad5b1.js";import x from"./ContentRenderer.da8f46e1.js";import S from"./ContentQuery.d2503107.js";import"./ContentRendererMarkdown.5b9fcc54.js";import"./index.68c44503.js";import"./asyncData.4c17e590.js";import"./query.58da4f08.js";import"./utils.5ff099c0.js";const a=(m,e=y())=>{const f=h(m);d(()=>h(m),(o=f)=>{if(!e.path||!o)return;const t=Object.assign({},(o==null?void 0:o.head)||{}),p=t.title||(o==null?void 0:o.title);p&&(t.title=p),t.meta=[...t.meta||[]];const u=(t==null?void 0:t.description)||(o==null?void 0:o.description);u&&t.meta.filter(n=>n.name==="description").length===0&&t.meta.push({name:"description",content:u});const r=(t==null?void 0:t.image)||(o==null?void 0:o.image);if(r&&t.meta.filter(n=>n.property==="og:image").length===0&&(typeof r=="string"&&t.meta.push({property:"og:image",content:r}),typeof r=="object")){const n=["src","secure_url","type","width","height","alt"];for(const i of n)i==="src"&&r.src?t.meta.push({property:"og:image",content:r[i]}):r[i]&&t.meta.push({property:`og:image:${i}`,content:r[i]})}w(()=>_(t))},{immediate:!0})},T=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(m){const e=C(),{tag:f,excerpt:c,path:o,query:t,head:p}=m,u={...t||{},path:o||(t==null?void 0:t.path)||D(y().path),find:"one"},r=(n,i)=>s("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:n,data:i},null,2));return s(S,u,{default:e!=null&&e.default?({data:n,refresh:i,isPartial:g})=>{var l;return p&&a(n),(l=e.default)==null?void 0:l.call(e,{doc:n,refresh:i,isPartial:g,excerpt:c,...this.$attrs})}:({data:n})=>(p&&a(n),s(x,{value:n,excerpt:c,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):r("default",n)})),empty:n=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,n))||s("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":n=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,n))||s("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{T as default};

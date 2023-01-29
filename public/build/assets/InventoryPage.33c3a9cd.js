import{H as S,a as d,k as m,h as j,D as b,p as A,Q as L,_ as q,b as i,f as _,d as e,t as o,F as w,q as E,g as y,R as O,r as p,o as c,e as F,z as P,W as T,U as k,v as D,x as R}from"./app.4093ea43.js";import{_ as H}from"./CreateModal.3c7e8465.js";import{C as V}from"./ContentBox.6aa44b1c.js";import{_ as N}from"./Table.b2ebaf81.js";import{L as z}from"./MunicipalityLayout.92b79982.js";import{_ as U}from"./Pagination.6d72d61b.js";import"./auto.c60c8fcb.js";import{_ as Q}from"./Dropdown.38f40bcb.js";import{_ as W}from"./InvoiceModal.26281b50.js";import{h as Y}from"./moment.9709ab41.js";import{_ as G}from"./_plugin-vue_export-helper.cdc0426e.js";import"./dialog.cf43474d.js";import"./transition.550b21f7.js";import"./PendingTransactions.b0a53db4.js";import"./eprris.ccf75d97.js";/* empty css                                                                          */const J={layout:z,components:{CreateModal:H,Pagination:U,Head:S,ContentBox:V,Table:N,Dropdown:Q,InvoiceModal:W},props:{criticals:Object,status:Object,equipments:Object,name:Object,filters:[Array,Object]},setup({filters:x,status:a,equipments:n}){d(m().url.value);const r=d(""),B=d({});console.log(n);const I=[{name:"equipment"},{name:"available"},{name:"damages"},{name:"date Recieved"},{name:"action"}],f=d(["serviceable","poor","unserviceable"]),h=d(new Date),g=d(),v=d(),C=()=>{O.get("/api/invoice-data").then(t=>{console.log(t),alert(" done")})},u=j(()=>{const t=Math.floor(a.serviceable/a.total*100),l=Math.floor(a.unserviceable/a.total*100),M=Math.floor(a.poor/a.total*100);return{serviceable:t,unserviceable:l,poor:M}});return b(r,t=>{k.Inertia.get(m().url.value,{search:t},{preserveState:!0})}),b(g,t=>{k.Inertia.get(m().url.value,{status:t},{preserveState:!0})}),b(v,t=>{k.Inertia.get(m().url.value,{category:t},{preserveState:!0})}),b(h,t=>{k.Inertia.get(m().url.value,{date:t},{preserveState:!0})}),A(()=>{const t=document.getElementById("myChart").getContext("2d");new L(t,{type:"doughnut",data:{labels:f,datasets:[{label:"Status",data:[u.value.serviceable,u.value.poor,u.value.unserviceable],borderWidth:1,backgroundColor:["#FFA34E","#BA882F","#7E6B19"],borderColor:["#FFA34E","#BA882F","#7E6B19"]}]},options:{plugins:{tooltip:{enabled:!1},datalabels:{align:"end",formatter:(l,M)=>(console.log(l),`${l}% 
${f.value[M.dataIndex]} `),labels:{title:{font:{size:10}}}}},maintainAspectRatio:!1,legend:{display:!1,title:{display:!1}}},plugins:[q]})}),{tableHead:I,search:r,download:C,date:h,tableBody:B,equipmentStatus:g,category:v,moment:Y}}},s=x=>(D("data-v-f2cca2b1"),x=x(),R(),x),K={class:"flex flex-col mx-10 mt-4 gap-10"},X={class:"flex flex-col justify-end h-fit"},Z=s(()=>e("span",{class:"text-xl font-bold"}," TOTAL EQUIPMENT ",-1)),$={class:"text-5xl",style:{"font-family":"century-gothic, sans-serif"}},ee={class:"flex flex-col w-full"},te={class:"flex flex-col-reverse md:flex-row gap-7 justify-end w-full"},se={class:"flex flex-row justify-between w-full"},oe={class:"flex bg-white flex-col space-y-10 content-box py-6 px-4 rounded-xl shadow-5 shadow-sm w-[200px] lg:w-[250px] h-fit"},ae=s(()=>e("span",{class:"text-slate-600 text-lg font-bold tracking-wider"},"SERVICEABLE",-1)),ne={class:"text-center mt-4 lining-nums text-slate-700 text-3xl font-semibod tracking-wider"},le={class:"flex bg-white flex-col space-y-10 content-box py-6 px-4 rounded-xl shadow-5 w-[200px] lg:w-[250px] h-fit"},ie=s(()=>e("span",{class:"text-slate-600 text-lg font-bold tracking-wider"},"POOR",-1)),ce={class:"text-center mt-4 lining-nums text-slate-700 text-3xl font-semibod tracking-wider"},re={class:"flex bg-white flex-col space-y-10 content-box py-6 px-4 rounded-xl shadow-5 w-[200px] lg:w-[250px] h-fit"},de=s(()=>e("span",{class:"text-slate-600 text-lg font-bold tracking-wider"},"UNSERVICEABLE",-1)),_e={class:"text-center mt-4 lining-nums text-slate-700 text-3xl font-semibod tracking-wider"},pe={class:"flex flex-row space-x-6 h-[250px] md:h-[300px]"},xe=s(()=>e("div",{class:"grid place-content-center content-box px-4 rounded-xl bg-white shadow-5 mt-4"},[e("div",{class:"h-[250px] md:h-[250px] py-2 md:w-[300px]"},[e("canvas",{id:"myChart"})])],-1)),ue={class:"py-2 flex flex-col w-full content-box px-4 rounded-xl bg-white shadow-5 mt-4"},me=s(()=>e("span",{class:"font-bold text-lg mb-6 text-red-500"},"On Critical Condition Equipment",-1)),fe={class:"w-full divide-y divide-gray-200 dark:divide-gray-700"},he={class:"pb-3 sm:pb-4"},ge={key:0,class:"flex items-center space-x-4"},ve={class:"flex-1 min-w-0"},be=s(()=>e("p",{class:"text-sm font-medium text-gray-500 truncate dark:text-white"}," Equipment ",-1)),we={class:"text-sm text-gray-900 truncate font-semibold dark:text-gray-400"},ye={class:"flex flex-col min-w-0 justify-end"},ke=s(()=>e("p",{class:"text-sm font-medium text-gray-500 truncate dark:text-white"}," Remainings ",-1)),Ce={class:"text-sm text-gray-900 truncate font-semibold dark:text-gray-400 text-end"},Me={class:"flex flex-col space-y-5"},Ee=s(()=>e("div",{class:"flex flex-row justify-between"},[e("div",{class:"flex flex-row space-x-3"})],-1)),Be=s(()=>e("hr",null,null,-1)),Ie={class:"flex flex-row justify-between"},Se={class:"relative col-span-2 md:col-span-1"},je={class:"relative w-full max-w-xl mr-6 focus-within:text-purple-500"},Ae=s(()=>e("div",{class:"absolute inset-y-0 flex items-center pl-2"},[e("svg",{class:"w-4 h-4","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1)),Le=s(()=>e("hr",null,null,-1)),qe={class:"relative"},Oe={class:"flex flex-row justify-center py-1"},Fe={class:"max-h-full even:bg-orange-200 bg-white border-b dark:bg-gray-800 dark:border-gray-700"},Pe={scope:"row",class:"text-center p-4"},Te={class:"text-center"},De={class:"text-center"},Re={class:"text-center"},He={class:"text-center"},Ve=s(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"})],-1)),Ne={class:"bg-white"};function ze(x,a,n,r,B,I){const f=p("Head"),h=p("CreateModal"),g=p("inertia-link"),v=p("Table"),C=p("Pagination"),u=p("ContentBox");return c(),i(w,null,[_(f,{title:"Tansaction"}),e("div",K,[e("div",X,[Z,e("span",$,o(n.status.total),1)]),e("div",ee,[e("div",te,[e("div",se,[e("div",oe,[ae,e("span",ne,o(n.status.serviceable),1)]),e("div",le,[ie,e("span",ce,o(n.status.poor),1)]),e("div",re,[de,e("span",_e,o(n.status.unserviceable),1)])])]),e("div",pe,[xe,e("div",ue,[me,e("ul",fe,[(c(!0),i(w,null,E(n.criticals,(t,l)=>(c(),i("li",he,[t?(c(),i("div",ge,[e("div",ve,[be,e("p",we,o(l),1)]),e("div",ye,[ke,e("p",Ce,o(t),1)])])):F("",!0)]))),256))])])])])]),_(u,{class:"h-fit p-2"},{default:y(()=>[e("div",Me,[Ee,Be,e("div",Ie,[e("div",Se,[e("div",je,[Ae,P(e("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>r.search=t),class:"w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input",type:"text",placeholder:"Search for Equipment","aria-label":"Search"},null,512),[[T,r.search]])])]),_(h)]),Le,e("div",qe,[_(v,null,{header:y(()=>[e("tr",null,[(c(!0),i(w,null,E(r.tableHead,(t,l)=>(c(),i("th",{scope:"col",class:"py-3 px-6",key:l},[e("div",Oe,[e("span",null,o(t.name),1)])]))),128))])]),body:y(()=>[(c(!0),i(w,null,E(n.equipments.data,(t,l)=>(c(),i("tr",Fe,[e("td",Pe,o(t.name),1),e("td",Te,o(t.available),1),e("td",De,o(t.damages),1),e("td",Re,o(r.moment(t.recieved_at).format("MMMM DD Y")),1),e("td",He,[_(g,{type:"button",href:"/inventory/"+t.id,class:"font-medium text-orange-600 dark:text-orange-500 hover:underline"},{default:y(()=>[Ve]),_:2},1032,["href"])])]))),256))]),_:1}),e("div",Ne,[_(C,{links:n.equipments.links},null,8,["links"])])])])]),_:1})],64)}const lt=G(J,[["render",ze],["__scopeId","data-v-f2cca2b1"]]);export{lt as default};

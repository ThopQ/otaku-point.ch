import{m as d,b as m,i as l,h as r,g as o,u as a,H as c,e,n as p,p as u,j as f}from"./app.7ca02ec8.js";import{_,a as w}from"./Guest.05a896b0.js";import{_ as b,a as h,b as x}from"./ValidationErrors.6d68ba1c.js";import"./ApplicationLogo.3727e207.js";import"./plugin-vue_export-helper.21dcd24c.js";const V=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),g=["onSubmit"],v={class:"flex justify-end mt-4"},y=f(" Confirm "),F={__name:"ConfirmPassword",setup(C){const s=d({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return($,t)=>(m(),l(_,null,{default:r(()=>[o(a(c),{title:"Confirm Password"}),V,o(b,{class:"mb-4"}),e("form",{onSubmit:u(i,["prevent"])},[e("div",null,[o(h,{for:"password",value:"Password"}),o(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":t[0]||(t[0]=n=>a(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"])]),e("div",v,[o(w,{class:p(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:r(()=>[y]),_:1},8,["class","disabled"])])],40,g)]),_:1}))}};export{F as default};
import{r as d,_ as B,R as S,c as k,a as E,P as o,j as e}from"./index-DgYjAzAV.js";import{b as D,r as H}from"./api-CbhHiXfZ.js";import{a as g}from"./index.esm-FC9B2NJI.js";import{C as I}from"./CRow-CkTnp1v3.js";import{C as G}from"./CCol-CupnGcp2.js";import{C as V,a as _}from"./CCardBody-beKhoL1g.js";import{C as q}from"./CCardHeader-CwEME8B9.js";import{C as p}from"./CFormInput-oMjOEnwC.js";import{a as N}from"./CButton-Ds9Im62X.js";import{C as J,a as K,b as M,c,d as Q,e as v}from"./CTable-C9-mWzho.js";import{C as W}from"./CFormControlWrapper-CjE6UTdE.js";import{C as X,a as Y,b as Z,c as $}from"./CModalHeader-C23ycL_x.js";import{C as ee,a as x}from"./CInputGroupText-DrphRm9j.js";import{C as h}from"./CInputGroup-99dEA3AI.js";import{c as P}from"./DefaultLayout-n4crdqeM.js";import{C as se}from"./CFormSelect-DZqGXCr2.js";import{c as F}from"./cil-lock-locked-DmxpJbVL.js";import"./CConditionalPortal-DsNRDAW1.js";var U=d.forwardRef(function(l,u){var i,m=l.className,n=l.id,C=l.invalid,f=l.label,j=l.reverse,s=l.size,t=l.type,w=t===void 0?"checkbox":t,b=l.valid,y=B(l,["className","id","invalid","label","reverse","size","type","valid"]);return S.createElement("div",{className:k("form-check form-switch",(i={"form-check-reverse":j},i["form-switch-".concat(s)]=s,i["is-invalid"]=C,i["is-valid"]=b,i),m)},S.createElement("input",E({type:w,className:k("form-check-input",{"is-invalid":C,"is-valid":b}),id:n},y,{ref:u})),f&&S.createElement(W,E({customClassName:"form-check-label"},n&&{htmlFor:n}),f))});U.propTypes={className:o.string,id:o.string,invalid:o.bool,label:o.oneOfType([o.string,o.node]),reverse:o.bool,size:o.oneOf(["lg","xl"]),type:o.oneOf(["checkbox","radio"]),valid:o.bool};U.displayName="CFormSwitch";const ge=()=>{const[l,u]=d.useState([]),[i,m]=d.useState([]),[n,C]=d.useState(null),[f,j]=d.useState(!1),[s,t]=d.useState({username:"",email:"",password:"",repeatPassword:"",role:""}),[w,b]=d.useState("");d.useEffect(()=>{(async()=>{try{const a=await D();u(a.data),m(a.data)}catch(a){C(a.message),console.error("Error fetching users:",a)}})()},[]);const y={1:"Admin",2:"Manager",3:"Staff"},L=()=>{j(!0)},R=()=>{j(!1),t({username:"",email:"",password:"",repeatPassword:"",role:""})},z=async r=>{if(r.preventDefault(),s.password!==s.repeatPassword){alert("Passwords do not match");return}try{const a=await H({username:s.username,email:s.email,password:s.password,role:s.role});u([...l,{...s,_id:new Date().getTime().toString()}]),m([...i,{...s,_id:new Date().getTime().toString()}]),alert("User registered successfully"),R(),console.log(a.data)}catch(a){console.error("Registration error:",a),alert("Registration failed")}},A=r=>{const a=r.target.value;b(a);const O=l.filter(T=>T.username.toLowerCase().includes(a.toLowerCase())||T.email.toLowerCase().includes(a.toLowerCase()));m(O)};return e.jsxs(I,{children:[e.jsx(G,{xs:12,children:e.jsxs(V,{className:"mb-4 shadow-lg",children:[e.jsxs(q,{style:{backgroundColor:"#323a49d1",color:"#fff",padding:"15px"},children:[e.jsx("strong",{children:"All Users"}),e.jsx("div",{style:{float:"right",width:"250px"},children:e.jsx(p,{type:"text",placeholder:"Search by username or email",value:w,onChange:A,style:{borderRadius:"20px",padding:"8px"}})})]}),e.jsx(_,{style:{padding:"30px"},children:n?e.jsxs("div",{className:"alert alert-danger",children:["Error: ",n]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-4",children:e.jsx(N,{color:"primary",onClick:L,style:{borderRadius:"20px",fontSize:"16px"},children:"+ Create User"})}),e.jsxs(J,{striped:!0,hover:!0,responsive:!0,style:{borderRadius:"10px"},children:[e.jsx(K,{children:e.jsxs(M,{children:[e.jsx(c,{scope:"col",children:"#"}),e.jsx(c,{scope:"col",children:"Username"}),e.jsx(c,{scope:"col",children:"Email"}),e.jsx(c,{scope:"col",children:"Role"}),e.jsx(c,{scope:"col",children:"Status"})]})}),e.jsx(Q,{children:i.map((r,a)=>e.jsxs(M,{children:[e.jsx(c,{scope:"row",children:a+1}),e.jsx(v,{children:r.username}),e.jsx(v,{children:r.email}),e.jsx(v,{children:y[r.role]}),e.jsx(v,{children:e.jsx(U,{id:"status",name:"status",labelOn:"",labelOff:"",defaultChecked:r.status})})]},r._id))})]})]})})]})}),e.jsxs(X,{visible:f,onClose:R,size:"lg",children:[e.jsx(Y,{style:{backgroundColor:"#323a49",color:"#fff"},children:e.jsx("strong",{children:"Create User"})}),e.jsx(Z,{children:e.jsxs(ee,{onSubmit:z,children:[e.jsxs(h,{className:"mb-3",children:[e.jsx(x,{children:e.jsx(g,{icon:P})}),e.jsx(p,{name:"username",placeholder:"Username",value:s.username,onChange:r=>t({...s,username:r.target.value}),style:{borderRadius:"10px",padding:"10px"}})]}),e.jsxs(h,{className:"mb-3",children:[e.jsx(x,{children:"@"}),e.jsx(p,{name:"email",placeholder:"Email",value:s.email,onChange:r=>t({...s,email:r.target.value}),style:{borderRadius:"10px",padding:"10px"}})]}),e.jsxs(h,{className:"mb-3",children:[e.jsx(x,{children:e.jsx(g,{icon:P})}),e.jsx(se,{name:"role",options:["Select Role",{label:"Admin",value:"1"},{label:"Manager",value:"2"},{label:"Staff",value:"3"}],value:s.role,onChange:r=>t({...s,role:r.target.value}),style:{borderRadius:"10px",padding:"10px"}})]}),e.jsxs(h,{className:"mb-3",children:[e.jsx(x,{children:e.jsx(g,{icon:F})}),e.jsx(p,{type:"password",name:"password",placeholder:"Password",value:s.password,onChange:r=>t({...s,password:r.target.value}),style:{borderRadius:"10px",padding:"10px"}})]}),e.jsxs(h,{className:"mb-4",children:[e.jsx(x,{children:e.jsx(g,{icon:F})}),e.jsx(p,{type:"password",name:"repeatPassword",placeholder:"Repeat Password",value:s.repeatPassword,onChange:r=>t({...s,repeatPassword:r.target.value}),style:{borderRadius:"10px",padding:"10px"}})]}),e.jsx("div",{className:"d-grid mb-3",children:e.jsx(N,{color:"primary",type:"submit",style:{borderRadius:"20px"},children:"Create Account"})})]})}),e.jsx($,{children:e.jsx(N,{color:"secondary",onClick:R,style:{borderRadius:"20px"},children:"Cancel"})})]})]})};export{ge as default};

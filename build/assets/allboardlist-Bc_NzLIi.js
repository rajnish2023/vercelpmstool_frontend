import{r as t,j as e}from"./index-DgYjAzAV.js";import{s as fe,b as Ce,t as ye,v as Ne,w as be,x as ve}from"./api-CbhHiXfZ.js";import{C as ke}from"./CRow-CkTnp1v3.js";import{C as se}from"./CCol-CupnGcp2.js";import{C as Te,a as ae}from"./CCardBody-beKhoL1g.js";import{C as we}from"./CCardHeader-CwEME8B9.js";import{a as n}from"./CButton-Ds9Im62X.js";import{C as Se}from"./CInputGroup-99dEA3AI.js";import{C as m}from"./CFormInput-oMjOEnwC.js";import{C as _e,a as z}from"./CModalTitle-EVfRvZwH.js";import{C as P,a as L,b as H,c as F}from"./CModalHeader-C23ycL_x.js";import{b as R}from"./CConditionalPortal-DsNRDAW1.js";import"./CFormControlWrapper-CjE6UTdE.js";const $e=()=>{var Z,ee;const[p,x]=t.useState([]),[V,re]=t.useState([]),[$,te]=t.useState(""),[S,_]=t.useState("");t.useState(null);const[W,B]=t.useState([]),[Y,d]=t.useState(null),[le,g]=t.useState(!1),[G,ie]=t.useState("create"),[ne,j]=t.useState(!1),[oe,f]=t.useState(!1),[h,C]=t.useState(""),[y,N]=t.useState(""),[b,D]=t.useState([]),[u,v]=t.useState(""),[k,T]=t.useState("medium"),[o,O]=t.useState(null),[E,q]=t.useState(null),[I,J]=t.useState([]);localStorage.getItem("token");const ce=s=>s.toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w\-]+/g,""),K=async()=>{try{const s=await fe();Array.isArray(s.boards)?(x(s.boards),J(s.boards.map(a=>a._id)),s.boards.forEach(a=>A(a._id))):d("Unexpected data format. Boards should be an array.")}catch(s){d("Error fetching boards. Please try again later."),console.error("Error fetching boards",s)}},de=async()=>{try{const s=await Ce();re(s.data)}catch(s){d("Error fetching users. Please try again later."),console.error("Error fetching users",s)}},A=async s=>{try{const r=(await ye(s)).data;x(i=>i.map(l=>l._id===s?{...l,tasks:r}:l))}catch(a){console.error("Error fetching tasks",a)}},he=async()=>{try{const s=ce(S),a=await Ne({title:S,users:W,slug:s});x([...p,a]),K(),_(""),B([]),g(!1)}catch(s){d("Error creating board. Please try again later."),console.error("Error creating board",s)}},me=async()=>{if(!h||!o)return;const s={title:h,description:y,assignees:b,dueDate:u,priority:k};try{const r=(await be(o,s)).data;x(i=>i.map(l=>l._id===o?{...l,tasks:r}:l)),A(o),C(""),N(""),v(""),T("medium"),D([]),j(!1)}catch(a){d("Error creating task. Please try again later."),console.error("Error creating task",a)}},xe=async()=>{if(!h||!E)return;const s={title:h,description:y,assignees:b,dueDate:u,priority:k};try{const a=await ve(E._id,s);x(r=>r.map(i=>i._id===o?{...i,tasks:i.tasks.map(l=>l._id===E._id?a.data.task:l)}:i)),A(o),f(!1),q(null)}catch(a){d("Error editing task. Please try again later."),console.error("Error editing task",a)}};t.useEffect(()=>{K(),de()},[]);const Q=p.filter(s=>{var a;return(a=s.title)==null?void 0:a.toLowerCase().includes($.toLowerCase()||"")}),X=s=>{B(a=>a.includes(s)?a.filter(r=>r!==s):[...a,s])},w=s=>{D(a=>a.includes(s)?a.filter(r=>r!==s):[...a,s])},M=s=>{var l,c;const a=s.username.split(" "),r=(l=a[0])==null?void 0:l.charAt(0).toUpperCase(),i=a.length>1?(c=a[a.length-1])==null?void 0:c.charAt(0).toUpperCase():"";return r+i},U=()=>{const s=["#3357ff"];return s[Math.floor(Math.random()*s.length)]},ue=s=>{console.log(s.dueDate),O(s.board),q(s),C(s.title),N(s.description),v(s.dueDate||""),T(s.priority),D(s.assignees),f(!0)},pe=s=>{J(a=>a.includes(s)?a.filter(r=>r!==s):[...a,s])};return e.jsxs(ke,{children:[e.jsx(se,{xs:12,children:e.jsxs(Te,{className:"mb-4",style:{border:"1px solid #ddd",borderRadius:"10px"},children:[e.jsxs(we,{className:"d-flex justify-content-between align-items-center border-0",style:{backgroundColor:"#f8f9fa"},children:[e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("strong",{className:"fs-4",children:"Boards"})}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(n,{color:"primary",className:"me-3 rounded-pill",onClick:()=>{ie("create"),_(""),B([]),g(!0)},children:"Create Board"}),e.jsx(Se,{style:{width:"250px"},className:"rounded-pill",children:e.jsx(m,{placeholder:"Search for boards...",value:$,onChange:s=>te(s.target.value),className:"rounded-pill"})})]})]}),e.jsxs(ae,{children:[Y&&e.jsx(_e,{color:"danger",children:Y}),Q.length>0?e.jsx("div",{className:"row",children:Q.map((s,a)=>e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"border p-2 rounded",style:{border:"1px solid #ddd"},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",style:{cursor:"pointer",padding:"10px",borderBottom:"1px solid #ddd"},onClick:()=>pe(s._id),children:[e.jsx("span",{className:"h5 mb-0",children:s.title}),e.jsx("span",{style:{fontSize:"20px",opacity:"0.5"},children:I.includes(s._id)?"▼":">"})]}),I.includes(s._id)&&e.jsxs("div",{className:"mt-3",children:[s.tasks&&s.tasks.length>0?e.jsxs("table",{className:"table table-striped table-bordered table-hover",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{style:{fontSize:"13px"},children:[e.jsx("th",{scope:"col",children:"Title"}),e.jsx("th",{scope:"col",children:"Assignees"}),e.jsx("th",{scope:"col",children:"Due Date"}),e.jsx("th",{scope:"col",children:"Priority"}),e.jsx("th",{scope:"col",children:"Action"})]})}),e.jsx("tbody",{children:s.tasks.map(r=>e.jsxs("tr",{style:{fontSize:"13px"},children:[e.jsx("td",{children:r.title}),e.jsx("td",{children:r.assignees&&r.assignees.length>0?r.assignees.map(i=>{const l=V.find(c=>c._id===i);if(l){const c=l.username,ge=c.charAt(0).toUpperCase(),je=c.charAt(c.length-1).toUpperCase();return e.jsxs("span",{className:"badge bg-primary me-2",style:{borderRadius:"50%",padding:"10px"},children:[ge,je]},i)}return e.jsx("span",{className:"badge bg-secondary me-2",children:"Unknown"},i)}):e.jsx("span",{className:"text-muted",children:"No Assignees"})}),e.jsx("td",{children:r.dueDate?new Date(r.dueDate).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"Not Set"}),e.jsx("td",{children:e.jsx("span",{className:`badge ${r.priority==="high"?"bg-danger":r.priority==="medium"?"bg-warning":"bg-success"}`,children:r.priority.charAt(0).toUpperCase()+r.priority.slice(1)})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex justify-content-around",style:{cursor:"pointer"},children:e.jsx(n,{size:"sm",onClick:()=>ue(r),children:"..."})})})]},r._id))})]}):e.jsx("div",{className:"text-center",children:"No tasks found"}),e.jsx(n,{color:"primary",variant:"outline",size:"sm",onClick:()=>{O(s._id),j(!0)},children:"Create Task"})]})]})},s._id))}):e.jsx(se,{children:e.jsx(ae,{className:"text-center",children:e.jsx("h5",{children:"No boards found"})})})]})]})}),e.jsxs(P,{visible:ne,onClose:()=>j(!1),className:"rounded-3",size:"lg",children:[e.jsx(L,{className:"border-0",children:e.jsx(z,{children:"Create Task"})}),e.jsxs(H,{children:[e.jsx("strong",{children:"Task"}),e.jsx(m,{placeholder:"Task Title",value:h,onChange:s=>C(s.target.value),className:"mb-3"}),e.jsx("strong",{children:"Description"}),e.jsx("textarea",{placeholder:"Task Description",value:y,onChange:s=>N(s.target.value),className:"form-control mb-3"}),e.jsxs("div",{className:"mb-3",children:[e.jsx("strong",{children:"Assignees"}),e.jsx("div",{style:{maxHeight:"200px",overflowY:"auto"},children:(Z=p.find(s=>s._id===o))==null?void 0:Z.users.map(s=>e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"position-relative",children:e.jsx(R,{size:"sm",className:"me-2",style:{backgroundColor:U(),cursor:"pointer",color:"white"},onClick:()=>w(s._id),children:M(s)})}),e.jsx("span",{onClick:()=>w(s._id),className:`text-truncate ${b.includes(s._id)?"fw-bold":""}`,style:{maxWidth:"120px",cursor:"pointer"},children:s.username})]},s._id))})]}),e.jsx("strong",{children:"Due Date"}),e.jsx(m,{type:"datetime-local",value:u,onChange:s=>v(s.target.value),className:"mb-3"}),e.jsxs("div",{className:"mb-3",children:[e.jsx("strong",{children:"Priority"}),e.jsxs("select",{className:"form-select",value:k,onChange:s=>T(s.target.value),children:[e.jsx("option",{value:"low",children:"Low"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"high",children:"High"})]})]})]}),e.jsxs(F,{children:[e.jsx(n,{color:"primary",onClick:me,className:"rounded-pill",children:"Create Task"}),e.jsx(n,{color:"secondary",onClick:()=>j(!1),className:"rounded-pill",children:"Cancel"})]})]}),e.jsxs(P,{visible:le,onClose:()=>g(!1),className:"rounded-3",children:[e.jsx(L,{className:"border-0",children:e.jsx(z,{children:G==="create"?"Create Board":"Edit Board"})}),e.jsxs(H,{children:[e.jsx(m,{value:S,onChange:s=>_(s.target.value),placeholder:"Board Title",className:"mb-3"}),e.jsxs("div",{className:"mb-3",children:[e.jsx("strong",{children:"Select Users"}),e.jsx("div",{style:{maxHeight:"300px",overflowY:"auto",paddingRight:"10px"},children:V.map(s=>e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"position-relative",children:e.jsx(R,{size:"sm",className:"me-2",style:{backgroundColor:U(),cursor:"pointer",color:"white"},onClick:()=>X(s._id),children:M(s)})}),e.jsx("span",{onClick:()=>X(s._id),className:`text-truncate ${W.includes(s._id)?"fw-bold":""}`,style:{maxWidth:"120px",cursor:"pointer"},children:s.username})]},s._id))})]})]}),e.jsxs(F,{children:[G==="create"?e.jsx(n,{color:"primary",onClick:he,className:"rounded-pill",children:"Create"}):e.jsx(n,{color:"primary",onClick:()=>{},className:"rounded-pill",children:"Save Changes"}),e.jsx(n,{color:"secondary",onClick:()=>g(!1),className:"rounded-pill",children:"Cancel"})]})]}),e.jsxs(P,{visible:oe,onClose:()=>f(!1),className:"rounded-3",size:"lg",children:[e.jsx(L,{className:"border-0",children:e.jsx(z,{children:"Edit Task"})}),e.jsxs(H,{children:[e.jsx("strong",{children:"Task"}),e.jsx(m,{placeholder:"Task Title",value:h,onChange:s=>C(s.target.value),className:"mb-3"}),e.jsx("strong",{children:"Description"}),e.jsx("textarea",{placeholder:"Task Description",value:y,onChange:s=>N(s.target.value),className:"form-control mb-3"}),e.jsxs("div",{className:"mb-3",children:[e.jsx("strong",{children:"Assignees"}),e.jsx("div",{style:{maxHeight:"200px",overflowY:"auto"},children:(ee=p.find(s=>s._id===o))==null?void 0:ee.users.map(s=>e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("div",{className:"position-relative",children:e.jsx(R,{size:"sm",className:"me-2",style:{backgroundColor:U(),cursor:"pointer",color:"white"},onClick:()=>w(s._id),children:M(s)})}),e.jsx("span",{onClick:()=>w(s._id),className:`text-truncate ${b.includes(s._id)?"fw-bold":""}`,style:{maxWidth:"120px",cursor:"pointer"},children:s.username})]},s._id))})]}),e.jsx("strong",{children:"Due Date"}),e.jsx(m,{type:"datetime-local",value:u?new Date(u).toISOString().slice(0,16):"",onChange:s=>v(s.target.value),className:"mb-3"}),e.jsxs("div",{className:"mb-3",children:[e.jsx("strong",{children:"Priority"}),e.jsxs("select",{className:"form-select",value:k,onChange:s=>T(s.target.value),children:[e.jsx("option",{value:"low",children:"Low"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"high",children:"High"})]})]})]}),e.jsxs(F,{children:[e.jsx(n,{color:"primary",onClick:xe,className:"rounded-pill",children:"Save Changes"}),e.jsx(n,{color:"secondary",onClick:()=>f(!1),className:"rounded-pill",children:"Cancel"})]})]})]})};export{$e as default};

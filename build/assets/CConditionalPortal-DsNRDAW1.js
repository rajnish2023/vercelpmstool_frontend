import{r as E,R as c,o as C,_ as O,a as S,c as g,P as u,b as L,s as U,t as j,e as F}from"./index-DgYjAzAV.js";function G(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return E.useMemo(function(){return e.every(function(o){return o==null})?null:function(o){e.forEach(function(a){z(a,o)})}},e)}function z(e,i){if(e!=null)if(B(e))e(i);else try{e.current=i}catch{throw new Error('Cannot assign value "'.concat(i,'" to ref "').concat(e,'"'))}}function B(e){return!!(e&&{}.toString.call(e)=="[object Function]")}function X(e,i){if(e==null)return{};var o={},a=Object.keys(e),n,t;for(t=0;t<a.length;t++)n=a[t],!(i.indexOf(n)>=0)&&(o[n]=e[n]);return o}function T(e,i){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},T(e,i)}function _(e,i){e.prototype=Object.create(i.prototype),e.prototype.constructor=e,T(e,i)}var R={disabled:!1},D=c.createContext(null),A=function(i){return i.scrollTop},b="unmounted",h="exited",m="entering",x="entered",k="exiting",f=function(e){_(i,e);function i(a,n){var t;t=e.call(this,a,n)||this;var r=n,s=r&&!r.isMounting?a.enter:a.appear,l;return t.appearStatus=null,a.in?s?(l=h,t.appearStatus=m):l=x:a.unmountOnExit||a.mountOnEnter?l=b:l=h,t.state={status:l},t.nextCallback=null,t}i.getDerivedStateFromProps=function(n,t){var r=n.in;return r&&t.status===b?{status:h}:null};var o=i.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(n){var t=null;if(n!==this.props){var r=this.state.status;this.props.in?r!==m&&r!==x&&(t=m):(r===m||r===x)&&(t=k)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var n=this.props.timeout,t,r,s;return t=r=s=n,n!=null&&typeof n!="number"&&(t=n.exit,r=n.enter,s=n.appear!==void 0?n.appear:r),{exit:t,enter:r,appear:s}},o.updateStatus=function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===m){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this);r&&A(r)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===h&&this.setState({status:b})},o.performEnter=function(n){var t=this,r=this.props.enter,s=this.context?this.context.isMounting:n,l=this.props.nodeRef?[s]:[C.findDOMNode(this),s],p=l[0],d=l[1],N=this.getTimeouts(),y=s?N.appear:N.enter;if(!n&&!r||R.disabled){this.safeSetState({status:x},function(){t.props.onEntered(p)});return}this.props.onEnter(p,d),this.safeSetState({status:m},function(){t.props.onEntering(p,d),t.onTransitionEnd(y,function(){t.safeSetState({status:x},function(){t.props.onEntered(p,d)})})})},o.performExit=function(){var n=this,t=this.props.exit,r=this.getTimeouts(),s=this.props.nodeRef?void 0:C.findDOMNode(this);if(!t||R.disabled){this.safeSetState({status:h},function(){n.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:k},function(){n.props.onExiting(s),n.onTransitionEnd(r.exit,function(){n.safeSetState({status:h},function(){n.props.onExited(s)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},o.setNextCallback=function(n){var t=this,r=!0;return this.nextCallback=function(s){r&&(r=!1,t.nextCallback=null,n(s))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},o.onTransitionEnd=function(n,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this),s=n==null&&!this.props.addEndListener;if(!r||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],p=l[0],d=l[1];this.props.addEndListener(p,d)}n!=null&&setTimeout(this.nextCallback,n)},o.render=function(){var n=this.state.status;if(n===b)return null;var t=this.props,r=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var s=X(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return c.createElement(D.Provider,{value:null},typeof r=="function"?r(n,s):c.cloneElement(c.Children.only(r),s))},i}(c.Component);f.contextType=D;f.propTypes={};function v(){}f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v};f.UNMOUNTED=b;f.EXITED=h;f.ENTERING=m;f.ENTERED=x;f.EXITING=k;var P=E.forwardRef(function(e,i){var o=e.className,a=e.dark,n=e.disabled,t=e.white,r=O(e,["className","dark","disabled","white"]);return c.createElement("button",S({type:"button",className:g("btn","btn-close",{"btn-close-white":t},n,o),"aria-label":"Close",disabled:n},a&&{"data-coreui-theme":"dark"},r,{ref:i}))});P.propTypes={className:u.string,dark:u.bool,disabled:u.bool,white:u.bool};P.displayName="CCloseButton";var w=E.forwardRef(function(e,i){var o,a=e.children,n=e.className,t=e.color,r=e.shape,s=e.size,l=e.src,p=e.status,d=e.textColor,N=O(e,["children","className","color","shape","size","src","status","textColor"]),y=p&&g("avatar-status","bg-".concat(p));return c.createElement("div",S({className:g("avatar",(o={},o["bg-".concat(t)]=t,o["avatar-".concat(s)]=s,o["text-".concat(d)]=d,o),r,n)},N,{ref:i}),l?c.createElement("img",{src:l,className:"avatar-img"}):a,p&&c.createElement("span",{className:y}))});w.propTypes={children:u.node,className:u.string,color:L,shape:U,size:u.string,src:u.string,status:u.string,textColor:j};w.displayName="CAvatar";var M=E.forwardRef(function(e,i){var o=e.className,a=o===void 0?"modal-backdrop":o,n=e.visible,t=O(e,["className","visible"]),r=E.useRef(null),s=G(i,r);return c.createElement(f,{in:n,mountOnEnter:!0,nodeRef:r,timeout:150,unmountOnExit:!0},function(l){return c.createElement("div",S({className:g(a,"fade",{show:l==="entered"})},t,{ref:s}))})});M.propTypes={className:u.string,visible:u.bool};M.displayName="CBackdrop";var W=function(e){return e?typeof e=="function"?e():e:document.body},I=function(e){var i=e.children,o=e.container,a=e.portal,n=E.useState(null),t=n[0],r=n[1];return E.useEffect(function(){a&&r(W(o)||document.body)},[o,a]),typeof window<"u"&&a&&t?F.createPortal(i,t):c.createElement(c.Fragment,null,i)};I.propTypes={children:u.node,container:u.any,portal:u.bool.isRequired};I.displayName="CConditionalPortal";export{I as C,f as T,M as a,w as b,P as c,G as u};

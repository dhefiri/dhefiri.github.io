(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2512],{70254:function(e){e.exports=function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,r){"use strict";n.__esModule=!0,n.default=function(e,n){if(e&&n){var r=Array.isArray(n)?n:n.split(","),t=e.name||"",o=e.type||"",i=o.replace(/\/.*$/,"");return r.some((function(e){var n=e.trim();return"."===n.charAt(0)?t.toLowerCase().endsWith(n.toLowerCase()):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}}])},32512:function(e,n,r){"use strict";r.d(n,{u:function(){return H}});var t=r(67294),o=r(45697),i=r.n(o),u=r(70655),a=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function c(e,n){var r=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var r=n.split(".").pop().toLowerCase(),t=a.get(r);t&&Object.defineProperty(e,"type",{value:t,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof r.path){var t=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"===typeof n?n:"string"===typeof t&&t.length>0?t:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var l=[".DS_Store","Thumbs.db"];function s(e){return u.mG(this,void 0,void 0,(function(){return u.Jh(this,(function(n){return[2,(r=e,r.dataTransfer&&e.dataTransfer?p(e.dataTransfer,e.type):f(e))];var r}))}))}function f(e){return(null!==e.target&&e.target.files?g(e.target.files):[]).map((function(e){return c(e)}))}function p(e,n){return u.mG(this,void 0,void 0,(function(){var r;return u.Jh(this,(function(t){switch(t.label){case 0:return e.items?(r=g(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,r]:[4,Promise.all(r.map(v))]):[3,2];case 1:return[2,d(y(t.sent()))];case 2:return[2,d(g(e.files).map((function(e){return c(e)})))]}}))}))}function d(e){return e.filter((function(e){return-1===l.indexOf(e.name)}))}function g(e){for(var n=[],r=0;r<e.length;r++){var t=e[r];n.push(t)}return n}function v(e){if("function"!==typeof e.webkitGetAsEntry)return m(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?h(n):m(e)}function y(e){return e.reduce((function(e,n){return u.fl(e,Array.isArray(n)?y(n):[n])}),[])}function m(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var r=c(n);return Promise.resolve(r)}function b(e){return u.mG(this,void 0,void 0,(function(){return u.Jh(this,(function(n){return[2,e.isDirectory?h(e):D(e)]}))}))}function h(e){var n=e.createReader();return new Promise((function(e,r){var t=[];!function o(){var i=this;n.readEntries((function(n){return u.mG(i,void 0,void 0,(function(){var i,a,c;return u.Jh(this,(function(u){switch(u.label){case 0:if(n.length)return[3,5];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,Promise.all(t)];case 2:return i=u.sent(),e(i),[3,4];case 3:return a=u.sent(),r(a),[3,4];case 4:return[3,6];case 5:c=Promise.all(n.map(b)),t.push(c),o(),u.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function D(e){return u.mG(this,void 0,void 0,(function(){return u.Jh(this,(function(n){return[2,new Promise((function(n,r){e.file((function(r){var t=c(r,e.fullPath);n(t)}),(function(e){r(e)}))}))]}))}))}var O=r(70254),w=r.n(O);function F(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],t=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(t=(u=a.next()).done)&&(r.push(u.value),!n||r.length!==n);t=!0);}catch(c){o=!0,i=c}finally{try{t||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var j=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(n)}},A=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," bytes")}},E=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," bytes")}},k={code:"too-many-files",message:"Too many files"};function P(e,n){var r="application/x-moz-file"===e.type||w()(e,n);return[r,r?null:j(n)]}function C(e,n,r){if(x(e.size))if(x(n)&&x(r)){if(e.size>r)return[!1,A(r)];if(e.size<n)return[!1,E(n)]}else{if(x(n)&&e.size<n)return[!1,E(n)];if(x(r)&&e.size>r)return[!1,A(r)]}return[!0,null]}function x(e){return void 0!==e&&null!==e}function S(e){var n=e.files,r=e.accept,t=e.minSize,o=e.maxSize;return!(!e.multiple&&n.length>1)&&n.every((function(e){var n=F(P(e,r),1)[0],i=F(C(e,t,o),1)[0];return n&&i}))}function R(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function z(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function T(e){e.preventDefault()}function L(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function I(e){return-1!==e.indexOf("Edge/")}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return L(e)||I(e)}function _(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return n.some((function(n){return!R(e)&&n&&n.apply(void 0,[e].concat(t)),R(e)}))}}function B(e){return function(e){if(Array.isArray(e)){for(var n=0,r=new Array(e.length);n<e.length;n++)r[n]=e[n];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function G(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],t=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(t=(u=a.next()).done)&&(r.push(u.value),!n||r.length!==n);t=!0);}catch(c){o=!0,i=c}finally{try{t||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function M(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function J(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?M(r,!0).forEach((function(n){N(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function N(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function q(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var W=(0,t.forwardRef)((function(e,n){var r=e.children,o=H(q(e,["children"])),i=o.open,u=q(o,["open"]);return(0,t.useImperativeHandle)(n,(function(){return{open:i}}),[i]),t.createElement(t.Fragment,null,r(J({},u,{open:i})))}));W.displayName="Dropzone",W.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func};var $={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.accept,r=e.disabled,o=void 0!==r&&r,i=e.getFilesFromEvent,u=void 0===i?s:i,a=e.maxSize,c=void 0===a?1/0:a,l=e.minSize,f=void 0===l?0:l,p=e.multiple,d=void 0===p||p,g=e.onDragEnter,v=e.onDragLeave,y=e.onDragOver,m=e.onDrop,b=e.onDropAccepted,h=e.onDropRejected,D=e.onFileDialogCancel,O=e.preventDropOnDocument,w=void 0===O||O,F=e.noClick,j=void 0!==F&&F,A=e.noKeyboard,E=void 0!==A&&A,x=e.noDrag,L=void 0!==x&&x,I=e.noDragEventsBubbling,M=void 0!==I&&I,W=(0,t.useRef)(null),H=(0,t.useRef)(null),U=(0,t.useReducer)(Q,$),V=G(U,2),X=V[0],Y=V[1],Z=X.isFocused,ee=X.isFileDialogActive,ne=X.draggedFiles,re=(0,t.useCallback)((function(){H.current&&(Y({type:"openDialog"}),H.current.value=null,H.current.click())}),[Y]),te=function(){ee&&setTimeout((function(){H.current&&(H.current.files.length||(Y({type:"closeDialog"}),"function"===typeof D&&D()))}),300)};(0,t.useEffect)((function(){return window.addEventListener("focus",te,!1),function(){window.removeEventListener("focus",te,!1)}}),[H,ee,D]);var oe=(0,t.useCallback)((function(e){W.current&&W.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),re()))}),[W,H]),ie=(0,t.useCallback)((function(){Y({type:"focus"})}),[]),ue=(0,t.useCallback)((function(){Y({type:"blur"})}),[]),ae=(0,t.useCallback)((function(){j||(K()?setTimeout(re,0):re())}),[H,j]),ce=(0,t.useRef)([]),le=function(e){W.current&&W.current.contains(e.target)||(e.preventDefault(),ce.current=[])};(0,t.useEffect)((function(){return w&&(document.addEventListener("dragover",T,!1),document.addEventListener("drop",le,!1)),function(){w&&(document.removeEventListener("dragover",T),document.removeEventListener("drop",le))}}),[W,w]);var se=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),me(e),ce.current=[].concat(B(ce.current),[e.target]),z(e)&&Promise.resolve(u(e)).then((function(n){R(e)&&!M||(Y({draggedFiles:n,isDragActive:!0,type:"setDraggedFiles"}),g&&g(e))}))}),[u,g,M]),fe=(0,t.useCallback)((function(e){if(e.preventDefault(),e.persist(),me(e),e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return z(e)&&y&&y(e),!1}),[y,M]),pe=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),me(e);var n=ce.current.filter((function(e){return W.current&&W.current.contains(e)})),r=n.indexOf(e.target);-1!==r&&n.splice(r,1),ce.current=n,n.length>0||(Y({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),z(e)&&v&&v(e))}),[W,v,M]),de=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),me(e),ce.current=[],z(e)&&Promise.resolve(u(e)).then((function(r){if(!R(e)||M){var t=[],o=[];r.forEach((function(e){var r=G(P(e,n),2),i=r[0],u=r[1],a=G(C(e,f,c),2),l=a[0],s=a[1];if(i&&l)t.push(e);else{var p=[u,s].filter((function(e){return e}));o.push({file:e,errors:p})}})),!d&&t.length>1&&(t.forEach((function(e){o.push({file:e,errors:[k]})})),t.splice(0)),Y({acceptedFiles:t,fileRejections:o,type:"setFiles"}),m&&m(t,o,e),o.length>0&&h&&h(o,e),t.length>0&&b&&b(t,e)}})),Y({type:"reset"})}),[d,n,f,c,u,m,b,h,M]),ge=function(e){return o?null:e},ve=function(e){return E?null:ge(e)},ye=function(e){return L?null:ge(e)},me=function(e){M&&e.stopPropagation()},be=(0,t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,r=void 0===n?"ref":n,t=e.onKeyDown,i=e.onFocus,u=e.onBlur,a=e.onClick,c=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=q(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return J(N({onKeyDown:ve(_(t,oe)),onFocus:ve(_(i,ie)),onBlur:ve(_(u,ue)),onClick:ge(_(a,ae)),onDragEnter:ye(_(c,se)),onDragOver:ye(_(l,fe)),onDragLeave:ye(_(s,pe)),onDrop:ye(_(f,de))},r,W),o||E?{}:{tabIndex:0},{},p)}}),[W,oe,ie,ue,ae,se,fe,pe,de,E,L,o]),he=(0,t.useCallback)((function(e){e.stopPropagation()}),[]),De=(0,t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.refKey,t=void 0===r?"ref":r,o=e.onChange,i=e.onClick,u=q(e,["refKey","onChange","onClick"]),a=N({accept:n,multiple:d,type:"file",style:{display:"none"},onChange:ge(_(o,de)),onClick:ge(_(i,he)),autoComplete:"off",tabIndex:-1},t,H);return J({},a,{},u)}}),[H,n,d,de,o]),Oe=ne.length,we=Oe>0&&S({files:ne,accept:n,minSize:f,maxSize:c,multiple:d}),Fe=Oe>0&&!we;return J({},X,{isDragAccept:we,isDragReject:Fe,isFocused:Z&&!o,getRootProps:be,getInputProps:De,rootRef:W,inputRef:H,open:ge(re)})}function Q(e,n){switch(n.type){case"focus":return J({},e,{isFocused:!0});case"blur":return J({},e,{isFocused:!1});case"openDialog":return J({},e,{isFileDialogActive:!0});case"closeDialog":return J({},e,{isFileDialogActive:!1});case"setDraggedFiles":var r=n.isDragActive;return J({},e,{draggedFiles:n.draggedFiles,isDragActive:r});case"setFiles":return J({},e,{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return J({},e,{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]});default:return e}}}}]);
"use strict";(self.webpackChunkdorfladen_frontend=self.webpackChunkdorfladen_frontend||[]).push([[252],{252:(a,g,h)=>{h.a(a,async(X,s)=>{try{h.r(g),h.d(g,{BrotliStreamResult:()=>n.lH,CompressStream:()=>n.J2,DecompressStream:()=>n.jT,__wbg_error_09919627ac0992f5:()=>n.gk,__wbg_new_693216e109162396:()=>n.Ih,__wbg_stack_0ddaca5d1abfb52f:()=>n.yq,__wbindgen_is_object:()=>n.Wl,__wbindgen_is_undefined:()=>n.XP,__wbindgen_json_serialize:()=>n.r1,__wbindgen_object_drop_ref:()=>n.ug,__wbindgen_string_new:()=>n.h4,__wbindgen_throw:()=>n.Or,compress:()=>n.nN,decompress:()=>n.Lj});var n=h(2146),y=X([n]);n=(y.then?(await y)():y)[0],s()}catch(o){s(o)}})},2146:(a,g,h)=>{h.a(a,async(X,s)=>{try{let j=function(t){return o[t]},S=function(){return(null===F||F.buffer!==n.memory.buffer)&&(F=new Uint8Array(n.memory.buffer)),F},w=function(t,e,r){if(void 0===r){const d=H.encode(t),p=e(d.length);return S().subarray(p,p+d.length).set(d),v=d.length,p}let u=t.length,i=e(u);const l=S();let c=0;for(;c<u;c++){const d=t.charCodeAt(c);if(d>127)break;l[i+c]=d}if(c!==u){0!==c&&(t=t.slice(c)),i=r(i,u,u=c+3*t.length);const d=S().subarray(i+c,i+u);c+=I(t,d).written}return v=c,i},f=function(){return(null===J||J.buffer!==n.memory.buffer)&&(J=new Int32Array(n.memory.buffer)),J},$=function(t,e){return b.decode(S().subarray(t,t+e))},m=function(t){k===o.length&&o.push(o.length+1);const e=k;return k=o[e],o[e]=t,e},A=function(t){t<36||(o[t]=k,k=t)},x=function(t){const e=j(t);return A(t),e},V=function(t,e){const r=e(1*t.length);return S().set(t,r/1),v=t.length,r},R=function(t){if(1==G)throw new Error("out of js stack");return o[--G]=t,G},Q=function(t,e){return S().subarray(t/1,t/1+e)},B=function(t,e){try{const d=n.__wbindgen_add_to_stack_pointer(-16),p=V(t,n.__wbindgen_malloc);n.compress(d,p,v,R(e));var r=f()[d/4+0],u=f()[d/4+1],i=f()[d/4+2];if(f()[d/4+3])throw x(i);var c=Q(r,u).slice();return n.__wbindgen_free(r,1*u),c}finally{n.__wbindgen_add_to_stack_pointer(16),o[G++]=void 0}},C=function(t){try{const c=n.__wbindgen_add_to_stack_pointer(-16),d=V(t,n.__wbindgen_malloc);n.decompress(c,d,v);var e=f()[c/4+0],r=f()[c/4+1],u=f()[c/4+2];if(f()[c/4+3])throw x(u);var l=Q(e,r).slice();return n.__wbindgen_free(e,1*r),l}finally{n.__wbindgen_add_to_stack_pointer(16)}},q=function(t){return null==t},U=function(t,e){const r=j(e),u=JSON.stringify(void 0===r?null:r),i=w(u,n.__wbindgen_malloc,n.__wbindgen_realloc),l=v;f()[t/4+1]=l,f()[t/4+0]=i},K=function(t){return void 0===j(t)},O=function(t){const e=j(t);return"object"==typeof e&&null!==e},M=function(t,e){const r=$(t,e);return m(r)},D=function(){const t=new Error;return m(t)},P=function(t,e){const r=j(e).stack,u=w(r,n.__wbindgen_malloc,n.__wbindgen_realloc),i=v;f()[t/4+1]=i,f()[t/4+0]=u},E=function(t,e){try{console.error($(t,e))}finally{n.__wbindgen_free(t,e)}},_=function(t){x(t)},ee=function(t,e){throw new Error($(t,e))};h.d(g,{Ih:()=>D,J2:()=>Y,Lj:()=>C,Or:()=>ee,Wl:()=>O,XP:()=>K,gk:()=>E,h4:()=>M,jT:()=>Z,lH:()=>L,nN:()=>B,r1:()=>U,ug:()=>_,yq:()=>P});var n=h(4493);a=h.hmd(a);var y=X([n]);n=(y.then?(await y)():y)[0];const o=new Array(32).fill(void 0);o.push(void 0,null,!0,!1);let v=0,F=null,H=new("undefined"==typeof TextEncoder?(0,a.require)("util").TextEncoder:TextEncoder)("utf-8");const I="function"==typeof H.encodeInto?function(t,e){return H.encodeInto(t,e)}:function(t,e){const r=H.encode(t);return e.set(r),{read:t.length,written:r.length}};let J=null,b=new("undefined"==typeof TextDecoder?(0,a.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});b.decode();let k=o.length,G=32;const L=Object.freeze({Init:0,0:"Init",ResultSuccess:1,1:"ResultSuccess",NeedsMoreInput:2,2:"NeedsMoreInput",NeedsMoreOutput:3,3:"NeedsMoreOutput"});class Y{static __wrap(e){const r=Object.create(Y.prototype);return r.ptr=e,r}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();n.__wbg_compressstream_free(e)}constructor(e){const r=n.compressstream_new(!q(e),q(e)?0:e);return Y.__wrap(r)}compress(e,r){try{const N=n.__wbindgen_add_to_stack_pointer(-16);var u=q(e)?0:V(e,n.__wbindgen_malloc);n.compressstream_compress(N,this.ptr,u,v,r);var l=f()[N/4+0],c=f()[N/4+1],d=f()[N/4+2];if(f()[N/4+3])throw x(d);var z=Q(l,c).slice();return n.__wbindgen_free(l,1*c),z}finally{n.__wbindgen_add_to_stack_pointer(16)}}total_out(){return n.compressstream_total_out(this.ptr)>>>0}result(){return n.compressstream_result(this.ptr)}last_input_offset(){return n.compressstream_last_input_offset(this.ptr)>>>0}}class Z{static __wrap(e){const r=Object.create(Z.prototype);return r.ptr=e,r}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();n.__wbg_decompressstream_free(e)}constructor(){const e=n.decompressstream_new();return Z.__wrap(e)}decompress(e,r){try{const p=n.__wbindgen_add_to_stack_pointer(-16),z=V(e,n.__wbindgen_malloc);n.decompressstream_decompress(p,this.ptr,z,v,r);var u=f()[p/4+0],i=f()[p/4+1],l=f()[p/4+2];if(f()[p/4+3])throw x(l);var d=Q(u,i).slice();return n.__wbindgen_free(u,1*i),d}finally{n.__wbindgen_add_to_stack_pointer(16)}}total_out(){return n.decompressstream_total_out(this.ptr)>>>0}result(){return n.decompressstream_result(this.ptr)}last_input_offset(){return n.decompressstream_last_input_offset(this.ptr)>>>0}}s()}catch(o){s(o)}})},4493:(a,g,h)=>{h.a(a,async(s,n)=>{try{var o,y=s([o=h(2146)]),[o]=y.then?(await y)():y;await h.v(g,a.id,"13cba0f22c5b8deb",{"./brotli_wasm_bg.js":{__wbindgen_json_serialize:o.r1,__wbindgen_is_undefined:o.XP,__wbindgen_is_object:o.Wl,__wbindgen_string_new:o.h4,__wbg_new_693216e109162396:o.Ih,__wbg_stack_0ddaca5d1abfb52f:o.yq,__wbg_error_09919627ac0992f5:o.gk,__wbindgen_object_drop_ref:o.ug,__wbindgen_throw:o.Or}}),n()}catch(j){n(j)}},1)}}]);
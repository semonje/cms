!function(e){var o="object"==typeof exports&&exports&&!exports.nodeType&&exports,n="object"==typeof module&&module&&!module.nodeType&&module,t="object"==typeof global&&global;t.global!==t&&t.window!==t&&t.self!==t||(e=t);var r,u,i=2147483647,f=36,c=1,l=26,s=38,d=700,p=72,a=128,h="-",v=/^xn--/,g=/[^\x20-\x7E]/,w=/[\x2E\u3002\uFF0E\uFF61]/g,x={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},b=f-c,y=Math.floor,C=String.fromCharCode;function m(e){throw RangeError(x[e])}function j(e,o){for(var n=e.length,t=[];n--;)t[n]=o(e[n]);return t}function A(e,o){var n=e.split("@"),t="";return n.length>1&&(t=n[0]+"@",e=n[1]),t+j((e=e.replace(w,".")).split("."),o).join(".")}function I(e){for(var o,n,t=[],r=0,u=e.length;r<u;)(o=e.charCodeAt(r++))>=55296&&o<=56319&&r<u?56320==(64512&(n=e.charCodeAt(r++)))?t.push(((1023&o)<<10)+(1023&n)+65536):(t.push(o),r--):t.push(o);return t}function E(e){return j(e,function(e){var o="";return e>65535&&(o+=C((e-=65536)>>>10&1023|55296),e=56320|1023&e),o+=C(e)}).join("")}function F(e,o){return e+22+75*(e<26)-((0!=o)<<5)}function O(e,o,n){var t=0;for(e=n?y(e/d):e>>1,e+=y(e/o);e>b*l>>1;t+=f)e=y(e/b);return y(t+(b+1)*e/(e+s))}function S(e){var o,n,t,r,u,s,d,v,g,w,x,b=[],C=e.length,j=0,A=a,I=p;for((n=e.lastIndexOf(h))<0&&(n=0),t=0;t<n;++t)e.charCodeAt(t)>=128&&m("not-basic"),b.push(e.charCodeAt(t));for(r=n>0?n+1:0;r<C;){for(u=j,s=1,d=f;r>=C&&m("invalid-input"),((v=(x=e.charCodeAt(r++))-48<10?x-22:x-65<26?x-65:x-97<26?x-97:f)>=f||v>y((i-j)/s))&&m("overflow"),j+=v*s,!(v<(g=d<=I?c:d>=I+l?l:d-I));d+=f)s>y(i/(w=f-g))&&m("overflow"),s*=w;I=O(j-u,o=b.length+1,0==u),y(j/o)>i-A&&m("overflow"),A+=y(j/o),j%=o,b.splice(j++,0,A)}return E(b)}function T(e){var o,n,t,r,u,s,d,v,g,w,x,b,j,A,E,S=[];for(b=(e=I(e)).length,o=a,n=0,u=p,s=0;s<b;++s)(x=e[s])<128&&S.push(C(x));for(t=r=S.length,r&&S.push(h);t<b;){for(d=i,s=0;s<b;++s)(x=e[s])>=o&&x<d&&(d=x);for(d-o>y((i-n)/(j=t+1))&&m("overflow"),n+=(d-o)*j,o=d,s=0;s<b;++s)if((x=e[s])<o&&++n>i&&m("overflow"),x==o){for(v=n,g=f;!(v<(w=g<=u?c:g>=u+l?l:g-u));g+=f)E=v-w,A=f-w,S.push(C(F(w+E%A,0))),v=y(E/A);S.push(C(F(v,0))),u=O(n,j,t==r),n=0,++t}++n,++o}return S.join("")}if(r={version:"1.3.2",ucs2:{decode:I,encode:E},decode:S,encode:T,toASCII:function(e){return A(e,function(e){return g.test(e)?"xn--"+T(e):e})},toUnicode:function(e){return A(e,function(e){return v.test(e)?S(e.slice(4).toLowerCase()):e})}},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return r});else if(o&&n)if(module.exports==o)n.exports=r;else for(u in r)r.hasOwnProperty(u)&&(o[u]=r[u]);else e.punycode=r}(this);
//# sourceMappingURL=punycode.js.map
(function(){var t={exports:{}},e=t.exports;e._bootstrapTransform=function(t,e,r,n){var p=function(t,r,n,p){e(n,t,r,"left"),e(p,r,t,"right")},i=t.transformX=function(t,e){r(t),r(e);for(var l=[],o=0;e.length>o;o++){for(var f=e[o],s=[],a=0;t.length>a;){var h=[];if(p(t[a],f,s,h),a++,1!==h.length){if(0===h.length){for(var u=a;t.length>u;u++)n(s,t[u]);f=null;break}for(var d=i(t.slice(a),h),g=0;d[0].length>g;g++)n(s,d[0][g]);for(var c=0;d[1].length>c;c++)n(l,d[1][c]);f=null;break}f=h[0]}null!=f&&n(l,f),t=s}return[t,l]};t.transform=t.transform=function(t,r,n){if("left"!==n&&"right"!==n)throw Error("type must be 'left' or 'right'");return 0===r.length?t:1===t.length&&1===r.length?e([],t[0],r[0],n):"left"===n?i(t,r)[0]:i(r,t)[1]}};var r=t.exports={name:"text0",uri:"http://sharejs.org/types/textv0",create:function(t){if(null!=t&&"string"!=typeof t)throw Error("Initial data must be a string");return t||""}},n=function(t,e,r){return t.slice(0,e)+r+t.slice(e)},p=function(t){if("number"!=typeof t.p)throw Error("component missing position field");if("string"==typeof t.i==("string"==typeof t.d))throw Error("component needs an i or d field");if(0>t.p)throw Error("position cannot be negative")},i=function(t){for(var e=0;t.length>e;e++)p(t[e])};r.apply=function(t,e){var r;i(e);for(var p=0;e.length>p;p++){var l=e[p];if(null!=l.i)t=n(t,l.p,l.i);else{if(r=t.slice(l.p,l.p+l.d.length),l.d!==r)throw Error("Delete component '"+l.d+"' does not match deleted text '"+r+"'");t=t.slice(0,l.p)+t.slice(l.p+l.d.length)}}return t};var l=r._append=function(t,e){if(""!==e.i&&""!==e.d)if(0===t.length)t.push(e);else{var r=t[t.length-1];null!=r.i&&null!=e.i&&r.p<=e.p&&e.p<=r.p+r.i.length?t[t.length-1]={i:n(r.i,e.p-r.p,e.i),p:r.p}:null!=r.d&&null!=e.d&&e.p<=r.p&&r.p<=e.p+e.d.length?t[t.length-1]={d:n(e.d,r.p-e.p,r.d),p:e.p}:t.push(e)}};r.compose=function(t,e){i(t),i(e);for(var r=t.slice(),n=0;e.length>n;n++)l(r,e[n]);return r},r.normalize=function(t){var e=[];(null!=t.i||null!=t.p)&&(t=[t]);for(var r=0;t.length>r;r++){var n=t[r];null==n.p&&(n.p=0),l(e,n)}return e};var o=function(t,e,r){return null!=e.i?t>e.p||e.p===t&&r?t+e.i.length:t:e.p>=t?t:e.p+e.d.length>=t?e.p:t-e.d.length};r.transformCursor=function(t,e,r){for(var n="right"===r,p=0;e.length>p;p++)t=o(t,e[p],n);return t};var f=r._tc=function(t,e,r,n){if(p(e),p(r),null!=e.i)l(t,{i:e.i,p:o(e.p,r,"right"===n)});else if(null!=r.i){var i=e.d;e.p<r.p&&(l(t,{d:i.slice(0,r.p-e.p),p:e.p}),i=i.slice(r.p-e.p)),""!==i&&l(t,{d:i,p:e.p+r.i.length})}else if(e.p>=r.p+r.d.length)l(t,{d:e.d,p:e.p-r.d.length});else if(e.p+e.d.length<=r.p)l(t,e);else{var f={d:"",p:e.p};e.p<r.p&&(f.d=e.d.slice(0,r.p-e.p)),e.p+e.d.length>r.p+r.d.length&&(f.d+=e.d.slice(r.p+r.d.length-e.p));var s=Math.max(e.p,r.p),a=Math.min(e.p+e.d.length,r.p+r.d.length),h=e.d.slice(s-e.p,a-e.p),u=r.d.slice(s-r.p,a-r.p);if(h!==u)throw Error("Delete ops delete different text in the same region of the document");""!==f.d&&(f.p=o(f.p,r),l(t,f))}return t},s=function(t){return null!=t.i?{d:t.i,p:t.p}:{i:t.d,p:t.p}};r.invert=function(t){t=t.slice().reverse();for(var e=0;t.length>e;e++)t[e]=s(t[e]);return t},e._bootstrapTransform?e._bootstrapTransform(r,f,i,l):require("./helpers")._bootstrapTransform(r,f,i,l);var a=window.ottypes=window.ottypes||{},h=t.exports;a[h.name]=h,h.uri&&(a[h.uri]=h)})();
!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var o,i,u,a,f,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,f=setTimeout(h,t),d?b(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function w(e){return f=void 0,m&&o?b(e):(o=i=void 0,a)}function x(){var e=p(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(h,t),b(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=S(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},x.flush=function(){return void 0===f?a:w(p())},x}function y(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=a.test(e);return r||f.test(e)?c(e.slice(2),r?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea"),button:document.querySelector(".feedback-form button")},O="feedback-form-state",h=JSON.parse(localStorage.getItem(O))||{};j.form.addEventListener("submit",(function(e){e.preventDefault(),h.message&&h.email&&(console.log("отправляем форму и очищаем поле"),console.log(h),localStorage.removeItem(O),e.target.reset(),h={})})),j.form.addEventListener("input",n((function(e){e.preventDefault(),h[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(h))}),500)),function(e){e.message&&(j.textarea.value=e.message);e.email&&(j.input.value=e.email);console.log(e)}(h)}();
//# sourceMappingURL=03-feedback.06311166.js.map
import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const n=document.querySelector("button"),o=document.querySelector(".feedback-form");function s(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e)for(const t in e)o.elements[t].value=e[t]}s();n.addEventListener("click",l);function l(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),o.reset()}o.addEventListener("input",_.throttle(c,500));function c(e){const t=e.target,a=JSON.parse(localStorage.getItem("feedback-form-state"));if(a)a[t.name]=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(a));else{const r={email:"",message:""};r[t.name]=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(r))}}
//# sourceMappingURL=commonHelpers3.js.map
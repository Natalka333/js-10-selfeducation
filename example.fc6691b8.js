const e=document.querySelector(".btn"),n=document.querySelector(".user-list");e.addEventListener("click",(()=>{fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>function(e){const t=e.map((e=>`<li>\n        <p><b>Name</b>: ${e.name}</p>\n        <p><b>Email</b>: ${e.email}</p>\n        <p><b>Company</b>: ${e.company.name}</p>\n    </li>`)).join("");n.insertAdjacentHTML("beforeend",t)}(e))).catch((e=>console.log(e)))}));
//# sourceMappingURL=example.fc6691b8.js.map

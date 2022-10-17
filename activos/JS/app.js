const API_URL = 'https://jsonplaceholder.typicode.com';

// const xhr = new XMLHttpRequest();
// function onRequestHandler(){
//     if(this.readyState === 4 && this.status === 200){
//         // 0 = UNSET, no se ha llamado al metodo open
//         // 1 = OPENED, se ha llamado al metodo open
//         // 2 = HEADERS_RECEIVED, se esta llamando al metodo send()
//         // 3 = LOADING, se esta cargando, es decir, está recibiendo la respuesta
//         // 4 = DONE, se ha completado la operacion 
//        const data = JSON.parse(this.response);
//        console.log(data);
//        const HTMLResponse =  document.querySelector('#app');
       
//        const tpl = data.map(user => `<li>Nombre y Apellido: ${user.name} - email: ${user.email} - teléfono: ${user.phone}</li>`);
//        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
//     }
// }

// xhr.addEventListener('load', onRequestHandler);
// xhr.open('GET', `${API_URL}/users`);
// xhr.send();

//otra forma
// const HTMLResponse = document.querySelector("#app");

// fetch(`${API_URL}/users`).then((response) => response.json()).then((users) => {
//     const tpl = users.map(user => `<li>Nombre y Apellido: ${user.name} - email: ${user.email} - teléfono: ${user.phone}</li>`)
//     HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
// });

//3ra forma - modificamos el html con nodos del dom
const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');

fetch(`${API_URL}/users`).then((response) => response.json()).then((users) => {
    users.forEach(user=> {
        let elem = document.createElement('li');
        elem.appendChild(document.createTextNode(`Nombre y Apellido: ${user.name} - email: ${user.email} - teléfono: ${user.phone}`));
        ul.appendChild(elem);
    })
    HTMLResponse.appendChild(ul);

});


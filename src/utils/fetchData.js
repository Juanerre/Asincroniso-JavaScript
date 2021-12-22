// todo ejecutandose en node.js
// instalar desde consola la dependencia Xtmlhttprequest hace peticiones a serv en la nube la API 
// instaciar esa dependencia
// convertirla a ECMAScript 6
// if ternario ?:

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// crea funcion fetchData para traer la informcion

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
               (xhttp.status ===200)
                 ? resolve(JSON.parse(xhttp.responseText))
                 : reject(new Error('Error', url_api))
            }
        });
        xhttp.send();
    });
}

module.exports = fetchData;
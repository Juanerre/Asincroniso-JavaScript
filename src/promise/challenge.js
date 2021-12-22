const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';
// 1. resolver peticiones del reto, el (count) para el # de personajes
// 2. peticion para llamado al 1er elemento(personaje) el [0] traer (name)
// 3. del resultante personaje traer la dimension (dimension) a la que pertenece

fetchData(API)
   .then(data => {
       console.log(data.info.count);
       return fetchData(`${API}${data.results[0].id}`)
   })
   .then(data => {
       console.log(data.name)
       return fetchData(data.origin.url)
   })
   .then(data  => {
       console.log(data.dimension)      
   })
   .catch(err => console.error(err));

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('hey! imprime si la promesa se resuelve');
        } else {
            reject('whoops!!!! imprime esto si no se resuelve la promesa');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

    // funcion con tiempo de espera
    // setTimeOut recibe dos parametros, una funcion y un tiempo de delay en ms.

    const somethingWillHappen2 =() => {
        return new Promise((resolve, reject) => {
            if(true) {
                setTimeout(() => {
                    resolve('True, imprime esto si la promesa se resuelve bien despues del tiempo setTimeOut'); 
                }, 2000)
            } else {
                const error = new Error('whoops sale esto si no se resuelve y muestra el track del error');
                reject(error);
            }
        });
    }
    somethingWillHappen2()
    // ejecuta esto si la promesa se cumple
       .then(response => console.log(response))
            //    se pueden poner mas .then si es necesario
        // ejecuta el .catch si hay un error(false en la pormesa)
       .catch(err => console.error(err))

    //    correr varioas promesas encadenadas Promises.all retornar arreglo con los resultados

    Promise.all([somethingWillHappen(), somethingWillHappen2()])
      .then(response =>{
        console.log('Array of results if promise resolve ok:',  response);
      })
    .catch(err => {
        console.error(err);
    })
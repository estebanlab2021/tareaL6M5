import { createStore } from 'vuex'

export default createStore({
    state: {
        productos: '',
        producto: {},
        updatedata: {},
        itemdata: {},
        mostrar: false
    },
    mutations: {
        nuevodato: (state, payload) => { state.producto = payload },
        nuevoproducto(state) {
            const postMethod = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(state.producto)
            }
            fetch('https://productos-vue-default-rtdb.firebaseio.com/productos.json', postMethod)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
                //alert('Se ha enviado el producto a la Base de Datos');
        },
        eliminarprod(state, n) {
            const deleteMethod = {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' },
            }
            fetch('https://productos-vue-default-rtdb.firebaseio.com/productos' + '/' + n + '.json', deleteMethod)
                .then(response => response.json())
                .catch(error => console.log(error))
            console.log('Se ha eliminado el dato: ', state.productos[n].nombre);
            //alert(`Se ha eliminado el producto: ${state.productos[n].nombre}`)
        },
        //obtenerproductos(state) {
        //    const getMethod = {
        //        method: 'GET',
        //        headers: { 'Content-type': 'application/json' }
        //    }
        //    fetch('https://productos-vue-default-rtdb.firebaseio.com/productos.json', getMethod)
        //        .then(response => response.json())
        //        .then(data => (state.productos = data))
        //        .catch(error => console.log(error))
        //},
        async obtenerproductos(state) {
            try {
                await fetch(`https://productos-vue-default-rtdb.firebaseio.com/productos.json`, {
                        method: 'GET',
                        headers: { 'Content-Type': 'Application/json' },
                    })
                    .then(respuesta => respuesta.json())
                    .then(data => (state.productos = data))
                console.log('productos: ', state.productos)
            } catch (error) {
                console.log('No se leen los datos: ', error)
            }
        },
        nuevoupdate: (state, payload) => {
            state.updatedata = payload
        },
        updatemostrar: (state, payload) => {
            state.mostrar = payload
        },
        dataitem: (state, payload) => { state.itemdata = payload },
        setActualizarProductos(state, n) {
            //state.mostrar = false;
            const patchMethod = {
                method: 'PATCH',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(state.updatedata)
            }
            fetch('https://productos-vue-default-rtdb.firebaseio.com/productos' + '/' + n + '.json', patchMethod)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
            console.log('Se ha actualizado el dato: ', state.productos[n].nombre);
            state.mostrar = false;
        },
    },
    actions: {
        //async setNuevoProducto(productos) {
        //    try {
        //        await fetch(`https://productos-vue-default-rtdb.firebaseio.com/productos.json`, {
        //                method: 'POST',
        //                headers: { 'Content-Type': 'Application/json' },
        //                body: JSON.stringify(productos)
        //            })
        //            .then(response => response.json())
        //            .then(data => console.log(data))
        //            //const db = resp.json();
        //            //console.log('db: ', db);
        //        alert('Se ha enviado el dato a la Base de Datos');
        //    } catch (error) {
        //        console.log('Error de Guardado: ', error)
        //    }
        //}
    },
    modules: {}
})
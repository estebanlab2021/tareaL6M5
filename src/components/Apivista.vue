<template>
<div class="container">
    <div class="row justify-content-center bg-warning pt-3">
        <!--<div class="col-3 text-center py-3">
            <button @click="obtenerproductos" class="btn btn-primary">Ver Productos de BD</button>
        </div>-->
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </symbol>
            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </symbol>
        </svg>
        <div class="row justify-content-center">
            <div class="col-10 showalerta" v-show="alerta2">
                <div class="alert alert-danger d-flex align-items-center" role="alert">
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                        <div class="col-10">
                            Se ha eliminado el producto: {{itemdata.nombrebase}} de la Base de Datos
                        </div>
                        <div class="col-2">
                            <button class="btn btn-danger" @click="alerta2 = false; cambiarinput()">x</button>
                        </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-10 showalerta" v-show="alerta3">
                <div class="alert alert-success d-flex align-items-center"  role="alert">
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                        <div class="col-10">
                            Se ha actualizado el producto: {{itemdata.nombrebase}} en la Base de Datos
                        </div>
                        <div class="col-2">
                            <button class="btn btn-danger" @click="alerta3 = false; cambiarinput()">x</button>
                        </div>  
                </div>
            </div>
        </div>
        
        <div class="col-10 text-center">
            <div class="table-responsive">
                <table class="table table-warning table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">imagen</th>
                            <th scope="col">Plataforma</th>
                            <th scope="col">Género</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="(item,index) of productos" :key="index" @click="verdata(index)" style="cursor: pointer">
                            <td>{{item.nombre}}</td>
                            <td> <img :src=item.imagen class="img-fluid img-thumbnail" width="100" height="200"> </td>
                            <td>{{item.plataforma}}</td>
                            <td>{{item.genero}}</td>
                            <td>{{item.precio}}</td>
                            <td>{{item.estado}}</td>
                            <td>
                                <button @click="eliminarprod(index);obtenerproductos();alerta2 = true" class="btn btn-outline-danger btn-sm mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>

                                    <button @click="actualizarproductos(index);obtenerproductos()" class="btn btn-outline-success btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                                        </svg>
                                    </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
</div>
  
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    data() {
        return {
            alerta2: false,
            alerta3: false,
            idbase:'',
            inputmostrar:false,
        }
    },
    computed: {
        ...mapState(['productos','updatedata','itemdata']),
    },
    created () {
        this.obtenerproductos();
    },
    methods: {
        ...mapMutations(['obtenerproductos','eliminarprod','nuevoupdate','setActualizarProductos','updatemostrar','dataitem']),

        verdata(item){
            //this.idbase = item;
            let baseitem = {
                nombrebase : this.productos[item].nombre,
                plataformabase : this.productos[item].plataforma,
                generobase : this.productos[item].genero,
                preciobase : this.productos[item].precio,
                imagenbase : this.productos[item].imagen,
                estadobase : this.productos[item].estado,
            };
            this.dataitem(baseitem); //envia los datos de la base al input
            let mostrar = true;
            this.updatemostrar(mostrar); //mostrar nuevo input con los datos
        },
        actualizarproductos(item){
            let datoupdate = {"nombre":this.itemdata.nombrebase,
                        "plataforma":this.itemdata.plataformabase,
                        "genero":this.itemdata.generobase,
                        "precio":this.itemdata.preciobase,
                        "imagen":this.itemdata.imagenbase,
                        "estado":this.itemdata.estadobase};
            this.nuevoupdate(datoupdate); //Envia los datos editados como objeto al store 
            this.setActualizarProductos(item); // envia los datos editados a la BD usando el index
            console.log('Producto actualizado: ',this.updatedata);
            this.alerta3 = true; //Mostrar el alerta del cambio
            
        },
        cambiarinput(){
            let nuevodatoupdate = {nombrebase: '', plataformabase: '', generobase: '', preciobase: '', imagenbase: '', estadobase: ''}
            this.dataitem(nuevodatoupdate);
            this.updatemostrar(this.inputmostrar); //quitar el input con los datos
        }
    },

}
</script>

<style>
thead tr th { 
    position: sticky;
    top: 0;
    z-index: 1;
}
.table-responsive { 
    height:300px;
    overflow-y:scroll;
}

</style>
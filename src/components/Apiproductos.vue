<template>
  <div class="container">
    <div class="row justify-content-center bg-dark pt-3">
        <h2 class="text-center py-3 text-light">Agregar VideoJuegos</h2>
        <div class="col-5">
            <div class="input-group mb-3">
                <span class="input-group-text" >Nombre</span>
                <input v-if="mostrar" v-model="itemdata.nombrebase" type="text" class="form-control" >
                <input v-else v-model="nombre" type="text" class="form-control" placeholder="ingrese Nombre">
                <div class="invalid-feedback">
                    Por favor ingrese un nombre
                </div>
            </div>   
        </div>
        <div class="col-5">
            <div class="input-group mb-3">
                <span class="input-group-text" >Plataforma</span>
                <input v-if="mostrar" v-model="itemdata.plataformabase" type="text" class="form-control">
                <input v-else v-model="plataforma" type="text" class="form-control" placeholder="Ingrese Plataforma">
                <div class="invalid-feedback">
                    Por favor ingrese una plataforma
                </div>
            </div>   
        </div>
    </div>
    <div class="row justify-content-center bg-dark">
        <div class="col-5">
            <div class="input-group mb-3">
                <span class="input-group-text" >Genero</span>
                <input v-if="mostrar" v-model="itemdata.generobase" type="text" class="form-control">
                <input v-else v-model="genero" type="text" class="form-control"  placeholder="Ingrese Género">
                <div class="invalid-feedback">
                    Por favor ingrese un género
                </div>
            </div>
        </div>
        <div class="col-5">
            <div class="input-group mb-3">
                <span class="input-group-text" >Precio</span>
                <input v-if="mostrar" v-model="itemdata.preciobase" type="text" class="form-control">
                <input v-else v-model="precio" type="text" class="form-control" placeholder="Ingrese Precio">
                <div class="invalid-feedback">
                    Por favor ingrese un precio
                </div>
            </div>
        </div>
    </div>
    <div class="row justify-content-center bg-dark">
        <div class="col-5">
            <div class="input-group mb-3">
                <span class="input-group-text" >Imagen</span>
                <input v-if="mostrar" v-model="itemdata.imagenbase" type="text" class="form-control">
                <input v-else v-model="imagen" type="text" class="form-control" placeholder="Ingrese imagen">
            </div>
        </div>
        <div class="col-5">
            <div class="input-group mb-3">
                <span class="input-group-text" >Estado</span>
                <input v-if="mostrar" v-model="itemdata.estadobase" type="text" class="form-control">
                <input v-else v-model="estado" type="text" class="form-control" placeholder="Ingrese Estado">
                <div class="invalid-feedback">
                    Por favor ingrese un estado: en stock o sin stock
                </div>
            </div>
        </div>
    </div>
    <div class="row justify-content-center bg-dark pb-3">
        <!--<div class="col-3 text-center">
            <button class="btn btn-primary" @click="validar()">Validar formulario</button>
        </div>-->
        <div class="col-3 text-center">
            <button @click="agregar();borrar()" class="btn btn-warning">Enviar Producto a BD</button>
        </div>
        <div class="col-3 text-center">
            <button @click="borrar" class="btn btn-danger">Borrar</button>
        </div>
    </div>
    
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
    </svg>
    <div class="row justify-content-center">
        <div class="col-10 showalerta" v-show="alerta">
            <div class="alert alert-success d-flex align-items-center"  role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                    <div class="col-10">
                        Se ha enviado el producto a la Base de Datos
                    </div>
                    <div class="col-2">
                        <button class="btn btn-danger" @click="alerta = false">x</button>
                    </div>  
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    data() {
        return {
            nombre: '',
            plataforma: '',
            genero: '',
            precio: '',
            imagen: '',
            estado: '',
            alerta: false,
            validacion:''
        }
    },
    computed: {
        ...mapState(['producto','productos','mostrar','itemdata'])
    },
    methods: {
        ...mapMutations(['nuevodato','nuevoproducto','obtenerproductos','eliminarprod','nuevoupdate','setActualizarProductos','updatemostrar','dataitem']),

        agregar() {
            //switch (true) {
            //    case this.nombre === '' || this.plataforma === '' || this.genero === '' || this.estado === '' || this.precio === '':
            //        this.validacion = 'is-invalid';
            //        break;
            //    default:
            //        this.validacion = 'is-valid';
            //        let data={nombre:this.nombre, plataforma:this.plataforma, genero:this.genero, precio:this.precio, imagen:this.imagen, estado:this.estado}
            //        this.nuevodato(data);
            //        this.nuevoproducto(); //envia el producto a la BD
            //        this.obtenerproductos(); //trae todos los productos de la base de datos
            //        this.alerta = true;
            //        break;
            //};
            let data={nombre:this.nombre, plataforma:this.plataforma, genero:this.genero, precio:this.precio, imagen:this.imagen, estado:this.estado}
            this.nuevodato(data);
            this.nuevoproducto(); //envia el producto a la BD
            this.obtenerproductos(); //trae todos los productos de la base de datos
            this.alerta = true;
        },
        borrar(){
          this.nombre = '';
          this.plataforma = '';
          this.genero = '';
          this.precio = '';
          this.imagen = '';
          this.estado = '';
          this.itemdata.nombrebase = null;
          this.itemdata.plataformabase = null; 
          this.itemdata.generobase = null;
          this.itemdata.preciobase = null;
          this.itemdata.imagenbase = null;
          this.itemdata.estadobase = null;
          let mostrar = false;
          this.updatemostrar(mostrar);
        },
        validar(){
            switch (true) {
                case this.nombre === '' || this.plataforma === '' || this.genero === '' || this.estado === '' || this.precio === '':
                    this.validacion = 'is-invalid';
                    break;
                default:
                    this.validacion = 'is-valid';
                    break;
            };
            
        }
        
    },

}
</script>

<style>
.showalerta{
    position: fixed;
    z-index: 2;
    /*transition: all 0.8s ease;*/
    animation-name: alertmove;
    animation-duration: 4s;
}
@keyframes alertmove{
    0%  {left:110px; top:0px;}
    /*25%  {left:110px; top:100px;}*/
    50%  {left:110px; top:200px;}
    /*70%  {left:110px; top:300px;}*/
    100%  {left:110px; top:350px;}
}

</style>
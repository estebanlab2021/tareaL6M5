<template>
  <header class="container">
            <div class="row justify-content-center align-content-center bg-primary py-3">
                <div class="col-md-10 col-sm-8 text-center">
                    <h1 class="text-center text-light display-6 fw-bold">{{titulocabezal}}</h1>
                </div>
            </div>
        </header>
</template>

<script>
export default {
    name:'Cabecera',
    data(){
        return{
            titulocabezal: 'Negocio: venta de productos por internet',
        }
    }

}
</script>

<style>

</style>
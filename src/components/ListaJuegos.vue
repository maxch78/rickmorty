<template>
    <section class="container" >
        <br>

        <div class="row text-center">            
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(item,index) in enviarDatosApi" :key="index">
           
                <div class="card">
                
                    <img :src="item.image" class="card-img-top" :alt="item.index">
                        <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">Nombre del personaje: {{item.released}}</p>
                        <button type="button" class="btn btn-primary mr-4" data-toggle="modal" :data-target="'#opinion'+item.id">Opinar</button>
                        <button type="button" class="btn btn-primary mr-4" data-toggle="modal" :data-target="'#detalles'+item.id">Ver más</button>
                    </div>
                </div>
                
               
                <div class="modal fade" :id="'opinion'+item.id" tabindex="-1" aria-labelledby="opinionLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content text-left">
                            <div class="modal-header">
                                <h5 class="modal-title" id="opinionLabel">{{item.name}}</h5>
                            </div>
                            <div class="modal-body">
                                <div>
                                    <p>Tu Usuario:</p>
                                    <input ref="user" type="text" placeholder="Ingresa tu nombre de Usuario" v-model="item.nombre">
                                </div>
                                <div class="mt-2">
                                    <label for="textAreaOpinion">Tu opinión:</label>
                                    <textarea ref="opinionUser" class="form-control" placeholder="Escriba su opinion" id="textAreaOpinion" v-model="item.textoArea"></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close" @click="agregarOpinion(item)">Guardar</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close" @click="cerrarModal(item)"><font-awesome-icon :icon="['far', 'window-close']"/></button>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div class="modal" tabindex="-1" :id="'detalles'+item.id" aria-labelledby="opinionLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{{item.name}}</h5>
                        </div>
                        <div class="modal-body">
                     
                            <div class="card" >
                                <div class="row">
                                    <div class="col-md-5">
                                        <img class="imgDetalle" :src="item.background_image" alt="...">
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                      
                                            <div><strong>ID: {{item.id}}</strong> </div>    
                                          
                                            <label><strong>Genero: </strong> 
                                                <div class="d-inline-block" v-for="(genero, index) in item.genres" :key="index">
                                                    <div><strong>{{genero.name}}/</strong></div>
                                                </div>
                                            </label>
                                          
                                            <label><strong>Plataformas: </strong> 
                                                <div class="d-inline-block" v-for="(plataforma, index) in item.stores" :key="index">
                                                    <div><strong>{{plataforma.store.name}}/</strong></div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close" @click="agregandoFavoritos(item)"><font-awesome-icon icon="plus"/> Favoritos</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close"><font-awesome-icon :icon="['far', 'window-close']"/></button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

          
        



    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
    name: 'ListaJuegos',
    data() {
        return {
            nombre: '',
            textoArea: '',
        }
    },
    computed: {
        ...mapGetters(['enviarDatosApi'])
    },
    methods: {
        ...mapActions(['agregandoFavoritos']),
        agregarOpinion(item){
            if (item.nombre !== null && item.textoArea !== null) {
                let opinion = {
                    id: item.id,
                    nombre: this.nombre,
                    textoArea: this.textoArea,
                    nombreGame: item.name
                }
                this.$store.dispatch('agregarOpinion', opinion);
                this.$router.push({name: 'Opiniones'});

                this.nombre =''
                this.textoArea =''
            } else {
                console.log("incorrecto")
            }
        },
    
        cerrarModal(item){
            item.nombre =''
            item.textoArea =''
        }
    },
}
</script>

<style scoped>
    img  {
        height: auto;
        width: auto;
    }

    .imgDetalle{
        height: auto;
        width: 300px;
    }

</style>
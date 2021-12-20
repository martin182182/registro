<template>
  <div>
    <h3 class="head">Nombre</h3>
    <input v-model="person.name" type="text" id="name" required><br>
    <h3 class="head">E-mail</h3>
    <input v-model="person.email" type="text" id="email" required><br>
    <h3 class="head">Edad</h3>
    <input v-model="person.age" type="text" id="age" required><br>
    <br>
    <input id= "btn" type="button" v-on:click = "save()" value="Guardar">
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Crear',
  data(){
    return {
      url: 'http://localhost:8080/api/save',
      person:{
        name: "",
        email: "",
        age: 0
      }
    }
  },
  methods:{
    save(){

      this.person.name = document.getElementById("name").value;
      this.person.email = document.getElementById("email").value;
      this.person.age = parseInt(document.getElementById("age").value);

      axios.post(this.url,this.person).then(res=>{
        this.person = res.data;
        alert("Usuario "+this.person.name+" creado exitosamente.");
      }).catch(e=>{
        console.log(e);
      });
    }
  }
}


</script>

<style>
  .head{
    color: #42b983;
  }
  #btn{
    width: 100px;
    height: 30px;
    background: #42b983;
    color: white;
  }
</style>

<template>
    <div>
        <h2><b>Lista de Personas</b></h2><br><br>
        <table border="2" style="margin: 0 auto;">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>E-mail</th>
                    <th>Edad</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(person,index) in people"  :key="index">
                    <td>{{person.id}}</td>
                    <td>{{person.name}}</td>
                    <td>{{person.email}}</td>
                    <td>{{person.age}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            people: []
        }
    },
    mounted(){
        this.listPeople();
    },
    methods:{
        listPeople(){
            const url = "http://localhost:8080/api/list";
            axios.get(url).then(res=>{
                this.people = res.data;
            }).catch(e=>console.log(e));
        }
    }
}
</script>

<style>
  h2{
   color: #42b983; 
  }
  th{
    color: #42b983;
  }
</style>


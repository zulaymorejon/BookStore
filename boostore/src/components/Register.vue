<template>
<!--$even captura el evento que se realice dentro de esta pantalla-->
  <auth-form action="register" v-on:process="register($event)"/>
</template>

<script>
import AuthForm from '@/forms/Auth';
//llamo a mi constante de bd
import {db} from '@/main';
export default {
  name:"register",
  components:{
        AuthForm
    },
  methods:{
        register(user){
            console.log(user);
            this.$store.dispatch('firebaseRegister',user).then((userRegisted)=>{
                const data={
                    uid:userRegisted.uid,
                    email:user.email,
                    role:"customer"
                };
                db.collection('users').doc(userRegisted.uid).set(data).then(()=>{
                    this.$store.commit('setRole',data.role);
                    this.$router.push('/');
                });
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
}
</script>

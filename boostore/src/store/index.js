import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import authModule from '@/modules/auth';

//export estoy haciendo un return
export default new Vuex.Store({
    //variables globales o de estado
    state:{
        processing:false,
        loaded:false,
        //una alerta siempre se compone de 3 atributos
        alert:{
            type:'success',
            show:false,
            message:''
        }
    },
    //mutaciones son los efectos o estado que se aplicaran a las variables globales de estado
    //las alertas tienen sus propias mutaciones
    mutations:{
        //siempre llevan el prefijo set
        setLoaded:(state,loaded)=>{
            state.loaded=loaded;
        },
        setAlertMessage:(state,data)=>{
            state.alert.type=data.type;
            state.alert.show=data.show;
            state.alert.message=data.message;
            setTimeout(()=>{
                state.alert.type='sucess';
                state.alert.show=false;
                state.alert.message='';
            },data.timeout);
        }
    },
    //modulos que utilizara el proyecto
    modules:{
        authModule
    }
});
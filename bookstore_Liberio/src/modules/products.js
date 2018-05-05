//crear una clase d programacion
import firebase from 'firebase';
//se importa faker para generar los auto sequence
import * as faker from 'faker';

//defino la clase de programacion
export default{
    state:{
        admin:{
            products:{
                //dialog es la modal x lo general se encuentra en falso
                dialog:false,
                editMode:false,
                product:{
                    id: null,
                    name: '',
                    price: '',
                    file_id: '',
                    url: ''
                }
            }
        }
    },
    actions:{
        removeFile({commit},product){
            return firebase.storage().ref().child(`products/${product.file_id}`).delete();
        },
        updateDeleteProduct({commit},id){
            //let en javascript es una constante
            let product = firebase.firestore().collection(`products`).doc(id);
            if(product){
                return product.update({
                    url:'',
                    file_id:''
                });
            }
        },
        pushFileToStorage({commit},{fileToUpLoad,id}){
            //saco una referencia de guardado
            const storageRef = firebase.storage().ref();
            //saco un random de 16 caracteres
            const fileId = faker.random.alphanumeric(16);
            //aqui digo que haga un hilo de programacion para guardar la tarea
            const uploadTask = storageRef.child(`/products/${fileId}`).put(fileToUpLoad);
            //guardo el hilo
            uploadTask.on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot)=>{
                    const snap = firebase.storage.uploadTaskSnapshot;
                },
                (error)=>{
                    console.log(error);
                },
                //cuando termina la tarea
                ()=>{
                    fileToUpLoad.url = uploadTask.snapshot.downloadURL;
                    let product = firebase.firestore().collection(`products`).doc(id);
                    if(product){
                        return product.update({
                            url: fileToUpLoad.url,
                            file_id: fileId
                        });
                    }
                }
            )
        }
    },
    //getters retorna el comportamiento del state
    getters:{
        productsDialog:(state)=>{
            return state.admin.products.dialog;
        },
        productForEdit:(state)=>{
            return state.admin.products.product;
        },
        productDialogEditMode:(state)=>{
            return state.admin.products.editMode;
        }
    },
    //una mutacion es un cambio sobre el state
    mutations:{
        toggleProductsDialog:(state,data)=>{
            state.admin.products.dialog = !state.admin.products.dialog;
            state.admin.products.editMode = data.editMode;
            state.admin.products.product = data.product;
        }
    }
}
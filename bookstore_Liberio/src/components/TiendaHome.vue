<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card v-for="(product,idx) in products">
        <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>                                                     
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {db} from '@/main';
export default {
  name:"shop",
  data(){
      return{
          products:[]
      }
  },
  mounted(){
      db.collection('products').orderBy('createdAt').onSnapshot(snapshot=>{
          this.products = [];
          snapshot.forEach(snapProduct=>{
              const product = snapProduct.data();
              this.products.push({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  url: product.url || '',
                  file_id: product.file_id || '' 
              });
          });
          this.loading = false;
      }, (error)=>{
          console.log('firebase not connect');
      })
  }
}
</script>

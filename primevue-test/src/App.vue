<template>
  <div>

    <form @submit.prevent="sendWord">
      <InputText type="text" v-model="text"/>
      <Botao-temp class="p-ml-3" type="submit" label="Submit"/>
      <RichTextEditor v-model="value" editorStyle="height: 320px" />
    </form>

  <DropdownTemp v-model="selectedCity" :options="listUsers" optionLabel="name" placeholder="Select a Country" class="w-full md:w-14rem">
    <template #value="slotProps">
                <div v-if="slotProps.value" class="flex align-items-center">
                    <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                    <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
  </DropdownTemp>
  



  <div v-for="post in listUsers" :key="post.id">
    <h2>{{ post.username }}</h2>
  </div>

  </div>
  </template>


<script>

import axios from "axios";
//import { ProductService } from '@/service/ProductService';


  export default {
  name: "App",
  data() {
    return {
      listUsers: [],
      selectedCity: "",
      text: null,
      value: null
    };
  },
  methods: {
    sendWord() {
      console.log(this.value)
      this.getDefinition(this.value)
      //this.$toast.add({severity: 'info', summary: 'Hello' + this.text})
    }, 
    getDefinition(word) {
      this.data = null
      axios.post('https://webhook.site/f5b3da0b-ce83-46f5-a79d-372895f51a5c',
        { "value": word},{
        headers: {
          'x-rapidapi-key': "ola mundo Header",
          'x-rapidapi-host': "outro header",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Expose-Headers': '*',
          'Content-Type' : 'application/json'
        }
      }
      )
    }
  },
  mounted() {
    //ProductService.getProductsMini().then((data) => (products.value = data));
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.listUsers = response.data
        //console.log (this.listUsers)
      }

      )
  },
  
  created() {
    
  }
};
</script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  
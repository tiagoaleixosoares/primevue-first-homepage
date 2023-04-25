<template>
  <div>
  <InputText />
  <Botao-temp label="pi pi-check Ola"/>
  <RichTextEditor v-model="value" editorStyle="height: 320px" />
  
  <DropdownTemp v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
  
  </div>
  </template>
  
  <script>
  
  export default {
  }
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
  
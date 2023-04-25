<template>
  <div>
  <InputText />
  <Botao-temp label="pi pi-check Ola"/>
  <RichTextEditor v-model="value" editorStyle="height: 320px" />
  
  <DropdownTemp v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" @change="onChangeCountry">
    <option value="">Select a Country</option>
        <option
          v-for="(country, index) in listCountry"
          :value="country.country_name"
          :key="index"
        >
          {{ country.country_name }}
        </option>
  </DropdownTemp>
  
  </div>
  </template>
  
  <script>
  
  export default {
  name: "App",
  data() {
    return {
      listCountry: [],
      listState: [],
      listCities: [],
      selectedCountry: "",
      selectedState: "",
      selectedCity: "",
      authToken: "",
    };
  },
  created() {
    this.generateAccessToken();
  },
  methods: {
    generateAccessToken() {
      axios
        .get("https://www.universal-tutorial.com/api/getaccesstoken", {
          headers: {
            Accept: "application/json",
            "api-token":
              "jAJuES2nNREYu0qOJ9Sy6bydr_LPxmjv0jUAR-oEuXozRP_CjqPqRgp1mCPaNh8VPZo",
            "user-email": "itjebasuthan@gmail.com",
          },
        })
        .then((res) => {
          this.authToken = res.data.auth_token;
          this.loadCountry();
        });
    },
    loadCountry() {
      axios
        .get("https://www.universal-tutorial.com/api/countries", {
          headers: {
            Authorization: `Bearer ${this.authToken}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          this.listCountry = res.data;
        });
    },
    onChangeCountry() {
      axios
        .get(
          `https://www.universal-tutorial.com/api/states/${this.selectedCountry}`,
          {
            headers: {
              Authorization: `Bearer ${this.authToken}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          this.listState = res.data;
        });
    },
    onChangeState() {
      axios
        .get(
          `https://www.universal-tutorial.com/api/cities/${this.selectedState}`,
          {
            headers: {
              Authorization: `Bearer ${this.authToken}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          this.listCities = res.data;
        });
    },
  },
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
  
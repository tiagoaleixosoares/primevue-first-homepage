import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Editor from 'primevue/editor';
import Dropdown from 'primevue/dropdown';

const app = createApp(App);
app.use(PrimeVue);

app.component('InputText',InputText);
app.component('Botao-temp',Button);
app.component('RichTextEditor',Editor);
app.component('DropdownTemp',Dropdown);

app.mount('#app');

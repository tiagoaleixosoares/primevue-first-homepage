import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Editor from 'primevue/editor';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional

const app = createApp(App);
app.use(PrimeVue);

app.component('InputText',InputText);
app.component('Botao-temp',Button);
app.component('RichTextEditor',Editor);
app.component('DropdownTemp',Dropdown);
app.component('DataTable',DataTable);
app.component('ColumnName',Column);
app.component('ColumnGroup',ColumnGroup);
app.component('RowName',Row);



app.mount('#app');

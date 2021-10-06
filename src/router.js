import { createRouter, createWebHistory } from 'vue-router'
import Cadastro from './views/Cadastro.vue';
import Consulta from './views/Consulta.vue';


const routes = [
    {
    path: '/',
    name: 'home',
    component: Cadastro
},
{
    path: '/Consulta',
    name: 'consulta',
    component: Consulta
}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

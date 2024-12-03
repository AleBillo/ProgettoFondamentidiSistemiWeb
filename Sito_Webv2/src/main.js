import Index from './pagine/index.js';
import Argomento from './pagine/argomento.js';
import EsempioJSON from './pagine/esjson.js';
import TabellaCRUD from './pagine/tabella.js';

window.onload = function () {

    const routes = [
        { path: '/', component: Index },
        { path: '/argomento', component: Argomento },
        { path: '/json', component: EsempioJSON },
        { path: '/crud', component: TabellaCRUD }
    ];

    const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes
    });

    const app = Vue.createApp();

    app.use(router);
    app.mount('#app');
};
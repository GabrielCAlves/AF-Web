import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Error404 from '../views/Error404.vue';
import Login from '../views/login.vue';
import DetalhesLivro from '../views/DetalhesLivro.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "*",
            name: "notFound",
            component: Error404,
            meta: { requiresAdmin: false },
        },
        {
            path: "/",
            name: "index",
            component: Home,
            meta: { requiresAdmin: false },
        },
        {
            path: "/error404",
            name: "error404",
            component: Error404,
            meta: { requiresAdmin: false },
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: { requiresAdmin: false },
        },
        {
            path: "/detalheslivro",
            name: "detalhesLivro",
            component: DetalhesLivro,
            meta: { requiresAdmin: false },
        },
    ],
});

export default router;
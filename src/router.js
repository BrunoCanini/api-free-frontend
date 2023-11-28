import { createRouter, createWebHistory } from "vue-router";

import CreateApp from "./CreateApp.vue";
import Home from "./Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: Home },
        { path: "/create-post", name: "create-post", component: CreateApp },
    ],
});

export { router };
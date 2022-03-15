import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Map from "../views/Map.vue"
import Mapping from "../views/Mapping.vue"
import Plot from "../views/Plot.vue"
import Density from "../views/Density.vue"
import Howto from "../views/Howto.vue"
import Team from "../views/Team.vue"
import Config from "../views/Config.vue"
import Manager from "../views/Manager.vue"
import Geolocate from "../views/Geolocate.vue"
import FriendAdder from "../views/FriendAdder.vue"
import FriendList from "../views/FriendList.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/addfriend',
        component: FriendAdder,
    },
    {
        path: '/friendlist',
        component: FriendList,
    },
    {
        path: '/team',
        component: Team,
    },
    {
        path: '/geolocate',
        component: Geolocate,
    },
    {
        path: '/config',
        component: Config,
    },
    {
        path: '/map',
        component: Map,
    },
    {
        path: '/mapping',
        component: Mapping,
    },
    {
        path: '/plot',
        component: Plot,
    },
    {
        path: '/density',
        component: Density,
    },
    {
        path: '/howto',
        component: Howto,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/manager',
        component: Manager,
    }
]

// https://vitejs.dev/guide/env-and-mode.html
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router

import About from '../components/pages/About';
import AdminFeature from '../components/pages/AdminFeature';
import Home from '../components/pages/Home';
import VipFeature from '../components/pages/VIPFeature';

const components = {
    home: {
        component:Home,
        url: '/'
    },
    about: {
        component:About,
        url: '/about'
    },
    vipFeature: {
        component:VipFeature,
        url: '/vip',
    },
    adminFeature: {
        component: AdminFeature,
        url: '/admin'
    }
}

const configObject = {
    guest: {
        allowRoute: [
            components.home,
            components.about,
        ],
        redirect:'/'
    },
    user: {
        allowRoute: [
            components.home,
            components.about,
            components.vipFeature,
        ],
        redirect: '/'
    },
    admin: {
        allowRoute:[...Object.values(components)],
        redirect: '/admin'
    }
}

export default configObject
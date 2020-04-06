import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../components/Header.vue'
import BBS from '../views/BBS.vue'
import DataAnalysis from '../views/DataAnalysis.vue'
import Knowledge from '../views/Knowledge.vue'
import Login from '../views/Login.vue'
import Review from '../views/Review.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default:Home,
        'header':Header
      }
    },{
      path: '/bbs',
      name: 'bbs',
      components:{
        default:BBS,
        'header':Header
      }
    },{
      path: '/dataanalysis',
      name: 'dataanalysis',
      components:{
        default:DataAnalysis,
        'header':Header
      }
    },{
      path: '/knowledge',
      name: 'knowledge',
      components:{
        default:Knowledge,
        'header':Header
      }
    },{
      path: '/login',
      name: 'login',
      components:{
        default:Login,
        'header':Header
      }
    },{
      path: '/review',
      name: 'review',
      components:{
        default:Review,
        'header':Header
      }
    }
  ]
})

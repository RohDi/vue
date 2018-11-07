import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '@/components/contents/Main.vue';
import Sub from '@/components/contents/Sub.vue';
import Intro from '@/components/contents/SubIntro.vue';
import Unfair from '@/components/contents/SubUnfair.vue';
import UnfairIndex from '@/components/contents/SubUnfairIndex.vue';
import UnfairReport from '@/components/contents/SubUnfairReport.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path:'/sub', 
      component: Sub,
      children: [
        {
          path: 'introduce/index', 
          component: Intro
        },
        {
          path: 'unfairness',
          component: Unfair,
          children: [
            { 
              path:'index', 
              component: UnfairIndex 
            },
            { 
              path:'report', 
              component: UnfairReport 
            }
          ]
        }
      ]
    }
  ]
})

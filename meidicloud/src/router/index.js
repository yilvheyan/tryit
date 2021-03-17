import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import index from '@/view/index'
import zhishi from '@/view/zhishi'
import rent from '@/view/rent'
import anpai from '@/view/wordanpai'
import zsxiangqing from '@/view/zsxiangqingvue'
//import xiangqing from '@/viws/xiangqing'
//import zsxiangqing from '@/viws/zsxiangqingvue'

import meidiindex from '@/view/meidiindex'
import introduce from '@/view/introduce'
import companyInfo from '@/view/companyInfo'   //公司介绍
import joinmdc from '@/view/joinmdc'
import batten from '@/components/batten'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/one',
      name: 'index',
      component: index,
    },
    {
      path: '/two',
      name: 'companyInfo',
      component: companyInfo,
    },
    {
      path: '/three',
      name: 'rent',
      component: rent,
    },
    {
      path: '/four',
      name: 'rent',
      component: rent,
    },
    {
      path: '/five',
      name: 'joinmdc',
      component: joinmdc
    },
    {
      path: '/meidiindex',
      name: 'meidiindex',
      component: meidiindex
    },
    
    {
      path: '/joinmdc',
      name: 'joinmdc',
      component: joinmdc
    },{
      path: '/zsxiangqing/:id',
      name: 'zsxiangqing',
      component: zsxiangqing
    }
  ]
})

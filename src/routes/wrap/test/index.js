import defaultLayout from '@/layouts/eleLayout'

export default {
  path: '/',
  component: defaultLayout,
  children: [
    {
      path: '',
      component: () => import(/* webpackChunkName: "pages" */ './home.vue'),
      meta: { 
        pageTitle: '测试',
        icon: 'pie-chart'
      }
    }
  ]
}

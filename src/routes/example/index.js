import defaultLayout from '@/layouts/eleLayout'

export default {
  path: '/example',
  component: defaultLayout,
  children: [
    {
      path: '',
      component: () => import(/* webpackChunkName: "pages" */ './home.vue'),
      meta: { 
        pageTitle: '例子',
        icon: 'pie-chart'
      }
    }
  ]
}

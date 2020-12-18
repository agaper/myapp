import defaultLayout from '@/layouts/eleLayout'

export default {
  path: '/dnd',
  component: defaultLayout,
  children: [
    {
      path: '',
      component: () => import(/* webpackChunkName: "pages" */ './home.vue'),
      meta: { 
        pageTitle: '拖拽',
        icon: 'pie-chart'
      }
    }
  ]
}

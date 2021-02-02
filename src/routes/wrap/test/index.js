import defaultLayout from '@/layouts/eleLayout'

export default {
  path: '/',
  component: defaultLayout,
  children: [
    {
      path: '',
      component: () => import(/* webpackChunkName: "pages" */ './home.vue'),
      meta: { 
        pageTitle: '常见页面元素的例子',
      }
    },
    {
      path: 'byte',
      component: () => import(/* webpackChunkName: "pages" */ './byte_stream.vue'),
      meta: { 
        pageTitle: 'JS中的二进制家族',
      }
    },
    {
      path: 'rxjs',
      component: () => import(/* webpackChunkName: "pages" */ './rxjs.vue'),
      meta: { 
        pageTitle: 'RxJs的Demo',
      }
    }
  ]
}

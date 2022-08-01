import serviceAxios from '../request'

/* 获取轮播图 */
export const getBanner = () => {
  return serviceAxios({
    url: '/banner',
    method: 'get'
  })
}

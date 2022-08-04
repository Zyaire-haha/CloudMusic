import serviceAxios from '..'
// 获取首页轮播图数据
export function getBanner () {
  return serviceAxios({
    method: 'get',
    url: '/banner?type=2'
  })
}
// 获取发现好歌单
export function getMusicList () {
  return serviceAxios({
    method: 'get',
    url: '/personalized?limit=10'
  })
}

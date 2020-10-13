export default [
  {
    name: '项目一测试接口',
    expend: true,
    children: [
      { name: '用户登陆', type: 'post', url: 'user.wapLogin' },
      { name: '获取用户状态', type: 'get', url: 'user.tets' }
    ]
  }
]

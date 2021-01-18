module.exports = {
  '/bar/': [
    ['', '介绍'],
    {
      title: 'Bar',
      children: [
        'markdown',
        'demo1.md',
        'demo2.md',
        'demo3.md',
        'demo4.md',
        'demo5.md',
        'one',
        'two'
      ]
    }
  ],
  '/foo/api/': [
    ['', '介绍'],
    {
      title: 'Bar',
      collapsable: false,
      children: [
        'one',
        'two'
      ]
    }
  ],
  '/foo/more/': [
    ['', '介绍'],
    {
      title: 'Bar',
      collapsable: false,
      children: [
        'one',
        'two'
      ]
    }
  ],
}

module.exports = {
  '/bar/': [
    ['', '介绍'],
    {
      title: 'Bar',
      children: [
        'markdown',
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

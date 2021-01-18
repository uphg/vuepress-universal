export default {
  name: 'TableOfContents',

  props: {
    includeLevel: {
      type: Array,
      required: false,
      default: () => [2, 3],
    },
  },

  computed: {
    headers () {
      if (this.$page && this.$page.headers) {
        const minLevel = this.includeLevel[0]
        const maxLevel = this.includeLevel[1]

        const processHeaders = (headers, rootLevel = minLevel) => {
          const result = []
          for (let i = 0; i !== headers.length;) {
            const nextRootOffset = headers.slice(i + 1).findIndex(h => h.level === rootLevel)
            const nextRootIndex = nextRootOffset === -1 ? headers.length : nextRootOffset + i + 1
            const thisHeader = headers[i]

            if (thisHeader.level >= rootLevel && thisHeader.level <= maxLevel) {
              const childHeaders = headers.slice(i + 1, nextRootIndex)
              const children = rootLevel < maxLevel && childHeaders.length > 0
                ? processHeaders(childHeaders, rootLevel + 1)
                : null
              result.push({
                ...thisHeader,
                children,
              })
            }
            i = nextRootIndex
          }
          return result
        }
        return processHeaders(this.$page.headers)
      }

      return null
    },
  },

  render (h) {
    if (!this.headers) {
      return null
    }

    const renderHeaders = items => {
      return h('ul',
        {
          attrs: { class: 'synopsis-ul' }
        },
        items.map(item => h('li',
          {
            attrs: { class: 'synopsis-li' }
          },
          [
            h('RouterLink', {
              'class': { 'synopsis-link': true },
              props: { to: `#${item.slug}` },
            }, item.title),
            item.children ? renderHeaders(item.children) : null,
          ]
        ))
      )
    }
    return h('div',
      {
        attrs: { class: 'synopsis-wrap' }
      },
      [renderHeaders(this.headers)]
    )
  },
}

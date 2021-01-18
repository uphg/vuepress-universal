import { Scrollbar } from 'element-ui';
import TableOfContents from './theme/components/toc/components/TableOfContents'
export default ({ Vue, options, router }) => {
  Vue.use(Scrollbar);
  Vue.component('TableOfContents', TableOfContents)
  Vue.component('TOC', TableOfContents)
};
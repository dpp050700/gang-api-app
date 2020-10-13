/* eslint-disable vue/no-mutating-props */
const { defineComponent, reactive } = require('vue')
import MockEditor from './mockEditor'
import './index.less'

const AceEditor = defineComponent({
  props: {
    data: Object
  },
  setup(props) {
    // eslint-disable-next-line no-unused-vars
    const state = reactive({
      data: props.data
    })
    return () => <div class="editor-container" ref="editor"></div>
  },
  mounted() {
    MockEditor({
      container: this.$refs.editor,
      data: this.data,
      onChange: value => {
        console.log(value)
      }
    })
  }
})

export default AceEditor

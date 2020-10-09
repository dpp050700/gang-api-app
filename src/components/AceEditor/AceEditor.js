const { defineComponent } = require('vue')
import MockEditor from './mockEditor'
import './index.less'

const AceEditor = defineComponent({
  setup() {
    return () => <div class="editor-container" ref="editor"></div>
  },
  mounted() {
    MockEditor({
      container: this.$refs.editor
    })
  }
})

export default AceEditor

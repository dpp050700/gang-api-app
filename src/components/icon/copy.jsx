import { defineComponent } from 'vue'
import { CopyOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  props: {
    value: String
  },
  setup(props) {
    console.log(props)
    const copy = () => {
      let transfer = document.createElement('input')
      document.body.appendChild(transfer)
      transfer.value = props.value
      transfer.focus()
      transfer.select()
      if (document.execCommand('copy')) {
        document.execCommand('copy')
      }
      transfer.blur()
      console.log('复制成功')
      document.body.removeChild(transfer)
    }
    return () => <CopyOutlined onClick={copy} />
  }
})

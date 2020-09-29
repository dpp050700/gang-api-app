import { defineComponent, reactive } from 'vue'
import './RequestTypeTag.less'

const requestType = {
  post: { color: 'blue' },
  get: { color: 'green' },
  delete: { color: 'red' },
  put: { color: 'orange' }
}

const RequestTypeTag = defineComponent({
  props: {
    type: String
  },
  setup(props) {
    const state = reactive({
      type: props.type
    })
    return () => (
      <a-tag class="type-tag" color={requestType[state.type].color}>
        {state.type.toUpperCase()}
      </a-tag>
    )
  }
})
export default RequestTypeTag

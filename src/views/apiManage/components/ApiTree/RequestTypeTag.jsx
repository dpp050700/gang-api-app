import { defineComponent } from 'vue'
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
    return () => (
      <a-tag class="type-tag" color={requestType[props.type].color}>
        {props.type.toUpperCase()}
      </a-tag>
    )
  }
})
export default RequestTypeTag

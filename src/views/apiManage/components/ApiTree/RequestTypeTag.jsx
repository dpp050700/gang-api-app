import { defineComponent, reactive } from 'vue'

const requestType = {
  post: { color: 'red' },
  get: '',
  delete: '',
  put: ''
}

const RequestTypeTag = defineComponent({
  props: {
    type: String
  },
  setup(props) {
    const state = reactive({
      type: props.type
    })
    return () => <a-tag color={requestType[state.type].color}>{state.type.toUpperCase()}</a-tag>
  }
})
export default RequestTypeTag

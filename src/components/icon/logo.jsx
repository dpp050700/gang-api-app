import { defineComponent } from 'vue'
import LogoImg from '../../assets/images/logo.png'

const Logo = defineComponent({
  setup() {
    return () => <img src={LogoImg} />
  }
})

export default Logo

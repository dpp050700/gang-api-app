import { defineComponent, reactive } from 'vue'
import './index.less'
import Logo from '../components/icon/logo'
import { BugOutlined, SettingOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

function LogoContainer() {
  return (
    <div class="layout-header_logo">
      <Logo />
      FullStopApi
    </div>
  )
}

const LayoutApp = defineComponent({
  setup() {
    const state = reactive({
      collapsed: true
    })

    const toggle = () => {
      state.collapsed = !state.collapsed
    }

    return () => (
      <a-layout class="layout-container">
        <a-layout-header class="layout-header">
          <LogoContainer collapsed={state.collapsed} />
          {state.collapsed ? <MenuUnfoldOutlined onClick={toggle} /> : <MenuFoldOutlined onClick={toggle} />}
        </a-layout-header>
        <a-layout class="layout-body">
          <a-layout-sider class="layout-sider" collapsed={state.collapsed} trigger={null} collapsible>
            <div class="layout-sider_content">
              <a-menu theme="dark" mode="inline">
                <a-menu-item key="1">
                  <BugOutlined />
                  <span class="nav-text">接口管理</span>
                </a-menu-item>
                <a-menu-item key="2">
                  <SettingOutlined />
                  <span class="nav-text">配置管理</span>
                </a-menu-item>
              </a-menu>
            </div>
            <div class="layout-sider_footer"></div>
          </a-layout-sider>
          <a-layout-content class="layout-content">
            <router-view />
          </a-layout-content>
        </a-layout>
      </a-layout>
    )
  }
})

export default LayoutApp

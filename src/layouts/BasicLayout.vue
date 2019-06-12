<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        v-if="navLayout === 'left'"
        :theme="navTheme"
        collapsible
        v-model="collapsed"
        :trigger="null"
        width="256px"
      >
        <div class="logo">Vue Ant Design</div>
        <SiderMenu :theme="navTheme" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header :class="navTheme === 'dark' ? 'dark' : 'light'">
          <a-icon
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
            class="trigger"
          ></a-icon>
          <Header />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <SettingDrawer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
import SettingDrawer from "./../components/SettingDrawer";
export default {
  name: "BasicLayout",
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  },
  components: {
    Header,
    SiderMenu,
    Footer,
    SettingDrawer
  }
};
</script>
<style scoped>
.trigger {
  padding: 0 24px;
  line-height: 64px;
  font-size: 20px;
  transition: color 0.3s;
  cursor: pointer;
}
.trigger:hover {
  background-color: #eee;
}
.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
.nav-theme-dark >>> .logo {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  vertical-align: middle;
}
.nav-layout-top .ant-layout .light {
  background-color: white;
}
.nav-layout-top .ant-layout .dark {
  background: #001529;
}
.ant-layout-header {
  background-color: white;
}
</style>

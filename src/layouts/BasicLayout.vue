<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider collapsible v-model="collapsed" :trigger="null">
        <div class="logo" />
        <SiderMenu />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
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
</style>

<template>
  <b-container fluid class="h-100 d-flex flex-column">
    <b-row no-gutters>
      <b-col>
        <b-carousel
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://www.ladishb.com/banner/banner01-pc.jpg"
          ></b-carousel-slide>
          <b-carousel-slide img-src="https://www.ladishb.com/banner/banner02-pc.jpg" />
          <b-carousel-slide img-src="https://www.ladishb.com/banner/banner03-pc.jpg" />
          <b-carousel-slide img-src="https://www.ladishb.com/banner/banner04-pc.jpg" />
        </b-carousel>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col class="text-center p-3 my-4 mx-2">
        <h3>主营业务</h3>
        <p>集产品销售、技术服务、软件开发于一身，ladis致力向一流的物联网解决方案提供商而努力</p>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col class="text-center p-3 my-4 mx-2">
        <b-icon-server font-scale="5" class="p-3 border rounded-circle mb-2" variant="info" />
        <h5>软件产品</h5>
        <p style="font-size:.9rem" class="text-black-50">物联网,模块化机房监控监控平台</p>
      </b-col>
      <b-col class="text-center p-3 my-4 mx-2">
        <b-icon-controller font-scale="5" class="p-3 border rounded-circle mb-2" variant="info" />
        <h5>硬件产品</h5>
        <p style="font-size:.9rem" class="text-black-50">提供(4G,wifi,LAN端口)转232,485串口的模块设备,用于设备接入.</p>
      </b-col>
      <b-col class="text-center p-3 my-4 mx-2">
        <b-link to="/solution" class="text-decoration-none">
          <b-icon-tools font-scale="5" class="p-3 border rounded-circle mb-2" variant="info" />
          <h5 class="">解决方案</h5>
          <p style="font-size:.9rem" class="text-black-50">可用于用户接入使用工业232,485协议的机房设备</p>
        </b-link>
      </b-col>
      <b-col class="text-center p-3 my-4 mx-2">
        <b-icon-people-fill font-scale="5" class="p-3 border rounded-circle mb-2" variant="info" />
        <h5>用户案例</h5>
        <p style="font-size:.9rem" class="text-black-50">客户安装案例,场景</p>
      </b-col>
    </b-row>
    <b-row no-gutters class="bg-light">
      <b-col class="d-flex flex-wrap">
        <!-- <b-card v-for="i in 5" :key="i" class=" flex-fill"></b-card> -->
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  head() {
    return {
      title: "ladis透传服务平台"
    };
  }
});
</script>
<style lang="scss" scoped>
a {
  h5 {
    color: black;
  }
}
</style>
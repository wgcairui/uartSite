<template>
  <b-col cols="12">
    <b-row class="py-5 px-4" style="background-color:#333333">
      <b-col md="3" cols="12">
        <h6 class="text-light">公司简介</h6>
        <p style="font-size:.8rem">
          杭州蓝光电子有限公司旗下品牌雷迪司，致力于提供高效节能的电源、制冷、配电等数据中心机房一体化解决方案。
          产品涉及UPS不间断电源、智能配电、PDU、消防、精密空调、机柜、动环监控、一体化机柜、微模块等产品。
          同时提供物联网解决方案，包含数据中心运维云平台、智慧安全用电云平台等。
        </p>
      </b-col>
      <b-col md="3" cols="12" class="d-none d-sm-block">
        <h6 class="text-light">联系信息</h6>
        <p style="font-size:.8rem" class="mb-2">
          <b-icon-house-fill />公司总部：杭州蓝光电子有限公司
        </p>
        <p style="font-size:.8rem" class="mb-2">
          <b-icon-chat />联系电话：0571-88254085 88254086
        </p>
        <p style="font-size:.8rem" class="mb-2">
          <b-icon-geo />地址: 杭州市余杭区华一路1-1号1幢
        </p>
      </b-col>
      <b-col md="3" cols="12" class="d-none d-sm-block">
        <h6 class="text-light">快捷链接</h6>
        <span>
          <b-button variant="outline-secondary m-1" squared size="sm">网站首页</b-button>
          <b-button variant="outline-secondary m-1" squared size="sm">关于我们</b-button>
          <b-button variant="outline-secondary m-1" squared size="sm">成功案例</b-button>
          <b-button variant="outline-secondary m-1" squared size="sm">联系我们</b-button>
          <b-button variant="outline-secondary m-1" squared size="sm">使用场景</b-button>
        </span>
      </b-col>
      <b-col md="3" cols="12" class="d-none d-sm-block">
        <h6 class="text-light">关注公众号</h6>
        <b-img
          fluid
          src="https://www.ladis.com.cn/_CMS_NEWS_IMG_/cms_images/fck/2017-03/05/828dd7c4-53c7-4a42-bb2c-7e1a12a93bcf.jpg"
        ></b-img>
      </b-col>
    </b-row>
    <b-row style="background-color:#222222">
      <b-col cols="12" class="p-0 p-2 d-flex flex-column flex-sm-row flex-wrap footer-link">
        <div>
          <nuxt-link to="/sitemap" class="px-1">{{ $t('footer.9c708c') }}</nuxt-link>

          <nuxt-link to="#" class="px-1">{{ $t('footer.fp5qvs') }}</nuxt-link>

          <nuxt-link to="#" class="px-1">{{ $t('footer.ce1e0h') }}</nuxt-link>

          <nuxt-link to="#" class="px-1">{{ $t('footer.amhzvr') }}</nuxt-link>

          <nuxt-link to="#" class="px-1">{{ $t('footer.5d7lkm') }}</nuxt-link>
        </div>
        <div class="beian">
          <span class="d-flex flex-column flex-sm-row align-items-center">
            <span>
              <small>© 2019 All Rights Reserved</small>
            </span>
            <small>ladis透传服务平台</small>

            <b-link target="_blank" href="http://www.beian.miit.gov.cn">
              <small class="ml-2">鄂ICP备19029626号-1</small>
            </b-link>
          </span>
        </div>
      </b-col>
    </b-row>
    <div class="row foot-nav-pc friendlink" style="display:none;">
      <div class="row friendlylist">
        <div class="col-md-12 left">&nbsp;</div>
        <div class="col-md-12 right">
          <a>友情链接：</a>

          <a href="http://www.oboo.cn/" target="_blank" alt="触摸一体机">触摸一体机</a> &nbsp;&nbsp;
          <a href="https://www.mustups.net/" target="_blank" alt="UPS电源">UPS电源</a> &nbsp;&nbsp;
          <a href="http://www.fany-eda.com/" target="_blank" alt="凡亿pcb">凡亿pcb</a> &nbsp;&nbsp;
          <a href="http://www.smt-dip.com/" target="_blank" alt="贴片加工厂">贴片加工厂</a> &nbsp;&nbsp;
          <a href="http://www.cyzm.net/" target="_blank" alt="太阳能路灯">太阳能路灯</a> &nbsp;&nbsp;
          <a href="http://www.tqsafe.com/" target="_blank" alt="家用保险箱">家用保险箱</a> &nbsp;&nbsp;
          <a href="https://www.sgzm.com" target="_blank" alt="照明工程">照明工程</a> &nbsp;&nbsp;
          <a href="http://www.eeio99.com/" target="_blank" alt="环形变压器 ">环形变压器</a> &nbsp;&nbsp;
          <a href="http://www.sanxu88.com/" target="_blank" alt="碳纤维电地暖">碳纤维电地暖</a> &nbsp;&nbsp;
          <a href="http://www.tuo-li.com/" target="_blank" alt="蓄电池">蓄电池</a> &nbsp;&nbsp;
          <a href="http://www.tengshuodz.com/" target="_blank" alt="有机硅导电胶">有机硅导电胶</a> &nbsp;&nbsp;
          <a href="http://www.gzchupai.com/" target="_blank" alt="触控一体机">触控一体机</a> &nbsp;&nbsp;
          <a href="http://www.3doe.com/" target="_blank" alt="三维扫描仪">三维扫描仪</a> &nbsp;&nbsp;
          <a href="http://www.paileshi.com.cn/" target="_blank" alt="干式变压器">干式变压器</a> &nbsp;&nbsp;
          <a href="http://www.shiweisemi.com/" target="_blank" alt="LED芯片">LED芯片</a> &nbsp;&nbsp;
          <a href="http://www.szlwtech.com/" target="_blank" alt="开关电源ic">开关电源ic</a> &nbsp;&nbsp;
          <a href="http://www.cune.com.cn/ " target="_blank" alt="便携式UPS">便携式UPS</a> &nbsp;&nbsp;
          <a href="http://www.jianqiaochina.com" target="_blank" alt="振动试验台">振动试验台</a> &nbsp;&nbsp;
        </div>
      </div>
    </div>
  </b-col>
</template>
<script lang="ts">
import Vue from "vue";
import FriendLink from "./FriendLink.vue";
export default Vue.extend({
  name: "LadisFooter",
  data() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
@media (min-width: 576px) {
  .colsm-2 {
    flex: 0 0 20%;
    max-width: 20%;
    height: fit-content;
  }
  ul {
    list-style: inside;
    padding-left: 2rem;
  }
  .beian {
    margin-left: auto;
  }
  .beian span {
    margin-left: 0px;
  }
}

.beian span {
  margin-left: 8px;
}

ul {
  list-style: none;
  padding-left: 0;
}

* {
  color: rgba(255, 255, 255, 0.5);
}
.section {
  height: min-content;
  width: 100%;
  background-color: #333;
  padding: 10px 25px;
}
.main {
  width: 100%;
}
.col-20 {
  width: 17%;
  border-right: ridge 1px;
  margin: 5px;
}
a:hover {
  color: white;
}
em,
span,
a,
strong {
  color: aliceblue;
}
strong {
  font-size: 1.2rem;
}
.img-fluid {
  max-width: 50%;
  height: auto;
}
.footer-link {
  a {
    font-size: 0.9rem;
  }
}
</style>

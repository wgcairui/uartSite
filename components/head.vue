<template>
  <b-container>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">
        <b-img src="/logo.jpg" />
        <!-- <img src="" height="40"> -->
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>{{ $t('head.pku7s6') }}</em>
            </template>
            <b-dropdown-item :to="about['销售服务中心']">
              {{ $t('head.azg9np') }}
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item
              href="https://leidisi.tmall.com/"
              target="_blank"
            >
              {{ $t('head.1cufnl') }}
            </b-dropdown-item>
            <b-dropdown-item
              href="https://mall.jd.com/index-131620.html"
              target="_blank"
            >
              {{ $t('head.kj9sli') }}
            </b-dropdown-item>
            <b-dropdown-item
              href="https://lgsm.tmall.com/"
              target="_blank"
            >
              {{ $t('head.4ggyxs') }}
            </b-dropdown-item>
            
          </b-nav-item-dropdown>

          
          <b-nav-item :to="cases['成功案例']">
            {{ $t('head.ekilla') }}
          </b-nav-item>
          
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>{{ $t('head.vix4n3') }}</em>
            </template>
            <b-dropdown-item
              v-for="locale in availableLocales"
              :key="locale.code"
              @click="Setlang(locale.code)"
            >
              {{ locale.name }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { NuxtVueI18n } from 'nuxt-i18n/types/nuxt-i18n'
import {  cases } from './hrefs'
export default Vue.extend({
  name: 'LadisHead',
  data () {
    return {
      cases
    }
  },
  computed: {
    availableLocales () {
      const locales: NuxtVueI18n.Options.LocaleObject[] = this.$i18n
        .locales as any
      return locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    Setlang (lang: string) {
      this.$i18n.setLocaleCookie(lang)
      this.$router.push(this.switchLocalePath(lang))
      this.$router.push('/#')
    }
  }
})
</script>

<style scoped>
em{
  font-style: normal;
}
.nav-h {
  height: 56px;
  z-index: 100;
}
.head-h {
  height: 56px;
}
.navbar-dark .navbar-nav .nav-link,em{
  color:aliceblue;
}
</style>

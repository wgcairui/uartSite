import Vue from 'vue';

import vRegion from "v-region";
import MyKeywords from "../components/admin/MyKeywords.vue"
import MySelectfile from "../components/admin/MySelectfile.vue"
import MySelectfileMulti from "../components/admin/MySelectfileMulti.vue"
import MyCard from "../components/MyCard.vue"
import MyCode from "../components/admin/MyCode.vue"
//import vuePicturePreview from 'vue-picture-preview';
import { IconsPlugin } from "bootstrap-vue";

Vue.component('my-keywords', MyKeywords);
Vue.component('my-selectfile',MySelectfile)
Vue.component('my-selectfile-multi',MySelectfileMulti)
Vue.component('my-card',MyCard)
Vue.component('my-code',MyCode)
//Vue.component('Previewer', vuePicturePreview);
Vue.use(IconsPlugin)

Vue.use(vRegion);

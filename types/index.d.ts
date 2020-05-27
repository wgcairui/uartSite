// 1. 确保在声明补充的类型之前导入 'vue'
import Vue from "vue";

import { CombinedVueInstance } from "vue/types/vue";
import VueRouter,{ Route } from "vue-router";
import {
  DollarApollo,
  ApolloClientMethods
} from "vue-apollo/types/vue-apollo";
import { VueApolloComponentOptions } from "vue-apollo/types/options";
import { Auth } from "nuxtjs__auth";
import { BvModal, BvToast } from "bootstrap-vue";

declare module "koa"{
  interface Request{
    body?:any
  }
}
declare module 'tinymce'{
  interface value{
    title:string
    value?:string
    description?:string
    content?:string
    url?:string
    type?:string
  }
  interface Settings{
    draggable_modal?:boolean,
    auto_focus?:boolean
      importcss_append?:boolean
      image_list?:value[]
      link_list?:value[]
      save_onsavecallback?:()=>void
      templates?:value[]
      typeahead_urls?:boolean
      image_prepend_url?:string
      urlconverter_callback?:any
  }
}

// 2. 定制一个文件，设置你想要补充的类型
//    在 types/vue.d.ts 里 Vue 有构造函数类型
declare module "vue/types/vue" {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    $auth: Auth;
    $apollo: DollarApollo<this>;
    
  }
  interface VueConstructor {
    $apollo: DollarApollo<this>;
    $auth: Auth;
    $bvModal: BvModal;
    $bvToast: BvToast;
  }
}
// type DataDef<Data, Props, V> = Data | ((this: Readonly<Props> & V) => Data);
declare module "vue/types/options" {
  interface ComponentOptions<
    V extends Vue,
    Data,
    Methods,
    Computed,
    PropsDef,
    Props
  > {
    apollo?: VueApolloComponentOptions<
      Data extends DataDef<infer D, any, any>
        ? CombinedVueInstance<V, D, Methods, Computed, Props>
        : CombinedVueInstance<V, Data, Methods, Computed, Props>
    >;
  }
  interface ComponentOptions<V extends Vue> {
    auth?: boolean | string;
  }
}

<template>
  <my-card title="请选择的图片必须尺寸一致，宽最低1024，高最低512，推荐尺寸1920*768，4张以上" :load="$apollo.loading">
    <b-form-group label="轮播图片:" label-cols="2" label-align="right">
      <b-form-select v-model="imgs" :options="SourceFile" multiple></b-form-select>
    </b-form-group>
    <b-button variant="success" @click="setCarousel">sumbit</b-button>
  </my-card>
</template>
<script lang="ts">
import Vue from "vue";
import { selectFiles, ApolloMongoResult } from "../../../types/typing";
import gql from "graphql-tag";
export default Vue.extend({
  layout:'login',
  auth:true,
  data() {
    return {
      imgs: []
    };
  },

  computed: {
    SourceFile() {
      const SourceFile: selectFiles[] = this.$store.state.SourceFile;
      const result = SourceFile.filter(
        file => file.filetype === "img"
      ).map(file => Object.assign(file, { text: file.name, value: file.path }));
      console.log({ result, SourceFile });
      return result;
    }
  },

  methods: {
    async setCarousel() {
      const result = await this.$apollo.mutate({
        mutation: gql`
          mutation setCarousel($Path: [String]) {
            setCarousel(Path: $Path) {
              ok
              msg
            }
          }
        `,
        variables: {
          Pth: this.imgs
        }
      });
      const data: ApolloMongoResult = result.data.setCarousel;
      if (data.ok === 1) {
        this.$bvModal.msgBoxOk("已成功替换轮播图", { title: "success" });
      } else {
        this.$bvModal.msgBoxOk("操作失败，请重试", { title: "error" });
      }
    }
  }
});
</script>

<style lang="scss" scoped></style>

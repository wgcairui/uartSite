<template>
  <div>
    <b-form-group :label="title[0]" label-align="right" label-cols="2">
      <b-form-select @change="Cfile" v-model="file" :options="SourceFile"></b-form-select>
    </b-form-group>
    <b-form-group :label="title[1]" label-align="right" label-cols="2">
      <p class="p-2" v-if="title[1]!=='图片预览:'">{{file}}</p>
      <b-img :src="file" height="50" class="imgs" v-else></b-img>
    </b-form-group>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { selectFiles } from "../../types/typing";
export default Vue.extend({
  props: {
    isPic: {
      type: Boolean,
      default: true
    },
    files: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      file: "",
      fileMap: new Set()
    };
  },
  computed: {
    title() {
      if (this.isPic) {
        return ["主题图片:", "图片预览:"];
      } else {
        return ["文件:", "选择文件"];
      }
    },
    SourceFile() {
      const SourceFile: selectFiles[] = this.$store.state.SourceFile;
      const files = this.files as string;
      let hrefs: any[];
      let result;

      if (
        this.fileMap.size > 0 &&
        Array.from(this.fileMap).some((el: any) => el.value === files)
      ) {
        result = Array.from(this.fileMap) as any;
        hrefs = [];
      } else {
        hrefs = files
          ? [
              {
                text: decodeURI(files.split("/").pop() as string),
                value: files
              }
            ]
          : [];
        result = SourceFile.filter(file => {
          if (this.isPic) {
            return file.filetype === "img";
          } else {
            return file.filetype !== "img";
          }
        }).map(file =>
          Object.assign(file, { text: file.name, value: file.path })
        );
        this.fileMap = new Set([...result, ...hrefs]);
        this.file = files;
      }
      // console.log({ result, hrefs, fileMap: this.fileMap });
      return [...result, ...hrefs];
    }
  },
  methods: {
    Cfile() {
      this.$emit("update:files", this.file);
    }
  }
});
</script>
<style lang="scss" scoped>
.imgs {
  height: 250px;
  width: auto;
}
</style>
<template>
  <div>
    <vuewangeditor id="editor" style="height:300" v-model="content" ref="editor" />
    <el-button type="primary" @click="getContent">获取</el-button>
    <el-button type="success" @click="setContent">设置</el-button>
  </div>
</template>
<script>
 
import vuewangeditor from "vue-wangeditor"; //1.导入
export default {
  components: {
    vuewangeditor, //2.注册
  },
  data() {
    return {
      content: `
<div>
<h1>商品介绍</h1>
</div>`,
    };
  },
  methods: {
    getContent() {
      //获取富文本编辑器内容
      const a = this.$refs.editor.getHtml();
      console.log(a);
    },
    setContent() {
      const content = `<img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"/>`;
      this.$refs.editor.setHtml(content);
    },
  },
};
</script>

<style>
</style>
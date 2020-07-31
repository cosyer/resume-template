<template lang="pug">
section.s-right
  .s-item(v-for="item in sectionRight")
    h3 {{ item.title }}
    .si-p(
      :class="(para.blod ? 'need-blod ' : '') + (para.showDot ? 'have-dot' : '')",
      v-for="para in item.content"
    )
      span.sip-dot(v-if="para.showDot") ·
      span.sip-right(v-if="para.right", v-html="para.right")
      span.sip-left(v-html="para.left")
</template>

<script>
/**
 *@des 右内容区
 *@author cosyer 535509852@qq.com
 *@blog https://mydearest.cn
 *@date 2018/10/9 上午9:28
 */
import config from "../config.js";

export default {
  data: () => config,
};
</script>

<style lang="stylus">
@import '../config.styl';
@import '../styles/public/section.styl';

.s-right {
  float: right;
  margin-top: 30px;
  width: 50%;
  height: 1130px;
  box-sizing: border-box;
  padding: 0 40px 0 20px;
}

.one-section {
  width: 100%;
  padding: 0 40px;
}

// @media print
// .s-right
// padding-top 5px
@media screen and (max-width: 1024px) {
  .s-right {
    size: 100% auto;
    float: none;
    clear: both;
    padding: 0 20px;
  }
}
</style>

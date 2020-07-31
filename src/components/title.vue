<template lang="pug">
#title
  span.pi-left(v-html="left")
  span.pi-right(v-html="right")
</template>

<script>
/**
 *@des 标题区
 *@author cosyer 535509852@qq.com
 *@blog https://mydearest.cn
 *@date 2018/10/9 上午9:28
 */
import config from "../config.js";

export default {
  data: () => {
    let data = config.title;

    // config.title.left = config.title.left.replace(/\ /g, '&nbsp')
    // config.title.right = config.title.right.replace(/\ /g, '&nbsp')

    return data;
  },
};
</script>

<style scoped lang="stylus">
@import '../config.styl';

#title {
  position: absolute;
  size: 100vw auto;
  max-width: 1024px;
  overflow: hidden;
  font-size: 14px;
  line-height: 2em;
  box-sizing: border-box;
  padding: 0 10px;
  top: -35px;
  color: #C0C0C0;

  span.pi-right {
    float: right;
  }
}

@media print {
  #title {
    padding: 0 30px;
  }
}

@media screen and (max-width: 1024px) {
  #title {
    display: none;
  }
}
</style>

<template>
  <div id="app">
    <div class="title">
      <a href="/">
        <img alt="logo" src="//iconpark.bytedance.com/static/media/logo_with_name.a33e5114.svg" width="300">
      </a>
      <h1>Vue2 icon Demos</h1>
    </div>
    <ul class="link">
      <li><a href="//iconpark.bytedance.com/">网站访问</a></li>
      <li><a href="https://github.com/bytedance/IconPark">GitHub查看</a></li>
      <li><a href="//npmjs.com/package/@icon-park/vue">NPM包下载</a></li>
    </ul>
    <section>
      <div>
        <h3>1. 按需引用 </h3>
        <pre>import {Home, Camera, CheckOne, Like} from '@icon-park/vue'</pre>
        <pre>
&lt;home theme="multi-color" size="42" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']" /&gt;
&lt;camera theme="multi-color" size="42" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']" /&gt;
&lt;check-one theme="filled" size="42" fill="#7edb1f" /&gt;
&lt;like theme="filled" size="42" fill="#d00226" /&gt;</pre>
        <p>
          <home theme="multi-color" size="42" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']" />
          <camera theme="multi-color" size="42" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']" />
          <check-one theme="filled" size="42" fill="#7edb1f" />
          <like theme="filled" size="42" fill="#d00226" />
        </p>
        <p />
      </div>
      <div>
        <h3>2. 引用全部图标，循环渲染配置</h3>
        <pre>import {IconPark} from '@icon-park/vue/es/all'</pre>
        <pre>&lt;icon-park v-for="name in icons" :type="name" :key="name" theme="multi-color" size="42" /&gt;</pre>
        <p>
          <icon-park v-for="name in icons" :type="name" :key="name" theme="multi-color" size="42" />
        </p>
      </div>
      <div>
        <h3>3. 自定义图标前缀，全局安装</h3>
        <pre>import {install} from '@icon-park/vue/es/all'</pre>
        <pre>install(Vue, 'i') // 图标库增加自定义前缀'i'</pre>
        <pre>
&lt;i-home theme="multi-color" size="42" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']" /&gt;
&lt;i-camera theme="multi-color" size="42" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']" /&gt;
&lt;i-check-one theme="filled" size="42" fill="#7edb1f" /&gt;
&lt;i-like theme="filled" size="42" fill="#d00226" /&gt;</pre>
        <p>
          <i-home theme="multi-color" size="42" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']" />
          <i-camera theme="multi-color" size="42" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']" />
          <i-check-one theme="filled" size="42" fill="#7edb1f" />
          <i-like theme="filled" size="42" fill="#d00226" />
        </p>
        <p />
      </div>
    </section>
  </div>
</template>
<script>
import {Home, Camera, CheckOne, Like} from '@icon-park/vue'
import {IconPark} from '@icon-park/vue/es/all'

export default {
  name: 'App',
  components: {Home, Camera, IconPark, CheckOne, Like},
  data () {
    return {
      icons: ['Home', 'Mail', 'Ad']
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2C3E50;
    margin: 20px 60px;
  }
  pre {
    background: #f3f3f3;
    padding: 20px;
  }
  .link {
    margin:0;
    padding:0;
  }
  .link li{
    display: inline-block;
    margin-right: 20px;
  }
  .link li a {
    color: #1572EC;
  }
</style>

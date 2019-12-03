# demovue

> vue-cli+vue-router+vuex
> 组件跳转采用<component :is="组件名" ></component>
> 组件名在vuex中的state中定义一个cname公共属性，在mutations中定义改变cname的方法
> 在别的组件中用this.$store.state.cname获取
> 在别的组件采用this.$store.commit('vuex中mutations中的方法名')

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

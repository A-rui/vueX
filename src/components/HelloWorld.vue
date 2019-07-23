<template>
  <div class="hello">
    <!-- <h1>{{ msg }}{{$store.state.count}}</h1> -->
    <!-- <h1>{{$store.state.count}}</h1> -->
    <h2>{{count}}</h2>
    <h2>{{userInfoCount}}</h2>
    <!-- <h2>{{count}}</h2>
    <h1>${{doneTodos}}</h1>
    <h2>{{$store.getters.countstatus}}</h2>
    <h2>{{a.name}}</h2>
    <h2>{{b}}</h2> -->
    <h2 @click="add(1,{style: 3})">Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    add () {
      // this.setUserCount(3)
      // this.$store.commit('increment')
      // this.$store.commit('subtract', {style: 3})
      // this.$store.dispatch('increment', {style: 3})
      // this.subtract({style: 3})
      // console.log(this.$store.dispatch('actionB'))

      // 抓了a,b,c,d4名犯罪嫌疑人.其中有一名是小偷，审讯中：
      //   a说我不是小偷
      //   b说c是小偷
      //   c说小偷肯定是d
      //   d说c胡说！
      // 其中有3个人说的是实话，一个人说的是假话，编程推断谁是小偷
      // let s = ['a', 'b', 'c', 'd']
      // for (let i = 0; i < 4; i++) {
      //   let index = 0
      //   if (i !== 0) {
      //     index += 1
      //   }
      //   if (i === 2) {
      //     index += 1
      //   }
      //   if (i === 3) {
      //     index += 1
      //   }
      //   if (i !== 3) {
      //     index += 1
      //   }
      //   if (index === 3) {
      //     console.log(s[i])
      //   }
      // }
    },
    // ...mapMutations([ 'subtract' ])
    ...mapActions([ 'setUserCount' ])
  },
  computed: {
    ...mapState([ 'count' ]),
    ...mapGetters([ 'userInfoCount' ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

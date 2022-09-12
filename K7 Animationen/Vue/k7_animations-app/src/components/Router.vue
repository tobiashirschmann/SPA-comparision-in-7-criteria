<template>
    <h1>{{store.count}} Artikel im Warenkorb</h1>
      <nav>
        <div>
          <ul>
            <li><a href="#/orders"> Meine Bestellungen </a></li>
            <li><a href="#/account"> Mein Konto </a></li>
            <li><a href="#/recommendations"> Empfehlungen </a></li>
          </ul>
        </div>
      </nav>
            <transition name="slide" mode="out-in">
              <component :is="currentView" />
           </transition>
</template>








<script>
import Orders from './Orders.vue'
import Account from './Account.vue'
import Recommendations from './Recommendations.vue'
import { store } from './store.js'

const routes = {
  '/': Orders,
  '/orders': Orders,
  '/account': Account,
  '/recommendations': Recommendations
}

export default {
  name: 'myRouter',
  data() {
    return {
      currentPath: window.location.hash,
      store
    }
  },
  computed: {
    currentView() {
        return routes[this.currentPath.slice(1) || '/'] 
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
        this.currentPath = window.location.hash
    })
    store.count = 0;
  }
}
</script>

<style lang="css">
  .slide-enter-active,
  .slide-leave-active{transition: opacity 1s;}
  .slide-enter-from,
  .slide-leave-to{opacity:0;}
</style>
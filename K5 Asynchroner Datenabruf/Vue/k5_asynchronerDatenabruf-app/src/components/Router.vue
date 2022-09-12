<template>
      <nav>
        <div>
          <ul>
            <li><a href="#/orders"> Meine Bestellungen </a></li>
            <li><a href="#/account"> Mein Konto </a></li>
            <li><a href="#/recommendations"> Empfehlungen </a></li>
          </ul>
        </div>
      </nav>
  <component :is="currentView" />
</template>








<script>
import Orders from './Orders.vue'
import Account from './Account.vue'
import Recommendations from './Recommendations.vue'

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
      currentPath: window.location.hash
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
  }
}
</script>

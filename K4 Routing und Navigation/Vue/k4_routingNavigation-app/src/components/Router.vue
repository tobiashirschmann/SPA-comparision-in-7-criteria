<template>
      <nav>
        <div>
          <ul>
            <li><a href="#/orders"> Meine Bestellungen </a></li>
            <li><a href="#/account"> Mein Konto </a></li>
          </ul>
        </div>
      </nav>
  <component :is="currentView" />
</template>








<script>
import Orders from './Orders.vue'
import Account from './Account.vue'

const routes = {
  '/': Orders,
  '/orders': Orders,
  '/account': Account
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

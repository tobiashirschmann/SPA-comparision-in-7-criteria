<template>
  <h1>Meine Bestellungen</h1>
  <Order artikel="Schweizer Bergkäse" preis="3.99" menge="5"></Order>
</template>

<script>
import Order from './components/Order.vue'

export default {
  name: 'App',
  components: {
    Order
  }
}
</script>



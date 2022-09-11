<template>
  <h1>Meine Bestellungen</h1>
  <Order artikel="Schweizer Bergkäse" preis="3.99" menge="5"></Order>
  <Order artikel="Frankreicher Brocciu" preis="0" menge="500"></Order>
  <Order artikel="Italienischer Parmesankäse" preis="-2" menge="30"></Order>
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



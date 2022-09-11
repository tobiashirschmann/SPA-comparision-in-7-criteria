<template>
    <p> Artikel: {{artikel}} </p>
    <p> Menge: {{menge}} Stück</p>
    <p>Preis: {{preis}}€</p>
    <p>Gesamt: {{getGesamtPreis()}}€</p>
</template>

<script>
export default {
  name: 'myOrder',
  props: {
    preis: String,
    artikel: String,
    menge: String
  },
  methods: {
     getGesamtPreis(){
        return (Number(this.preis)* Number(this.menge)).toFixed(2);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


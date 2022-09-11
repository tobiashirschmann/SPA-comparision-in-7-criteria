<template>
    <p>Artikel: {{artikel}} </p>
    <p>Menge: {{menge}} Stück</p>
    <p>Preis: {{d_preis}}{{d_waehrung}}</p>
    <p>Gesamt: {{getGesamtPreis()}}{{d_waehrung}}</p>

    <button @click="waehrungUmschalten()">
        {{getWaehrungsanzeige()}}
    </button>
</template>


<script>
export default {
  name: 'myOrder',
  props: {
    preis: String,
    artikel: String,
    menge: String,
  },
  data() {
    return {
        d_waehrung :  "€",
        d_preis : this.preis,
    };
  },
  methods: {

  getWaehrungsanzeige()  {

    
    return this.d_waehrung == "€" ? "In $ anzeigen" : "In € anzeigen";
  },

  waehrungUmschalten(){
    if (this.d_waehrung == "€")
    {
      this.d_preis = (Number(this.d_preis) * 1.03).toFixed(2);
      this.d_waehrung = "$"
    }
    else
    {
      this.d_preis = (Number(this.d_preis) / 1.03).toFixed(2);
      this.d_waehrung = "€"
    }
  },

  getGesamtPreis(){
        return (Number(this.d_preis)* Number(this.menge)).toFixed(2);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


  <template>
<div>
    <div v-if="error">
        <h1>Empfehlungen</h1>
         Error: {{error.message}}
    </div>
    <div v-else-if="isLoaded === false">
        <h1>Meine Bestellungen</h1>Bitte warten...  
    </div>
    <div v-else>
        <h1>Empfehlungen</h1>
         <ol>
                  <li v-for="item in items" v-bind:key="item.id" >
                    <p><strong>{{item.description}}</strong> </p>
                    <p>Bewertung: {{item.rating}}/5</p>
                    <p>Preis: {{item.price}}€</p>
                    <p>Versand: {{item.deliveryCost <= 0 ? 'Kostenlos' : item.deliveryCost+'€'}}</p>
                    <p>{{item.summary}}</p>
                        <button @click="inDenWarenkorb()">
                        In den Warenkorb
                      </button>
                  </li>
              </ol>
    </div>
</div>
</template>
  <script>

import { store } from './store';

export default {
    
  name: 'myRecommendations',

  data() {
    return {
        isLoaded :  false,
        items : null,
        error : null 
    };
  },
  created() {
     fetch("https://localhost:7281/Recommendation")
          .then(res => res.json())
          .then(
            (result) => {
                this.isLoaded = true;
                this.items = result
            },
            (error) => {
                this.isLoaded = true;
                this.error = error;
            }
          )
  },
  methods: {
      inDenWarenkorb() {
        store.count = store.count + 1;
      }
  }
}
</script>
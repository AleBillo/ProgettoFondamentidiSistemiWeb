const TabellaCRUD = {
  template: `
<div class="container-fluid bg-dark mt-2 mb-2 rounded">
  <div class="row">
    
    <div class="col-md-6 mt-2 mb-2">
      <div class="container bg-light">
        <table class="table table-striped table-hover">
          <caption id="vinili-table-description">Tabella dei vinili con nome album, numero di tracce, genere e nome artista o di band</caption>
          <thead>
            <tr>
              <th scope="col">Nome Vinile</th>
              <th scope="col">Numero Tracce</th>
              <th scope="col">Generi</th>
              <th scope="col">Artista/Band</th>
              <th scope="col">Elimina</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(vinile, index) in vinili" :key="index">
              <td>{{ vinile.nome }}</td>
              <td>{{ vinile.nTracce }}</td>
              <td>{{ vinile.genere }}</td>
              <td>{{ vinile.artista }}</td>
              <td>
                <img src="/media/cestino.png" alt="Icona Elimina" class="img-icon" @click="ELIMINAVINILE(index)">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="col-md-3 mt-2">
      <div class="container bg-light">
        <section class="article-box" aria-labelledby="aggiungi-vinile-heading">
          <h2 id="aggiungi-vinile-heading" class="text-adaptive">Aggiungi un vinile</h2>

          <label for="nome-vinile" class="text-adaptive">Nome Vinile: </label>
          <input placeholder="Inserisci un nome di un album..." id="nome-vinile" class="form-control" aria-required="true" v-model="nuovoVinile.nome" />

          <label for="numero-tracce" class="text-adaptive">Numero Tracce: </label>
          <input placeholder="Inserisci un numero di tracce..." id="numero-tracce" type="number" class="form-control" aria-required="true" v-model="nuovoVinile.nTracce" />

          <label for="generi" class="text-adaptive">Generi: </label>
          <input placeholder="Inserisci uno o più generi musicali..." id="generi" class="form-control" aria-required="true" v-model="nuovoVinile.genere" />

          <label for="artista" class="text-adaptive">Artista/Band: </label>
          <input placeholder="Inserisci un artista o una band..." id="artista" class="form-control" aria-required="true" v-model="nuovoVinile.artista" />

          <button @click="AGGIUNGI" class="button-crud btn pulsante mt-2" :disabled="!RiempitoTutto">Aggiungi Vinile</button>
        </section>
      </div>
    </div>

    <div class="col-md-3 mt-2">
      <div class="container bg-light">
        <section>
          <h2 id="modifica-vinile-heading" class="text-adaptive">Modifica vinile</h2>
          
          <ul>
            <li>
              <label for="form-seleziona">Seleziona Vinile: </label>
              <select class="form-control" id="form-seleziona" v-model="selezionato">
                <option disabled value="">Seleziona il vinile</option>
                <option v-for="(vinile, index) in vinili" v-bind:value="index">{{vinile.nome}}</option>
              </select>
            </li>
            <li>
              <label for="nome-vinile-modifica" class="text-adaptive">Nome Vinile:</label>
              <input class="form-control" type="text" v-model="selezionatoVinile.nome" id="nome-vinile-modifica" :disabled="selezionato === ''" />
            </li>
            <li>
              <label for="numero-tracce-modifica" class="text-adaptive">Numero Tracce:</label>
              <input class="form-control" v-model="selezionatoVinile.nTracce" id="numero-tracce-modifica" type="number" aria-required="true" :disabled="selezionato === ''" />
            </li>
            <li>
              <label for="generi-modifica" class="text-adaptive">Generi:</label>
              <input class="form-control" v-model="selezionatoVinile.genere" type="text" id="generi-modifica" aria-required="true" :disabled="selezionato === ''" />
            </li>
            <li>
              <label for="artista-modifica" class="text-adaptive">Artista/Band:</label>
              <input class="form-control" v-model="selezionatoVinile.artista" id="artista-modifica" aria-required="true" :disabled="selezionato === ''" />
            </li>
          </ul>
          <button class="pulsante2" @click="SVUOTA" :disabled="selezionato === ''" class="btn btn-secondary">Finito le modifiche</button>
          
        </section>
      </div>
    </div>
  </div>



  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="popupElimina" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
         <img src="/media/cestino.png" alt="Icona Elimina" class="rounded me-2 img-icon ">
        <strong class="me-auto">Eliminato</strong>
        <small>Adesso</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Il vinile è stato eliminato con successo.
      </div>
    </div>
  </div>

  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="popupAggiunto" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
         <img src="/media/spuntaverde.png" alt="Icona Aggiunto" class="rounded me-2 img-icon ">
        <strong class="me-auto">Aggiunto</strong>
        <small>Adesso</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Il vinile è stato aggiunto con successo.
      </div>
    </div>
  </div>

  </div>

  `,
  data() {
    return {
      vinili: [], 
      selezionato: "",
      nuovoVinile: {
        nome: '',
        nTracce: '',
        genere: '',
        artista: ''
      }
    };
  },
  computed: { //parte che controlla in  automatico e aggiorna il risultato alla variazione di uno dei valori:
    selezionatoVinile() {
      return this.selezionato !== "" ? this.vinili[this.selezionato] : { nome: '', nTracce: '', genere: '', artista: '' }; //se selezionato non è più vuoto
      //restituisce il vinile selezionato, altrimenti risvuota tutti i form

    },
    RiempitoTutto() {
      return this.nuovoVinile.nome && this.nuovoVinile.nTracce && this.nuovoVinile.genere && this.nuovoVinile.artista; //se tutti i valori e quindi i
      //form di sopra sono vuoti il bottone non si accenderà
    }
  },
  created() {
    axios.get('json/vinile.json')
      .then(response => {
        this.vinili = response.data; //visto in Laboratorio
      });
  },
  methods: {
    SVUOTA() {
      this.selezionato = ""; //reimposta il vinile selezionato come la "partenza"
    },
    
  
    AGGIUNGI() {
   
      const nuovoVinileCopia = JSON.parse(JSON.stringify(this.nuovoVinile)); // crea una copia del nuovo vinile, con il parse converto in un elemento json la stringa 
      //(diventata stringa con lo stringify)e lo assegno alla variabiòe, funzioni vista dalla documentazione di weschool

      
      this.vinili.push(nuovoVinileCopia); // e poi aggiungo il nuovo vinile alla lista
  
      // resetta i campi dei vari form a vuoti, cosi il pulsante si "spegne"
      this.nuovoVinile = {
        nome: '',
        nTracce: '',
        genere: '',
        artista: ''
      };
      this.mostraToastAggiunto();
    },
  
    ELIMINAVINILE(index) {
      
      this.vinili = [
        ...this.vinili.slice(0, index), // Tutti gli elementi prima dell'elemento da eliminare, partendo dallo 0 arriva all'indice selezionato, "primo" array
        ...this.vinili.slice(index + 1) // Tutti gli elementi dopo l'elemento da eliminare, dall'indice a quelli dopo, cosi elimini l'indice e dopo fai il biding tra gli elementi non eliminati, "secondo" array
        //che si collega al primo con "...", lo spread operator che permette il binding delle due partizioni di array
      ];
  
      if(this.selezionato==index){ //controlla che se hai eliminato quell'elemento cosi non puoi modificarlo, impostando il form alla partenza
        this.selezionato = "";
      }

      this.mostraToastEliminato();
    },

    mostraToastEliminato() {
      const popupEl = document.getElementById('popupElimina');
      const toast = new bootstrap.Toast(popupEl);
      toast.show(); //metodo preso dalla documentazione di bootstrap 5 sui toast
    },

    mostraToastAggiunto() {
      const popupAgg = document.getElementById('popupAggiunto');
      const toast = new bootstrap.Toast(popupAgg);
      toast.show(); //metodo preso dalla documentazione di bootstrap 5 sui toast
    },

  }
  
};

export default TabellaCRUD;

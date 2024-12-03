export default {
  template: `
    <h1 class="pb-3 mb-4 mt-4 py-2 border-bottom font-weight-normal text-center">
      Esempio di JSON con film usciti nel 2023
    </h1>
    <div class="row m-4">
      <div class="container col-md-11">
        <table class="table table-striped table-hover" aria-describedby="film-table-description">
          <caption id="film-table-description">Tabella di film usciti nel 2023 con copertina, nome, genere e regista.</caption>
          <thead>
            <tr>
              <th scope="col">Copertina</th>
              <th scope="col">Nome</th>
              <th scope="col">Genere</th>
              <th scope="col">Regista</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(film, index) in films" :key="index">
              <td><img :src="film.copertina" :alt="'Copertina di ' + film.nome" width="100"></td>
              <td>{{ film.nome }}</td>
              <td>{{ film.genere }}</td>
              <td>{{ film.regista }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  
  data() {
    return {
      films: [] 
    };
  },


  created() {
    axios.get('json/film.json') //Metodo visto durante le lezioni di laboratorio
      .then(response => {
        this.films = response.data;
      })
  
  },

  

  methods: {}
};

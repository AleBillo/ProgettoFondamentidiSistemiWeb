const Argomento = {
  template: `
    <div class="container bg-light rounded my-4 col-12" role="main">
    <div class="row">
        <div class="col-md-8">
            <h1 class="pb-3 mb-4 py-2 border-bottom font-weight-normal">AMP by Google</h1>
            <p class="scritta">In che modo AMP migliora le prestazioni della nostra pagina?</p>

            <div class="badge bg-dark text-wrap" style="width: 53.2rem;">
                <p class="bold fs-6">Non ferma mai il contenuto:</p>
            </div>

            <div class="mt-1">
                <p>La maggior parte dei siti web include media e script che vengono scaricati sincronicamente nell'ordine specificato. AMP risolve questo problema facendo caricare tutti i suoi script e componenti in parallelo contemporaneamente. Le funzionalità interattive delle pagine sono gestite in elementi AMP personalizzati.</p>
            </div>

            <div class="badge bg-dark text-wrap" style="width: 53.2rem;">
                <p class="bold fs-6">Un layout indipendente dalle risorse</p>
            </div>

            <div class="py-2 border-top">
                <p class="font-weight-normal">In una pagina HTML normale, il browser spesso non sa quale sarà il layout finché tutte le risorse non sono state caricate. AMP carica il layout della pagina senza aspettare che le risorse vengano scaricate. Questo è ciò che chiamiamo layout statico ed è un concetto cruciale nel mondo AMP.</p>
            </div>

            <div class="badge bg-dark text-wrap" style="width: 53.2rem;">
                <p class="bold fs-6">Una ottimizzazione dei font web</p>
            </div>

            <div class="py-2 border-top">
                <p class="font-weight-normal">Il sistema AMP non necessità di alcuna richiesta HTTP finché i font non iniziano a essere scaricati, e questo è possibile solo perché tutto il JavaScript in AMP è asincrono e sono permessi solo fogli di stile in linea.</p>
            </div>

            <div class="badge bg-dark text-wrap" style="width: 53.2rem;">
                <p class="bold fs-6">Con una minimizzazione delle ricalcolazioni di stile e layout</p>
            </div>

            <div class="py-2 border-top">
                <p class="font-weight-normal">Ogni volta che misuri o cambi qualcosa tramite uno script su una pagina, il browser deve ricalcolare il layout della pagina, e queste operazioni diventano molto dispendiose. Il browser non sa in anticipo cosa accadrà al layout della pagina finché tutte le risorse non sono caricate. Poiché AMP media tutte le operazioni di rendering, combina intelligentemente letture e cambiamenti per minimizzare lo sforzo.</p>
            </div>

            <div class="badge bg-dark text-wrap" style="width: 53.2rem;">
                <p class="bold fs-6">E caricamento delle risorse prioritario</p>
            </div>

            <div class="py-2 border-top">
                <p class="font-weight-normal">Quando AMP scarica risorse, ottimizza i download affinché le risorse più importanti vengano scaricate per prime. Le risorse sono caricate il più tardi possibile ma prefetchate il prima possibile, in modo che gli elementi si carichino molto velocemente ma i cicli della CPU siano usati solo quando le risorse sono effettivamente visualizzate agli utenti.</p>
            </div>

            <div class="row featurette py-2 border-top">
                <div class="col-md-7">
                    <h2>Molti siti lo sfruttano-<span class="text-muted"> Come:</span></h2>
                 
                        <ol>
                            <li><a class="" href="https://www.nytimes.com/">The New York Times</a></li>
                            <li><a class="" href="https://www.washingtonpost.com/">The Washington Post</a></li>
                            <li><a class="" href="https://www.bbc.com/">BBC</a></li>
                            <li><a class="" href="https://www.theguardian.com/europe">The Guardian</a></li>
                            <li><a class="" href="https://techcrunch.com/">TechCrunch</a></li>
                            <li><a class="" href="https://www.wired.it/">Wired</a></li>
                            <li><a class="" href="https://www.ebay.it/">eBay</a></li>
                            <li><a class="" href="https://it.aliexpress.com/">AliExpress</a></li>
                        </ol>
                   
                </div>
                <div class="col-md-5 d-flex justify-content-center align-items-center">
                    <img class="img-fluid mx-auto" alt="Logo AMP" style="width: 200px; height: 200px;" src="media/ampfulmine.png" data-holder-rendered="true">
                </div>
            </div>
        </div>

        <aside class="col-md-4 bg-dark bg-gradient rounded bordobello2">
            <div class="p-3 mb-3">
                <h4 class="text-light">Pagine ufficiali</h4>
            </div>
            <div class="p-3">
                <ol class="list-unstyled">
                    <li>
                        <img src="media/ampfulmine.png" class="iconalink" alt="Icona AMP">
                        <a class="text-light" href="https://amp.dev/">Visita il sito ufficiale di AMP</a>
                    </li>
                    <li>
                        <img src="media/yt.png" class="iconalink" alt="Icona YouTube">
                        <a class="text-light" href="https://www.youtube.com/channel/UCXPBsjgKKG2HqsKBhWA4uQw">Canale YouTube di AMP</a>
                    </li>
                    <li>
                        <img src="media/gith.png" class="iconalink" alt="Icona GitHub">
                        <a class="text-light" href="https://github.com/ampproject">Progetto GitHub di AMP</a>
                    </li>
                    <li>
                        <img src="media/twitter.png" class="iconalink" alt="Icona Twitter">
                        <a class="text-light" href="https://x.com/AMPhtml">Account Twitter di AMP</a>
                    </li>
                </ol>
            </div>
            <div class="p-3 mb-3 text-center">
                <div class="d-grid gap-2">
                    <button class="btn btn-secondary bordobello" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" aria-label="Apri effetto WOW">
                        Effetto WOW
                    </button>
                    <div class="offcanvas gattino offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                        <div class="offcanvas-header gattino border-bottom">
                            <h5 class="offcanvas-title" id="staticBackdropLabel">WOW!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Chiudi"></button>
                        </div>
                        <div class="offcanvas-body gattino">
                            <div>
                                <img src="media/gattino.jpg" alt="Immagine di un gattino">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </div>

    <div class="bg-dark bg-gradient rounded mt-5">
        <h1 class="text-light text-center font-weight-normal border-bottom">Esempio di Codice</h1>
        <p class="text-light text-left px-4 py-2">
            &lt;!doctype html&gt;<br>
            &lt;html amp lang="en"&gt;<br>
            &lt;head&gt;<br>
            &lt;meta charset="utf-8"&gt;<br>
            &lt;title&gt;My First AMP Page&lt;/title&gt;<br>
            &lt;script async src="https://cdn.ampproject.org/v0.js"&gt;&lt;/script&gt;<br>
            &lt;meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"&gt;<br>
            &lt;style amp-boilerplate&gt;<br>
              body {<br>
                -webkit-animation: -amp-start 8s steps(1,end) 0s 1 normal both;<br>
                -moz-animation: -amp-start 8s steps(1,end) 0s 1 normal both;<br>
                -ms-animation: -amp-start 8s steps(1,end) 0s 1 normal both;<br>
                animation: -amp-start 8s steps(1,end) 0s 1 normal both;<br>
              }<br>
            &lt;/style&gt;<br>
            &lt;noscript&gt;&lt;style amp-boilerplate&gt;<br>
              body {<br>
                -webkit-animation: none;<br>
                -moz-animation: none;<br>
                -ms-animation: none;<br>
                animation: none;<br>
              }<br>
            &lt;/style&gt;&lt;/noscript&gt;<br>
            &lt;style amp-custom&gt;<br>
              h1 {<br>
                margin: 1rem;<br>
              }<br>
            &lt;/style&gt;<br>
            &lt;/head&gt;<br>
            &lt;body&gt;<br>
            &lt;h1&gt;Hello, AMPs&lt;/h1&gt;<br>
            &lt;/body&gt;<br>
            &lt;/html&gt;
        </p>
    </div>
</div>

  `,

  methods: {
  
  }
};

export default Argomento;

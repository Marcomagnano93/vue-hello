<!-- VUE - INTRODUCTION -->

Vue è un framework di JS per realizzare pagine interattive insieme a HTML e CSS in maniera più semplice e snella rispetto al vanilla JS.

Per farlo, Vue ha due principali utilizzi:

    1- utilizzando la "template syntax" possiamo rendere più chiaro il codice scrivendo parte del JS in HTML in maniera esplicita (es. @click ---> addEventListener("click"))
    
    2- Quando avvengono cambiamenti nella pagina, Vue ne tiene traccia automaticamente. (es. gli input in un form)

Vue ci mette a disposizione due stili di lavoro differenti (NON vanno mescolati, o usi uno o l'altro)
    1- options: migliore per imparare, utilizza un sistema ad oggetti e .this
    2- Composition: più complesso e raccomandato nel momento in cui si buole relizzare una pagina interamente con Vue

ESEMPIO - Nel fli js avremo:

const { createApp } = Vue

createApp({
  data() { <!-- data è una funzione che ci ritorna un oggetto
            questo oggetto ha diversi elementi che possiamo "richiamare" nell'HTML scrivendo semplicemente il nome della key -->
    return {
      prova: 'testo'
      
    }
  }
}).mount('#app')



<!-- VUE  - TEMPLATE SYNTAX -->
Con Vue possiamo scrivere in HTML delle "direttive" usando la scrittura v- seguito dal nome della direttiva, ce ne sono diverse.


TEXT INTERPOLATION

es.
    <span>Message: {{ msg }}</span>

    la forma più basica di utilizzo di vue: viene usato il value assegnato alla key (in questo esempio:{{ msg }}) e inserito nell'html
     [in maniera simile a un innerHtml = ""] come testo normale (NOTA: se scrivi un tag html verrà letto come seplice testo!).
    La key va inserita con la sintassi "Mustache" ovvero tra {{ }}

RAW HTML

    Se con Text Interpolation volessimo inserire anche dell'HTML possiamo farlo con la direttiva vue: v-html.
    in questo caso il valore di {{msg}} sarà interpretato come html.

V-BIND

    Non possiamo usare la sintassi mustache negli attributi html... allora come utilizzo un valore in un attributo?
    Utiliziamo la direttiva v-bind per usare un valore nell'attributo [per esempio: classi, id, url etc...]
    es.
        <div v-bind:class="red"></div>
        ABBREVIAZIONE: <div :class="red"></div>

    Volendo puoi usare un oggetto come valore di una key, e inserire più attributi. Poi puoi usare tutto l'oggetto con v-bind in un attributo.
    es.
        appContainer: {
            id: 'container',
            class: 'wrapper'
        }

        <div v-bind="appContainer"></div>

    possiamo anche usare le espressioni insieme agli attributi
    per esempio con un url possiamo usare le []
    es.
    <a v-bind:[link]="url"> testo </a>

ALTRE DIRETTIVE:

V-FOR

V-SHOW

V-FI | ELSEIF | ELSE

V-ON
    es.
        addEventListener
        possiamo usare v-on su bottoni o a per esempio, per aggiungere un event-listener "click"
        <button v-on:click="">
        OPPURE ABBEVIATO
        <button @click="">





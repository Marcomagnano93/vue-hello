const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'Primi passi con JS-Vue',
      mainTitle: 'bg-red c-white center-text',
      question: 'Trova la marmotta',
      questionClass: {
        id: 'question',
        class: 'center-text'
      },
      marmotta: './img/marmotta.JPG',
      imgClass: 'w-100',
      idContainer: 'container',
      discover: 'scopri di pù sulle marmotte',
      link: 'https://it.wikipedia.org/wiki/Marmota_marmota'

    }
  }
}).mount('#app')
Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'I love this product',
      image: './assets/images/socks_green.jpg',
      url: 'https://devrookie.netlify.app/',
      inventory: 100
    }
  }
}).mount('#app')

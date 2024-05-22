import { LitElement, css, html } from 'lit'

export class Pinky extends LitElement {
  static get properties() {
    return {

      title1: { type: String },

      paragraph1: { type: String },

      title2: { type: String },

      paragraph2: { type: String },

      title3:{type:String},

      paragraph3:{type:String},

      imageURL:{type:String},

    }
  }

  constructor() {
    super()
    this.title = 'Pinky'
    this.paragraph1 = 'Pinky es una criatura demoníaca que aparece como un enemigo recurrente. Su origen y trasfondo varían ligeramente dependiendo de la entrega específica del juego, pero en general, Pinky es representado como un demonio feroz y ágil. '

    this.title2 = 'Orígenes'
    this.paragraph2 = 'En algunas versiones de la historia de "Doom", se sugiere que Pinky fue una vez un perro normal que fue deformado y mutado por las fuerzas infernales que invadieron la luna marciana de Phobos.   En otras interpretaciones, Pinky es simplemente una de las muchas criaturas nacidas del Infierno, diseñadas para cazar y destruir a los intrusos humanos.'

    this.title3='Características   '
    this.paragraph3=' Independientemente de su origen, Pinky es conocido por su velocidad y agresividad en el campo de batalla. Su piel rosada y su estructura corpulenta le dan una apariencia distintiva, y su embestida poderosa puede causar daño significativo a los jugadores desprevenidos. En resumen, Pinky es un enemigo icónico en la serie "Doom", y su presencia agrega un desafío adicional para los jugadores que exploran los oscuros y peligrosos rincones de los mundos infernales del juego.'

    this.imageURL='https://cdna.artstation.com/p/assets/covers/images/039/604/242/large/jason-martin-jason-martin-pinky-thumbnail.jpg?1626373941https://mrwallpaper.com/images/high/the-one-and-only-doom-slayer-afuhseo09yclu9w0.jpg'

  }

  render() {
    return html`
     <div id="main">

    <h1>${this.title}</h1> 
    <p>${this.paragraph}</p>
  
    <h1>${this.title1}</h1> 
    <p>${this.paragraph1}</p>
          
    <h1>${this.title2}</h1> 
    <p>${this.paragraph2}</p>

    <h1>${this.title3}</h1> 
    <p>${this.paragraph3}</p>
          
      <div class="doom-img-container">
        <img class="criatura-img" src="${this.imageURL}">
      </div>
      
    `
  }



  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      #main{
        background-color:#ff059f 
      }
  
        
      .criatura-img{
        width: 20vw;
    }
    
    .doom-img-container{
      text-align:center;
    }


    `
  }
}

window.customElements.define('pinky-element', Pinky)

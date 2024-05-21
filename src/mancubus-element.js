import { LitElement, css, html } from 'lit'

export class Mancubus extends LitElement {
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
    this.title = 'Mancubus'
    this.paragraph1 = 'el Mancubus es una criatura demoníaca grande y corpulenta que ha aparecido en múltiples entregas de la franquicia. Su origen se remonta a la invasión demoníaca de las lunas marcianas de Phobos y Deimos, donde se desatan fuerzas infernales que amenazan con destruir la humanidad. '

    this.title2 = 'Orígenes'
    this.paragraph2 = 'La historia detrás del Mancubus varía ligeramente dependiendo de la interpretación específica de la serie, pero en general, se le presenta como una creación demoníaca diseñada para la guerra. Su aspecto monstruoso y su capacidad para lanzar proyectiles incendiarios lo convierten en una fuerza formidable en el campo de batalla. Algunas versiones de la historia sugieren que el Mancubus puede haber sido creado a partir de experimentos demoníacos o incluso haber sido una vez humanos transformados por las fuerzas del Infierno. Sin embargo, su origen exacto suele quedar en el misterio, lo que agrega un aire de terror y misticismo a su presencia en el juego.  '

    this.title3='Características   '
    this.paragraph3='Este nuevo Mancubus ha sido rediseñado para parecerse más al espíritu del original Mancubus, respecto a la última versión de Doom (2016). Tiene menos armadura, una cabeza más pequeña y un cuerpo de color más felshy. Mantiene su estatura con sobrepeso, cañones masivos de doble brazo y postura casi en cuclillas, pero tiene un aspecto aparentemente de suturas, con signos de estiramiento y lágrimas en todo el cuerpo. Notablemente diferente del diseño original es el órgano en forma de corazón en el centro de su pecho. Esta parece ser la fuente de energía para sus ataques.  '

    this.imageURL='https://pbs.twimg.com/media/DnZQQ5aXcAE-Mny?format=jpg&name=4096x4096'

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
    #main{
      background-color:#6b5014 
    }
    
    .criatura-img{
      width: 30vw;
  }
  
  .doom-img-container{
    text-align:center;
  }

    `
  }
}

window.customElements.define('mancubus-element', Mancubus)

import { LitElement, css, html } from 'lit'

export class Revenant extends LitElement {
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
    this.title = 'Revenant'
    this.paragraph1 = ' el Revenant es una criatura demoníaca que ha aparecido en varias entregas. Su origen está vinculado a la invasión demoníaca que tiene lugar en las instalaciones de la Unión Aeroespacial de la Corporación (UAC) en Marte y en las lunas marcianas de Phobos y Deimos. La historia detrás del Revenant puede variar ligeramente entre las diferentes iteraciones de la serie, pero en general, se presenta como una creación demoníaca que combina restos humanos con tecnología y magia demoníaca. '

    this.title2 = 'Orígenes'
    this.paragraph2 = 'En algunas versiones de la historia, se sugiere que los Revenants fueron alguna vez humanos que fueron transformados en estas criaturas por las fuerzas demoníacas que invadieron las instalaciones de la UAC. Estos humanos pueden haber sido sometidos a experimentos oscuros o incluso haber sido voluntarios para el proceso de transformación con la promesa de poder. La combinación de restos humanos con implantes tecnológicos y magia demoníaca da como resultado una criatura ágil y letal que es capaz de lanzar misiles guiados contra sus enemigos. El Revenant es conocido por su movilidad en el campo de batalla y su capacidad para atacar a distancia, lo que lo convierte en un enemigo formidable para los jugadores. En resumen, el Revenant es una de las muchas criaturas demoníacas que los jugadores deben enfrentar en la serie "Doom", y su origen oscuro y misterioso añade un elemento de horror y fascinación a su presencia en el juego.  '

    this.title3='Características   '
    this.paragraph3='El Revenant es un demonio altamente móvil debido a su jetpack. Su principal forma de ataque es disparar cohetes al jugador, pero si el jugador consiguer dispararle y destruir las cápsulas de cohetes, entonces el Revenant solo podrá golpear al jugador, haciéndolo mucho más fácil de matar. Es posible apuñalar el jetpack del Revenant, lo que hace que funcione mal y se autodestruya, dejándolo preparado para una Glory Kills.  '

    this.imageURL='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/072f139b-34d4-4ab0-af3b-43a3d64294c1/de8qx19-18855b8f-1f4e-4273-869d-31c4120b5137.png/v1/fill/w_1920,h_1920,q_80,strp/revenant_doom_eternal_by_byrazer_de8qx19-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzA3MmYxMzliLTM0ZDQtNGFiMC1hZjNiLTQzYTNkNjQyOTRjMVwvZGU4cXgxOS0xODg1NWI4Zi0xZjRlLTQyNzMtODY5ZC0zMWM0MTIwYjUxMzcucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GUvNzTDdfonjEGMDYWtwppHlxCMCsxcc6wu1dFSbyrs'

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
        background-color: #abc04b
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

window.customElements.define('revenant-element', Revenant)

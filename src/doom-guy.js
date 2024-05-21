import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {
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
    this.title = 'Doomguy'
    this.paragraph1 = 'El Doom Slayer (también conocido por la UAC como DM1-5, Doom Marine o el Slayer; y nombrado por los demonios del Infierno como Unchained Predator o Hell Walker) es el personaje protagonista y jugable en Doom (2016) y Doom Eternal. También ha sido estrella invitada en los juegos de Quake como Quake Champions y Quake III Arena. Está destinado a ser la última iteración y continuación del clásico Doom Marine, que es el protagonista de la mayor parte de la serie. Según Tom Hall y John Romero (que trabajaron en el Doom original), era el nieto del comandante Keen y el tataranieto de William J. Blazkowicz. Algunas teorías de los fanáticos dicen que el nombre de Doom Slayer podría ser William Joseph "B.J." Blazkowicz III, pero según entrevistas oficiales, los desarrolladores declararon claramente que no tiene nombre. La ascendencia Blazkowicz de Doom Slayer puede o no ser canónica para la iteración moderna.'

    this.title2 = 'Orígenes'
    this.paragraph2 = 'Es un antiguo guerrero que fue desterrado al Infierno o bien decidió quedarse allí (posiblemente una referencia al final de Doom 64), en donde fue capturado por las fuerzas demoníacas y sellado en una tumba de roca volcánica. Más tarde fue recuperado por la UAC que lo retuvo "cautivo" para su estudio hasta que las hordas infernales invaden la base; luego se escapa armado solamente con una pistola y su exoesqueleto llamado Traje de pretor. Elementos de la historia base del juego indican que él es un guerrero legendario, un miembro de los Centinelas de la Noche de Argent D Nur, a quien los demonios temen por su capacidad de sacar fuerzas de su destrucción.Se sugiere que él ha realizado personalmente esta destrucción a través de múltiples dimensiones y eones de tiempo.El juego sugiere fuertemente que esta versión del protagonista puede ser, el mismo protagonista que aparecía en la serie original.Elementos de su historia de fondo, como la opción de permanecer en el Infierno, la destrucción de los Titanes y la lucha contra los demonios en varias ocasiones a través de grandes dimensiones y extensiones de tiempo, sugieren una posible unificación entre las diferentes líneas evolutivas.Esto, sin embargo, se ha dejado intencionadamente vago y abierto a la interpretación.'

    this.title3='Características   '
    this.paragraph3='A diferencia de algunos de los otros protagonistas de los juegos Doom, este marine muestra un poco más de emoción, que se evidencia cuando, enfadado(cabe aclarar que esta emoción la siente de manera constant, destruye la tableta de comunicación con la que el Dr. Samuel Hayden intentaba usar y pedirle ayuda. También demuestra esto durante la penúltima misión, cuando decide realizar una copia de seguridad del código VEGA antes de destruirlo, para que la IA pueda seguir existiendo, a pesar de no haber pedido hacerlo. Esta versión del protagonista es extremadamente despiadada; literalmente, destroza monstruos con sus propias manos, desgarrando cadáveres con indiferencia total con el fin de obtener acceso a áreas restringidas y pareciendo saborear la destrucción de todo lo que se mueve a su alrededor. Se opone vehementemente a la investigación de Samuel Hayden en el infierno y es evidentemente consciente de que es una tarea sin esperanza, basado en sus experiencias pasadas. Cabe destacar que mira a un cadáver durante el segundo discurso de Hayden en el juego, donde el ciborg afirma que su investigación es en el mejor interés de la humanidad, justo antes de partir el monitor. Esto parece indicar que él se identifica y trata de proteger a los humanos de los estragos de los demonios.'

    this.imageURL='https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/97f6d55c-bd2f-4dbd-9979-f47a276a3699/width=1200/97f6d55c-bd2f-4dbd-9979-f47a276a3699.jpeg'

  }

  render() {
    return html`
     <div id="main">
          <div  class="first-title">
            <h1>${this.title}</h1> 
            <p>${this.paragraph}</p>
          </div>
            
          <div class="historia">
            <h1>${this.title1}</h1> 
            <p>${this.paragraph1}</p>
          </div>
          
            <div class="doomguy">
            <h1>${this.title2}</h1> 
              <p>${this.paragraph2}</p>
          </div>

          <div class="pinky">
            <h1>${this.title3}</h1> 
            <p>${this.paragraph3}</p>
          </div>

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

    `
  }
}

window.customElements.define('my-element', MyElement)

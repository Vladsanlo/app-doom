import { LitElement, css, html } from 'lit'


export class Doom extends LitElement {
  static get properties() {
    return {

      /**
       * titulo inicial del html
       */
      title: { type: String },

      /**
       * parrafo de introduccion
       */
      paragraph: { type: String },

      /**
       * imagen de la introduccion
       */
      image0URL: { type: String },

      /**
       * titulo del primer 
       */
      title1: { type: String },

      /**
       * parrafo del primer 
       */
      paragraph1: { type: String },

      /**
       * imagen del primer 
       */

      image1URL: { type: String },

      /**
       * titulo del segundo personaje
       */
      title2: { type: String },

      /**
       * parrafo del segundo personaje
       */
      paragraph2: { type: String },

      /**
       * imagen del segundo personaje
       */
      image2URL: { type: String },

      /**
       * titulo del tercer demonio
       */
      title3: { type: String },

      /**
       * parrafo del tercer demonio
       */
      paragraph3: { type: String },

      /**
       * imagen del tercer demonio
       */
      image3URL: { type: String },

      /**
      * titulo del cuarto demonio
      */
      title4: { type: String },

      /**
       * parrafo del cuarto demonio
       */
      paragraph4: { type: String },

      /**
       * imagen del cuarto demonio
       */
      image4URL: { type: String },


      /**
      * titulo del quinto demonio
      */
      title5: { type: String },

      /**
       * parrafo del quinto demonio
       */
      paragraph5: { type: String },

      /**
       * imagen del quinto demonio
       */
      image5URL: { type: String },




    }
  }


  constructor() {
    super()
    this.title = 'Doom'
    this.paragraph = 'Doom (oficialmente escrito DOOM, y ocasionalmente DooM por los fans, basado en el estilo de las letras del logo de Doom) es un videojuego FPS (First Person Shooter o disparos en primera persona) creado por Id Software en 1993. El Doom original funcionaba bajo el sistema operativo DOS. El juego consiste en personificar a un marine espacial que se encuentra de rutina en una estación en Phobos , una de las lunas de Marte . En un segundo, las puertas del Infierno quedan abiertas, dejando libres a un sinnúmero de demonios, espíritus inmundos, zombis, que infestan la base en cuestión de horas. Eres el único ser humano superviviente en la estación y tu misión es ir logrando pasar con vida de nivel en nivel (como en el Wolfenstein 3D).'
    this.image0URL = 'https://static.wikia.nocookie.net/zombie/images/5/57/Doom_cover_art.jpg/revision/latest?cb=20131208235024&path-prefix=es'

    this.title1 = ' Historia Original'
    this.paragraph1 = 'Eres un marine, de los más fuertes y entrenados de la Tierra, experimentado en combate y listo para la acción. Hace 3 años golpeaste a un oficial superior por ordenar a sus soldados que dispararan contra un grupo de manifestantes civiles. Considerándote como peligroso, decidieron trasladarte a la base en Marte, sector espacial de la UAC (Union Aerospace Corporation). La UAC es un conglomerado multi-planetario con instalaciones de investigación y desechos radioactivos en el planeta Marte y sus dos lunas, Phobos y Deimos. Tus primeros días los pasaste sentado en la sala de vigilancia, viendo videos restringidos y material ultrasecreto como si fuera TV por cable, no habiendo mucha acción allí. Secretamente, la UAC, entre otras cosas, desarrollaba muchos proyectos militares en Marte y sus dos lunas. Una y la más problemática era la teletransportación interdimensional, pero hasta ahora solo se había podido abrir un teletransportador entre Phobos y Deimos. Se probó a lanzar artefactos por un lado y verlos salir por el otro, pero en algún momento se necesitó de humanos para experimentar. Voluntarios militares y científicos se ofrecieron... Pero al entrar por el portal comenzaron a suceder cosas desconcertantes: o entraban y simplemente no se rematerializaban en el teletransportador de destino, o regresaban muertos con extraños síntomas en el cuerpo (mordeduras, piel seca y quemada, algunos aparecían descuartizados), o algunos llegaban completamente al borde de una esquizofrenia psicótica, cual zombis de película, masticando la mitad de sus dedos, o habiéndose tragado sus propios ojos, a la vez que otros pocos al cruzar por el teletransportador sufrían una explosión inexplicable de cuerpo completo. El trabajo de identificar partes de cuerpos que fueran compatibles unas con otras se había convertido en una labor de 24 horas. Aparte de dichos acontecimientos, la UAC anunciaba alguno que otro retraso, pero que lo demás iba bien. Ya habiendo pasado algún tiempo, repentinamente Marte recibió un mensaje desde Phobos: "¡Requerimos de soporte militar inmediato! ¡Algo terrible y monstruoso está saliendo por los portales! ¡Los sistemas no responden! Los sistemas computarizados se han vuelto locos!" El resto era simplemente incoherente. Poco después, Deimos simplemente se desvaneció del espacio. Desde ese momento, ha habido varios intentos de establecer conexión con alguna de las lunas, sin éxito. Como último recurso, tu y tus compañeros, son enviados a Phobos para ver que es lo que está pasando. Al llegar, tu primera orden es esperar en la entrada y asegurar el perímetro mientras los demás efectivos entraban a la base llevándose las armas de alto calibre. Por muchas horas, tu radio sólo recibe sonidos de combate: disparos, hombres gritando órdenes, gritos de auxilio, algo que podría identificarse como huesos y cartílagos quebrantándose, y por fin, el espectral silencio. Tus compañeros están muertos. Te decides a entrar por la puerta de la base, algo no esta bien, al dar la vuelta te das cuenta de que lo que mató a tus compañeros merece más de 2 escopetazos a la cabeza... A continuacion algunos de sus personajes'
    this.image1URL = 'https://i.ytimg.com/vi/dGyCPJ2pzdk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gPCg2MA8=&rs=AOn4CLAW_DKGiaR5sjz4nnEKneOSaYscgw'

    this.title2 = 'Doom Slayer '
    this.paragraph2 = 'El Doom Slayer (también conocido por la UAC como DM1-5, Doom Marine o el Slayer; y nombrado por los demonios del Infierno como Unchained Predator o Hell Walker) es el personaje protagonista y jugable en Doom (2016) y Doom Eternal. También ha sido estrella invitada en los juegos de Quake como Quake Champions y Quake III Arena. (para mas informacion ve a la pagina 1)'
    this.image2URL = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/10/doom-eternal-2508495.jpg'

    this.title3 = 'Pinky'
    this.paragraph3 = 'El Demonio Pinky es otro de los monstruos originales que retorna en el relanzamiento de Doom (2016).'
    this.image3URL = 'https://static.wikia.nocookie.net/doom/images/4/4a/PINKY.png/revision/latest?cb=20160528030634'

    this.title4 = 'Mancubus'
    this.paragraph4 = 'El Mancubus (pl. Mancubi) hace otra vuelta en el reinicio de Doom, conservando la mayor parte de las características de sus antepasados el original clásico y el de Doom 3, al tiempo que introduce nuevas características que se combinan para hacerlo una de las amenazas más graves del juego. (para mas informacion ve a la pagina 2)    '
    this.image4URL = 'https://static.wikia.nocookie.net/doom/images/d/df/Mancubus_DE.png/revision/latest?cb=20230909063005'


    this.title5 = 'Revenant'
    this.paragraph5 = '"El Revenant es otro de los monstruos originales que regresa en Doom (2016). El Revenant sirve como la cara del juego, apareciendo en portadas y numerosos trailers. '
    this.image5URL = 'https://i.pinimg.com/originals/97/59/57/97595711c2ecf728e83ad95bcd05e634.jpg'


  }

  render() {
    return html`
      <div id="main">
          <div  class="first-title">
            <h1>${this.title}</h1> 
            <p>${this.paragraph}</p>
            <div class="doom-img-container">
              <img class="criatura-img" src=${this.image0URL}">
            </div>
          </div>
            
          <div class="historia">
            <h1>${this.title1}</h1> 
            <p>${this.paragraph1}</p>
            <div class="doom-img-container">
              <img class="criatura-img" src="${this.image1URL}">
            </div>
          </div>
          
            <div class="doomguy">
            <h1>${this.title2}</h1> 
              <p>${this.paragraph2}</p>
              <div class="doom-img-container">
                <img class="criatura-img" src="${this.image2URL}">
              </div>
          </div>

          <div class="pinky">
            <h1>${this.title3}</h1> 
            <p>${this.paragraph3}</p>
            <div class="doom-img-container">
              <img class="criatura-img" src="${this.image3URL}">
            </div>
          </div>

          <div class="mancubus">
            <h1>${this.title4}</h1> 
            <p>${this.paragraph4}</p>
            <div class="doom-img-container">
              <img class="criatura-img" src="${this.image4URL}">
            </div>
          </div>
        

          <div class="revenant">
            <h1>${this.title5}</h1> 
            <p>${this.paragraph5}</p>
            <div class="doom-img-container">
              <img class="criatura-img" src="${this.image5URL}">
            </div>
          </div>


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
        background-color:#dd821b
      }
  
      .criatura-img{
        width: 25vw
    }
    
    .doom-img-container{
      text-align:center;
    }

    .first-title{
      color:yellow
      
    }
    .first-title{
      text-align:center
    }

    .second-title{
      color:blue
    }
    .second-title{
      text-align:center
    }

    .historia{
      color:#345cca
    }

    .doomguy{
      color:green
    }

    .pinky{
      color:purple
    }

    
    .manubus{
      color:green
    }


    .revenant{
      color:green
    }
    `
  }
}

window.customElements.define('doom-element', Doom)

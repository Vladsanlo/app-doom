import { LitElement, css, html } from 'lit'
import './doom-element.js'
import './doom-guy.js'
import './mancubus-element.js'
import './pinky-element.js'
import './revenant-element.js'


export class MyElement extends LitElement {
  static get properties() {
    return {


      position: { type: Number },
    }
  }

  constructor() {
    super()


    this.position = 0
  }

  setPrevious(e) {
    if (this.position === 0) {
      this.position = 4
    }
    else {
      this.position--
    }
  }

  setNext(e) {
    if (this.position == 4) {
      this.position = 0
    }
    else {
      this.position++
    }
  }


  render() {
    return html`
     <div>
      <button @click="${this.setPrevious}">Anterior</button>
      <button @click="${this.setNext}">Siguiente</button>
      <h1>${this.position}</h1>
      ${this.position===0 ? html `<doom-element></doom-element>` : ''}
      ${this.position===1 ? html `<doom-guy></doom-guy>` : ''}
      ${this.position===2 ? html `<mancubus-element></mancubus-element>`:''}
      ${this.position===3 ? html `<pinky-element></pinky-element>`:''}
      ${this.position===4 ? html `<revenant-element></revenant-element>`:''}
      
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


      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: grey;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: grey;
        }
      }
    `
  }
}

window.customElements.define('my-element', MyElement)

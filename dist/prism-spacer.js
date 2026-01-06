/**
 * Prism Spacer Card
 * A simple invisible spacer/placeholder card with configurable height
 * Perfect for creating space below navigation bars
 */

class PrismSpacerCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static getStubConfig() {
    return {
      height: 60
    };
  }

  static getConfigForm() {
    return {
      schema: [
        {
          name: "height",
          label: "Height (px)",
          selector: { number: { min: 0, max: 500, step: 5, unit_of_measurement: "px", mode: "slider" } }
        }
      ]
    };
  }

  setConfig(config) {
    this._config = {
      height: config.height !== undefined ? config.height : 60
    };
    this._render();
  }

  set hass(hass) {
    // Not needed, but required by HA
  }

  getCardSize() {
    return 1;
  }

  _render() {
    const height = this._config.height || 60;
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .spacer {
          height: ${height}px;
          width: 100%;
          background: transparent;
          pointer-events: none;
        }
      </style>
      <div class="spacer"></div>
    `;
  }
}

customElements.define('prism-spacer', PrismSpacerCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "prism-spacer",
  name: "Prism Spacer",
  preview: true,
  description: "An invisible spacer card with configurable height - perfect for creating space below navigation"
});

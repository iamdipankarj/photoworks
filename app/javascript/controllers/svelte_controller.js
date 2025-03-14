import { Controller } from "@hotwired/stimulus"
import SvelteApp from "../svelte/SvelteApp.svelte"

// Connects to data-controller="svelte"
export default class extends Controller {
  connect() {
    console.log("Hello Stimulus", this.element);

    const app = new SvelteApp({
      target: this.element
    })
  }
}

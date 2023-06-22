import { View } from "./view.js";

export class MensagemView extends View<string> {
  // Precisa colocar o protected também nos filhos, porque estando no pai, ele não é herdado
  protected template(model: string): string {
    return `
      <p class="alert alert-info">${model}</p>
    `;
  }
}

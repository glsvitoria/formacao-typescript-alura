// A classe filha ao extender a classe, irá passar também a tipagem genérica

// Uma classe abstrata não pode ser instanciada, apenas herdada
export abstract class View<T> {
  // Diferente do private, com o protected os filhos podem acessar a variável
  protected elemento: HTMLElement;
  
  constructor(selector: string) {
    const elemento = document.querySelector(selector);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${selector} não existe no DOM. Verifique.`);
    }
  }

  // @inspect
  // @logarTempoDeExecucao()
  public update(model: T): void {
    let template = this.template(model);
    this.elemento.innerHTML = template;
  }

  // O método template é abstrato, ou seja, as classes filhas são obrigadas a implementar esse método
  protected abstract template(model: T): string;
}

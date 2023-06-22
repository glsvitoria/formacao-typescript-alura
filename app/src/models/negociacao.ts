import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {
  // Cria por padrão as propriedades privadas diretamente no construtor
  constructor(
    // A propriedade todos tem acesso mas não pode ser alterado
    public _data: Date,
    public readonly quantidade: number,
    public readonly valor: number,
  ) {}

  // Conseguimos usar o método sem precisar instanciar a classe
  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string,
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(date, quantidade, valor);
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    // Programação defensiva para enviar uma cópia da data, e assim caso o usuário altere ela, alterará somente a cópia
    const data = new Date(this._data.getTime());
    return data;
  }

  public paraTexto(): string {
    return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}
    `;
  }

  public ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() == negociacao.data.getDate() &&
      this.data.getMonth() == negociacao.data.getMonth() &&
      this.data.getFullYear() == negociacao.data.getFullYear()
    );
  }
}

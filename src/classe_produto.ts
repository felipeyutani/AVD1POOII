/* 1) Crie uma classe com os atributos produto, preço, quantidade), Crie os métodos
getters e setters. Crie validação para não aceitar nome em branco, preco e
quantidade com valor 0 (zero). Considerando quesão oferecidos descontos pelo
número de quantidade comprada, seguindo a tabela abaixo:
a. Até 10 unidades: não tem desconto
b. de 11 a 20 unidades: 10% de desconto
c. de 21 a 50 unidades: 20% de desconto
d. acima de 50 unidades: 25% de desconto
Imprima a seguinte mensagem: O produto xxx de preço 999, quantidade comprada
de 999 teve o desconto de 999 e o valor pago foi de 99999 */

class Produtos {
    constructor(
        public _produto: string,
        public _preco: number,
        public _quant: number
    ) {}

    get produto() {
        return this._produto
    }

    get preco() {
        return this._preco
    }

    get quant() {
        return this._quant
    }

    set produto(produto: string) {
        if (produto === '') {
            throw new Error('Produto inválido, preencha o campo!')
        }
        this._produto = produto
    }

    set preco(preco: number) {
        if (preco <= 0) {
            throw new Error('Preço Inválido, coloque um numero maior que 0')
        }
        this._preco = preco
    }

    set quant(quant: number) {
        if (quant <= 0) {
            throw new Error('Quantidade inválida, coloque um numero maior que 0!')
        }
        this._quant = quant
    }

    public calculoDesconto(): number {
        if(this.quant <= 10) {
            return this.preco*0
        } else if (this.quant >= 11 && this.quant <= 20) {
            return this.preco*0.10
        } else if (this.quant >= 21 && this.quant <= 50) {
            return this.preco*0.20
        } else if (this.quant >= 50) {
            return this.preco*0.25
        } else{}
        return this.quant
    }

    public valorTotal() {
        return (this.preco - this.calculoDesconto())*this.quant
    }
}

let produtos = new Produtos('Feijão', 10, 5)
console.log(`O produto ${produtos.produto} de preço R$${produtos.preco} reais, quantidade comprada
de ${produtos.quant} teve o desconto de ${produtos.calculoDesconto()} e o valor pago foi de ${produtos.valorTotal()}`)

/* try {
    produtos.produto = ''
    console.log(produtos.produto)
} catch(error) {
    console.log(error.message)
}

try {
    produtos.preco = 0
    console.log(produtos.preco)
} catch(error) {
    console.log(error.message)
}

try {
    produtos.quantidade = 0
    console.log(produtos.quantidade)
} catch(error) {
    console.log(error.message)
}
 */
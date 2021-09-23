/* 3) Crie uma classe de Funcionários com os atributos nome, salario hora, dias
trabalhados, total de faltas no ano. Crie os getters e setters.
Crie um método para calcular o salário bruto que será a multiplicação do salario
hora pelos dias trabalhados.
Crie um método para calcular a PLR. Se o numero de faltas for igual a zero a PLR
será igual ao salário bruto. Se o número de faltas for igual a 1 a PLR será 94% do
salário bruto. Se o número de faltas for igual a 2 a PLR será 92% do salário bruto.
Se o número de faltas for igual a 3 a PLR será 90% do salário bruto. se o número de
faltas for igual a 4 a PLR será 88% do salário bruto. Se o número de faltas for maior
ou igual a 5 a PLR será zero.
Crie um método para calcular o desconto que será 5% do salário bruto.
Crie um método para calcular o salário liquido. Salario bruto - desconto + PLR.
Imprima as seguintes mensagens
O funcionário de nome xx tem o salário bruto de 999, teve 99 falta(s) e sua PLR foi
de 999
O funcionário de nome xx tem o salário bruto de 999, o desconto de 999, a PLR de
999 e o salário líquido de 9999 */

class Funcionarios {
    public _nome: string;
    public _salarioh: number;
    public _diast: number;
    public _tfaltas: number;

    constructor(nome: string, salarioh: number, diast: number, tfaltas: number) {
        this._nome = nome,
        this._salarioh = salarioh,
        this._diast = diast,
        this._tfaltas = tfaltas
    }

    get nome() {
        return this._nome
    }

    get salarioh() {
        return this._salarioh
    }

    get diast(){
        return this._diast
    }

    get tfaltas(){
        return this._tfaltas
    }

    set nome(nome: string){
        if(nome === '') {
            throw new Error('Nome inválido, preencha o campo!')
        }
        this._nome = nome
    }

    set salarioh(salarioh: number){
        if(salarioh < 0) {
            throw new Error('Salário inválido, coloque um numero maior que 0')
        }
        this._salarioh = salarioh
    }

    set diast(diast: number){
        if(diast < 0) {
            throw new Error('Dias trabalhados inválido, coloque um numero maior que 0')
        }
        this._diast = diast
    }

    set tfaltas(tfaltas: number){
        if(tfaltas < 0) {
            throw new Error('Total de faltas inválido, coloque um numero maior que 0')
        }
        this._tfaltas = tfaltas
    }

    public salarioBruto(): number {
        return this.salarioh* this.diast
    }

    public calcularPLR(): number {
        if(this.tfaltas === 0) {
            return this.salarioBruto()
        } else if (this.tfaltas === 1) {
            return this.salarioBruto()*0.06
        } else if (this.tfaltas === 2) {
            return this.salarioBruto()*0.08
        } else if (this.tfaltas === 3) {
            return this.salarioBruto()*0.10
        } else if (this.tfaltas === 4) {
            return this.salarioBruto()*0.12
        } else if (this.tfaltas === 5) {
            return this.salarioBruto()*0
        } else{}
        return this.tfaltas
    }

    public calcularDesconto() {
        return this.salarioBruto()* 0.05
    }

    public salarioLiquido() {
        return (this.salarioBruto() - this.calcularDesconto()) + this.calcularPLR()
    }
}


let func = new Funcionarios('João', 1000, 2, 2)
console.log(func.salarioBruto())
console.log(`O funcionário de nome ${func.nome} tem o salário bruto de ${func.salarioBruto()}, 
teve ${func.tfaltas} falta(s) e sua PLR foi de ${func.calcularPLR()}`)
console.log(`O funcionário de nome ${func.nome} tem o salário bruto de ${func.salarioBruto()}, 
o desconto de ${func.calcularDesconto()}, a PLR de ${func.calcularPLR()} e o salário líquido de ${func.salarioLiquido()}`)

/* try {
    func.nome = ''
    console.log(func.nome)
} catch(error) {
    console.log(error.message)
}

try {
    func.salarioh = -1
    console.log(func.salarioh)
} catch(error) {
    console.log(error.message)
}

try {
    func.diast = -1
    console.log(func.diast)
} catch(error) {
    console.log(error.message)
}

try {
    func.tfaltas = -1
    console.log(func.tfaltas)
} catch(error) {
    console.log(error.message)
} */
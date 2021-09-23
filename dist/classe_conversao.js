"use strict";
/* 2) Escreva a classe ConversaoDeUnidadesDeTempo com métodos estáticos para
conversão das unidades de velocidade segundo a lista abaixo, por exemplo
converMinutoParaSegundo. O método deverá receber a quantidade de minutos e
retornar o valor em segundos.
• 1 minuto = 60 segundos
• 1 hora = 60 minutos
• 1 dia = 24 horas
• 1 semana = 7 dias
POO II - 5o - 1a AVD - TypeScript - 2021-1 2
• 1 mês = 30 dias
• 1 ano = 365.25 dias */
var ConversaoDeUnidadesDeTempo = /** @class */ (function () {
    function ConversaoDeUnidadesDeTempo(_segundos, _minutos, _horas, _dias, _semanas, _meses, _anos) {
        this._segundos = _segundos;
        this._minutos = _minutos;
        this._horas = _horas;
        this._dias = _dias;
        this._semanas = _semanas;
        this._meses = _meses;
        this._anos = _anos;
    }
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "segundos", {
        get: function () {
            return this._segundos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "minutos", {
        get: function () {
            return this._minutos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "horas", {
        get: function () {
            return this._horas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "dias", {
        get: function () {
            return this._dias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "semanas", {
        get: function () {
            return this._semanas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "meses", {
        get: function () {
            return this._meses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConversaoDeUnidadesDeTempo.prototype, "anos", {
        get: function () {
            return this._anos;
        },
        enumerable: false,
        configurable: true
    });
    ConversaoDeUnidadesDeTempo.prototype.converMinutoParaSegundo = function () {
        return this.minutos * 60;
    };
    ConversaoDeUnidadesDeTempo.prototype.converHoraParaMinutos = function () {
        return this.horas * 60;
    };
    ConversaoDeUnidadesDeTempo.prototype.converDiaParaHoras = function () {
        return this.dias * 24;
    };
    ConversaoDeUnidadesDeTempo.prototype.converSemanaParaDias = function () {
        return this.semanas * 7;
    };
    ConversaoDeUnidadesDeTempo.prototype.converMesParaDias = function () {
        return this.meses * 30;
    };
    ConversaoDeUnidadesDeTempo.prototype.converAnoParaDias = function () {
        return this.anos * 365.25;
    };
    return ConversaoDeUnidadesDeTempo;
}());
var conversao = new ConversaoDeUnidadesDeTempo(0, 5, 10, 5, 10, 0, 2);
// Segundos, minutos, horas, dias, semanas, meses, anos
console.log(conversao.minutos + " minutos tem " + conversao.converMinutoParaSegundo() + " segundos");
console.log(conversao.horas + " horas tem " + conversao.converHoraParaMinutos() + " minutos");
console.log(conversao.dias + " dias tem " + conversao.converDiaParaHoras() + " horas");
console.log(conversao.semanas + " semanas tem " + conversao.converSemanaParaDias() + " dias");
console.log(conversao.anos + " anos tem " + conversao.converAnoParaDias() + " dias");

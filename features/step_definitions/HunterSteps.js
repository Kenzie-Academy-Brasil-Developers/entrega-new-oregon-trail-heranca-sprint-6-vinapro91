const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { cacador, viajante } = require("./../../app");

/** GIVEN */

    Given('um Hunter de nome {string}', function (string) {
        cacador.nome = string
    });

    Given('sua comida começa em {int}', function (int) {
       cacador.comida === int
    });
    
/** WHEN */

    When('o Hunter parar para comer {int} vezes', function (int) {
        for (let i = 0; i<int; i ++){
            cacador.eat()
            }
        });

    When('o Hunter sair para caçar {int} vezes', function (int) {
        for (let i = 0; i<int; i ++){
        cacador.hunt()
        }
    });
  
    When('a comida for maior que {int}', function (int) {
            cacador.food > int
        });

    When('o Hunter der {int} comida para outro viajante', function (int) {
        cacador.giveFood(viajante, int)
        });

    When('a comida for igual a {int}', function (int) {
        cacador.food === int
        });

/** THEN */
    Then('a comida decai para {int}', function (int) {
        cacador.food === int
    });
    Then('o Hunter não ficará doente', function () {
        assert.strictEqual(cacador.isHealthy, true)
    });

    Then('o Hunter ficará doente', function () {
        cacador.isHealthy === false
    });
    Then('a comida deve ser {int}', function (int) {
        cacador.food === int
    });

    Then('o viajante fica com {int} de comida', function (int) {
        viajante.food === int
    });
    Then('o Hunter fica com {int} de comida', function (int) {
        cacador.food === int
    });
    Then('a comida do Hunter permanece igual a {int}', function (int) {
        cacador.food === int
    });
    Then('a comida do Hunter permanece igual', function () {
       cacador.comida = cacador.comida
      });
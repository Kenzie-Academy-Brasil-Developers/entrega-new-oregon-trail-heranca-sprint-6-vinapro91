const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Doctor = require("../../models/Doctor");

const { doutor, viajante } = require("./../../app");



/** GIVEN */

    Given('um Doctor de nome {string}', function (string) {
        doutor.nome = string
    });
    
    Given('tem a habilidade de curar', function () {
        
    });

/** WHEN */

    When('o Doctor cura {int} vez', function (int) {
    doutor.heal(viajante)
    });
    When('o Doctor comer {int} vezes', function (int) {
        doutor.eat()
        });
        When('a comida foi maior que {int}', function (int) {
           doutor.food>int
            });
/** THEN */
Then('o Doctor segue saudavel', function () {
    doutor.isHealthy
  });
Then('o viajante fica saudave', function () {
    assert.strictEqual(viajante.isHealthy, true)
  });
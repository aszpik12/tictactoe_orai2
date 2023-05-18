import Jatekter from "../Jatekter.js";

QUnit.module("játéktér ellenőrzés metódusainak tesztelése", function (hooks) {
  let jatekter;
  hooks.before(() => {
    jatekter = new Jatekter();
  });

  QUnit.test("ellenőrzés létezik-e?", function (assert) {
    assert.ok(jatekter.ellenorzes, "létezik az ellenőrzés metódus");
  });

  QUnit.test("üres lista", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", " ", " "," "," "]
    assert.equal(jatekter.getVizszintes(), "   @   @   @")
  });

  QUnit.test("3 x", function (assert) {
    jatekter.lista = ["x", "x", "x", " ", " ", " ", " "," "," "]
    assert.equal(jatekter.getVizszintes(), "xxx@   @   @")
  });

  QUnit.test("szünet közte", function (assert) {
    jatekter.lista = ["x", " ", "x", "x", " ", " ", " "," ","x"]
    assert.equal(jatekter.getVizszintes(), "x x@x  @  x@")
  });

  QUnit.test("szünet közte fuggoleges", function (assert) {
    jatekter.lista = ["x", " ", "x", "x", "x", " ", " "," ","x"]
    assert.equal(jatekter.getFuggoleges(), "xx @ x @x x@")
  });

  QUnit.test("3 o", function (assert) {
    jatekter.lista = [" ", " ", " ", "o", "o", "o", " "," "," "]
    assert.equal(jatekter.getVizszintes(), "   @ooo@   @")
  });

  QUnit.test("getVizszintes létezik-e?", function (assert) {
    assert.ok(jatekter.getVizszintes(), "létezik az getVizszintes metódus");
  });

  QUnit.test("jobb lent 2x függöleges", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", " ", " ","x","x"]
    assert.equal(jatekter.getFuggoleges(), "   @  x@  x@")
  });

  QUnit.test("jobb lent 2x vizszintes", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", "x", " "," ","x"]
    assert.equal(jatekter.getVizszintes(), "   @  x@  x@")
  });

  QUnit.test("üres függöleges teszt", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", " ", " "," "," "]
    assert.equal(jatekter.getFuggoleges(), "   @   @   @")
  });

  QUnit.test("3x fuggoleges", function (assert) {
    jatekter.lista = [" ", " ", " ", " ", " ", " ", "x","x","x"]
    assert.equal(jatekter.getFuggoleges(), "  x@  x@  x@")
  });

  QUnit.test("tele nincs nyertes", function (assert) {
    jatekter.lista = ["o", "x", "o", "x", "o", "x", "x","o","x"]
    assert.equal(jatekter.getVizszintes(), "oxo@xox@xox@")
  });

  QUnit.test("tele van nyertes", function (assert) {
    jatekter.lista = ["o", "o", "x", "o", "o", "x", "x","x","x"]
    assert.equal(jatekter.getVizszintes(), "oox@oox@xxx@")
  });


});

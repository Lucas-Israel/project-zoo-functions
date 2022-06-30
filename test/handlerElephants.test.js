const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Se ao receber "count" como parametro retorna o valor esperado', () => {
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants('count')).not.toEqual(5);
  });
  it('Se ao receber "names" como parametro retorna um array de nomes com os valores esperados', () => {
    expect(handlerElephants('names')).toContain('Ilana');
    expect(handlerElephants('names')).toContain('Orval');
    expect(handlerElephants('names')).toContain('Bea');
    expect(handlerElephants('names')).toContain('Jefferson');
    expect(handlerElephants('names')).not.toContain(5);
  });
  it('Se ao receber "averageAge" como parametro retorna o valor esperado', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    expect(handlerElephants('averageAge')).not.toEqual(15);
  });
  it('Se ao não receber um parametro retorna nada', () => {
    expect(handlerElephants()).toBe();
  });
  it('Se ao escrever um parametro que não esteja previsto retorna null', () => {
    expect(handlerElephants('abcd')).toBeNull();
  });
  it('Se o parametro for diferente de uma string retorna uma string de aviso', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Se o parametro passado existir como uma chave no objeto, retorna o valor correto', () => {
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
  });
});

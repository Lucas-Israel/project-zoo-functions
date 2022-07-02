const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Se não receber nenhum parametro, retorn os todos os dias', () => {
    const expected = { Friday: { close: 8, open: 10 },
      Monday: { close: 0, open: 0 },
      Saturday: { close: 10, open: 8 },
      Sunday: { close: 8, open: 8 },
      Thursday: { close: 8, open: 10 },
      Tuesday: { close: 6, open: 8 },
      Wednesday: { close: 6, open: 8 } };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Se receber "Monday" e "09:00-AM" como parametro retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Se receber "Tuesday" e "09:00-AM" como parametro retorna "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Se receber "Wednesday" e "09:00-PM" como parametro retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Se receber letras no lugar das horas no parametro a função deve dar throw em um erro', () => {
    expect(() => getOpeningHours('Wednesday', 'bb:bb-PM')).toThrow();
  });
  it('Se receber uma formatação diferente de AM ou PM nas horas no parametro a função deve dar throw em um erro', () => {
    expect(() => getOpeningHours('Wednesday', '09:00-QQ')).toThrow();
  });
  it('Se o formato de horário não estiver no de 12 horas, recebe um erro', () => {
    expect(() => getOpeningHours('Wednesday', '13:00-PM')).toThrow();
    expect(() => getOpeningHours('Wednesday', '12:75-PM')).toThrow();
  });
  it('Se receber uma string que não seja um dia da semana em inglês no singular, retorna um erro', () => {
    expect(() => getOpeningHours('Wednesdays', '09:00-PM')).toThrow();
  });
});

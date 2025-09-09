import {
  describe, expect, it,
} from '@jest/globals';
import Evento from '../../models/eventos.js';

describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'Comunidade das Letras',
    descricao: 'Evento voltado para quem gosta e cursa a faculdade de letras',
    data: '2025-08-09',
    autor_id: 1,
  };
  it('Deve instanciar um novo evento', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(
      expect.objectContaining(objetoEvento),
    );
  });
});

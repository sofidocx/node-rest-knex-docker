/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
import db from '../db/dbconfig.js';

class Evento {
  constructor({
    id,
    nome,
    descricao,
    data,
    autor_id,
    created_at,
    updated_at,
  }) {
    this.id = null || id;
    this.nome = nome;
    this.descricao = descricao;
    this.data = data;
    this.autor_id = autor_id;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }

  static async pegarEventos() {
    return [{
      id: 1,
      nome: 'lancamento',
      descricao: 'descricao',
      data: '2025-05-09',
      autor_id: 23,
      created_at: '2025-09-09 07:00:00',
      updated_at: '2025-09-09 07:00:00',
    }];
  }
}

export default Evento;

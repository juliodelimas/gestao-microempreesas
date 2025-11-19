const scheduleModel = require('../models/scheduleModel');

module.exports = {
  create({ userId, date, hour, type, client }) {
    if (scheduleModel.findConflict(userId, date, hour)) {
      const err = new Error('Conflito de horário para o agendamento');
      err.status = 409;
      throw err;
    }
    if (!date || !hour || !type || !client) {
      const err = new Error('Campos obrigatórios não preenchidos');
      err.status = 400;
      throw err;
    }
    return scheduleModel.create({ userId, date, hour, type, client });
  },
  list(userId, { status, from, to }) {
    return scheduleModel.filterBy(userId, { status, from, to });
  },
  updateStatus(id, status) {
    return scheduleModel.updateStatus(id, status);
  }
};
const scheduleService = require('../services/scheduleService');

module.exports = {
  create(req, res, next) {
    try {
      const userId = req.user.id;
      const schedule = scheduleService.create({ userId, ...req.body });
      res.status(201).json(schedule);
    } catch (err) {
      next(err);
    }
  },
  list(req, res, next) {
    try {
      const userId = req.user.id;
      const { status, from, to } = req.query;
      const schedules = scheduleService.list(userId, { status, from, to });
      res.json(schedules);
    } catch (err) {
      next(err);
    }
  },
  updateStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const updated = scheduleService.updateStatus(id, status);
      if (!updated) return res.status(404).json({ error: 'Agendamento não encontrado' });
      res.json(updated);
    } catch (err) {
      next(err);
    }
  }
};
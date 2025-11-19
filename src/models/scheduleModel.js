const { v4: uuidv4 } = require('uuid');
const schedules = [];

module.exports = {
  create(schedule) {
    const newSchedule = { id: uuidv4(), status: 'pendente', ...schedule };
    schedules.push(newSchedule);
    return newSchedule;
  },
  findById(id) {
    return schedules.find(s => s.id === id);
  },
  findByUserId(userId) {
    return schedules.filter(s => s.userId === userId);
  },
  findConflict(userId, date, hour) {
    return schedules.find(s => s.userId === userId && s.date === date && s.hour === hour);
  },
  getAll() {
    return schedules;
  },
  filterBy(userId, { status, from, to }) {
    return schedules.filter(s => {
      if (s.userId !== userId) return false;
      if (status && s.status !== status) return false;
      if (from && s.date < from) return false;
      if (to && s.date > to) return false;
      return true;
    });
  },
  updateStatus(id, status) {
    const schedule = schedules.find(s => s.id === id);
    if (schedule) schedule.status = status;
    return schedule;
  }
};
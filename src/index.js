const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');
const authMiddleware = require('./middleware/auth');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');

const app = express();
app.use(express.json());

// Swagger setup
const swaggerFile = path.join(__dirname, '../resources/swagger.json');
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFile, 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Public routes
app.use('/auth', authRoutes);
app.use('/users', require('./routes/userRoutes'));

// Protected routes
app.use('/schedules', authMiddleware, scheduleRoutes);

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Erro interno do servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

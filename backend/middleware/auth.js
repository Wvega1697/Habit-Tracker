const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Obtener el token desde el header 'Authorization' (Formato: Bearer <token>)
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).json({ message: 'Acceso denegado: No se proporcionó token.' });
  }
  const token = authHeader.split(' ')[1]; // Extraer el token

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado: Token mal formado.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Agregar datos del usuario decodificados a la petición
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token inválido.' });
  }
};

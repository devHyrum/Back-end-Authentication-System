import { pool } from '../config/db.js';
import bcrypt from 'bcrypt';

const verifyUsuario = async (id) => {
  const [usuario] = await pool.execute(
    'SELECT usuario_id, nombre, email, bio, phoneNumber, photoUser FROM usuario WHERE usuario_id = ?',
    [id]
  );
  return usuario[0];
};

const registerUsuario = async (email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const [resultado] = await pool.execute(
    'INSERT INTO usuario(email, password) VALUES (?, ?)',
    [email, hashedPassword]
  );
  return resultado;
};


const findUsuarioByEmail = async (email) => {
  const [usuario] = await pool.execute(
    'SELECT * FROM usuario WHERE email = ?',
    [email]
  );
  return usuario[0];
};

const updateUsuario = async (id, nombre, email, password, bio, phoneNumber, photoUser) => {
  const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
  let query = 'UPDATE usuario SET nombre = ?, email = ?, bio = ?, phoneNumber = ?';
  let params = [nombre, email, bio, phoneNumber];

  if (hashedPassword) {
    query += ', password = ?';
    params.push(hashedPassword);
  }

  if (photoUser) {
    query += ', photoUser = ?';
    params.push(photoUser);
  }

  query += ' WHERE usuario_id = ?';
  params.push(id);

  const [resultado] = await pool.execute(query, params);
  return resultado;
};

export default { verifyUsuario, registerUsuario, findUsuarioByEmail, updateUsuario };
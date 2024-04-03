const mysql = require("mysql2");

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

const pool = mysql
  .createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  })
  .promise();

async function getAllnotes() {
  const [rows] = await pool.query("select * from coment");
  return rows;
}

async function getNote(id) {
  const [rows] = await pool.query(
    `
  SELECT * 
  FROM coment
  WHERE id = ?
  `,
    [id]
  );
  return rows[0];
}

async function createNote(name, email, message) {
  const [result] = await pool.query(
    `
  INSERT INTO coment (name, email, message)
  VALUES (?, ?, ?)
  `,
    [name, email, message]
  );
  const id = result.insertId;
  return getNote(id);
}

async function deleteMessage(id) {
  const [result] = await pool.query(
    `
      DELETE FROM coment
      WHERE id = ?
      `,
    [id]
  );

  return result;
}

module.exports = {
  getAllnotes,
  getNote,
  createNote,
  deleteMessage,
};

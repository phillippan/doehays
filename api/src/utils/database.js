import Database from 'better-sqlite3';

const db = new Database('doe.sqlite3');
// db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS location (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    position TEXT NOT NULL,
    origin TEXT,
    destination TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;
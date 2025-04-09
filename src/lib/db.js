// src/lib/db.js
import mysql from "mysql2/promise";

export const db = await mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",      // ใส่รหัสผ่านของคุณ
  database: "mydb",  // ชื่อฐานข้อมูล
});

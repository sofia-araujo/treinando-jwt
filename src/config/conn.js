import { Sequelize } from "sequelize";

const conn = new Sequelize('testlogin', 'root', 'SofiaDev!22#', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  await conn.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
export default conn
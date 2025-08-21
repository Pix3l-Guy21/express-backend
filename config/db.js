import { Sequelize } from "sequelize";
import dbConfig from './database.js';

const dbConf = process.env.NODE_ENV || dbConfig['development'];

export const sequelize = new Sequelize(dbConf);
export default sequelize;
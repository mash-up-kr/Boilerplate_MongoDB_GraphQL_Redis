import path from 'path';
import dotenv from 'dotenv';

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  dotenv.config({path: path.join(__dirname, '../.env.production')});
} else if (process.env.NODE_ENV === 'test') {
  dotenv.config({path: path.join(__dirname, '../.env.test')});
} else if (process.env.NODE_ENV === 'development' ||
              process.env.NODE_ENV === undefined) {
  dotenv.config({path: path.join(__dirname, '../.env.development')});
} else {
  throw new Error('process.env.NODE_ENV를 올바르게 설정해주세요!');
}

export default dotenv;

import fs from 'fs';
import path from 'path';

const src = './src';
const dist = './dist';

if (!fs.existsSync(dist)) fs.mkdirSync(dist);

fs.readdirSync(src).forEach(file => {
  fs.copyFileSync(path.join(src, file), path.join(dist, file));
});
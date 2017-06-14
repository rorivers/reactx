import path from 'path';
import gaze from 'gaze';
import { writeFile, copyFile, makeDir, copyDir, cleanDir } from './lib/fs';
import pkg from '../package.json';

async function copy() {
  await makeDir('build');
  await Promise.all(
    writeFile('build/package.json', JSON.stringify({
      private: true,
      engines: pkg.engines,
      dependencies: pkg.dependencies,
      scripts: {
        start: 'node server.js',
      },
    }), null, 2),
    copyFile('LICENSE.txt', 'build/LICENSE.txt'),
    copyDir('src/content', 'build/content'),
    copyDir('src/public', 'build/public'),
    copyDir('src/messages', 'build/messages'),
  );

  if (process.argv.includes('--watch')) {
    const watcher = await new Promise((resolve, reject) => {
      gaze([
        'src/content/**/*',
        'src/public/**/*',
      ], (err, val) => (err ? reject(err) : resolve(val)));
    });

    watcher.on('all', async (event, filePath) => {
      const dist = path.join('build/', path.relative('src', filePath));
      switch (event) {
        case 'added':
        case 'renamed':
        case 'changed':
          if (filePath.endsWith('/')) return;
          await makeDir(path.dirname(dist));
          await copyFile(filePath, dist);
          break;
        case 'deleted':
          cleanDir(dist, { nosort: true, dot: true });
          break;
        default:
          return;
      }
      console.log(`[file ${event}] ${dist}`); // eslint-disable-line no-console
    });
  }
}

export default copy;

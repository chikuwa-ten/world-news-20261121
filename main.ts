import { copyFileSync } from 'node:fs';

copyFileSync(new URL('./entry.png', import.meta.url), (process.env.MAKEFUN_OUTPUT_DIR ?? '/output') + '/entry.png');

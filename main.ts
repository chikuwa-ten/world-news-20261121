import { copyFileSync } from 'node:fs';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), `${out}/entry.png`);

'use client';

import { hc } from 'hono/client';

import type { App } from './server';

const client = hc<App>('');

export { client };

import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { requestId } from 'hono/request-id';
import { secureHeaders } from 'hono/secure-headers';

const middleware = new Hono();

middleware.use('*', logger());
middleware.use('*', requestId());
middleware.use(
  '*',
  cors({
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    origin: ['realmond.dev', 'realmond.com', ' *.realmond.dev', '*.realmond.com'],
  })
);
middleware.use(
  '*',
  secureHeaders({
    xFrameOptions: 'DENY',
    xXssProtection: '1',
    strictTransportSecurity: 'max-age=63072000; includeSubDomains; preload',
  })
);

export { middleware };

/* eslint-disable max-len */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

// default locale is the first one
export const locales = ['en-US', 'zh-CN'];

export const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';

export const auth = {
  jwt: { secret: process.env.JWT_SECRET || 'ro90rivers18' },
};

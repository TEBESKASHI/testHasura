import { KnexPostgresConfig } from './interface';

import { ENV } from '../../etc';

export const knexPostgresConfig: KnexPostgresConfig = {
    client: 'pg',
    connection: {
        host: ENV.POSTGRES_HOST,
        port: parseInt(ENV.POSTGRES_PORT) || 5432,
        database: ENV.POSTGRES_DB,
        user: ENV.POSTGRES_USER,
        password: ENV.POSTGRES_PASSWORD,
        // connectionString: ENV.CONNECTION_STRING,
    },
    pool: {
        max: 10,
        min: 2,
    },
    migrations: {
        directory: './dist/database/migrations',
        extension: 'ts',
    },
    seeds: {
        directory: './dist/database/seeds',
        extension: 'ts',
    },
};

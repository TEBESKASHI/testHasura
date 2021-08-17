import knex from 'knex';

import { knexPostgresConfig } from './config';

const pg = knex(knexPostgresConfig);

export default pg;

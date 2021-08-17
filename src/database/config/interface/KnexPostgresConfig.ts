export type KnexPostgresConfig = {
    connection: {
        host?: string;
        port?: number;
        database?: string;
        user?: string;
        password?: string;
        connectionString?: string;
    };
    client: string;
    pool: {
        min: number;
        max: number;
    };
    migrations: {
        directory: string;
        extension: string;
    };
    seeds: {
        directory: string;
        extension: string;
    };
};

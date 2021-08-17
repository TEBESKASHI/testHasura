import pg from '.';

export const databaseConnect = async () => {
    // await pg.migrate.latest();
    await pg.seed.run();
};

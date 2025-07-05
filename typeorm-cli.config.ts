import { DataSource } from 'typeorm';
// import { CoffeeRefactor1751745769643 } from './src/migrations/1751745769643-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { SchemaSyncCommand } from 'typeorm/commands/SchemaSyncCommand';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [
    // CoffeeRefactor1751745769643, // example, the migration itself not needed and isn't synced with entity
    SchemaSyncCommand,
  ],
});

import { MigrationInterface, QueryRunner } from 'typeorm';

export class ShemaSync1751746188550 implements MigrationInterface {
  name = 'ShemaSync1751746188550';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
  }
}

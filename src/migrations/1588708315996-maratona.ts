import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class maratona1588708315996 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'maratonas',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'aula',
                    type: 'varchar'
                }
            ]    
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('maratonas')
    }

}

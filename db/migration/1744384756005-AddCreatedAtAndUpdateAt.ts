import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddCreatedAtAndUpdateAt1744384756005 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('users', [
            new TableColumn({ name: 'createdAt', type: 'timestamp', isNullable: false, default: 'now()' }),
            new TableColumn({ name: 'updatedAt', type: 'timestamp', isNullable: false, default: 'now()' })
        ]);

        await queryRunner.addColumns('posts', [
            new TableColumn({ name: 'createdAt', type: 'timestamp', isNullable: false, default: 'now()' }),
            new TableColumn({ name: 'updatedAt', type: 'timestamp', isNullable: false, default: 'now()' }),
        ]);

        await queryRunner.addColumns('comments', [
            new TableColumn({ name: 'createdAt', type: 'timestamp', isNullable: false, default: 'now()' }),
            new TableColumn({ name: 'updatedAt', type: 'timestamp', isNullable: false, default: 'now()' }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'createdAt');
        await queryRunner.dropColumn('users', 'updatedAt');

        await queryRunner.dropColumn('posts', 'createdAt');
        await queryRunner.dropColumn('posts', 'updatedAt');

        await queryRunner.dropColumn('comments', 'createdAt');
        await queryRunner.dropColumn('comments', 'updatedAt');
    }

}

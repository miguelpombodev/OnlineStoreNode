import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateProductColorTableAndAlterProducts1642032011866
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('Product', 'ProductUrl');

    await queryRunner.createTable(
      new Table({
        name: 'ProductColors',
        columns: [
          {
            name: 'Id',
            type: 'uniqueidentifier',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'ProductId',
            type: 'uniqueidentifier',
            isNullable: false,
          },
          {
            name: 'Name',
            type: 'varchar(25)',
            isNullable: false,
          },
          {
            name: 'ProductColorUrl',
            type: 'nvarchar(200)',
            isNullable: false,
          },
          {
            name: 'CreatedAt',
            type: 'datetime2',
            isNullable: false,
            default: 'GETDATE()',
          },
          {
            name: 'UpdatedAt',
            type: 'datetime2',
            isNullable: false,
            default: 'GETDATE()',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'ProductColors',
      new TableForeignKey({
        name: 'FK_PRODCOLOR_PRODID',
        columnNames: ['ProductId'],
        referencedColumnNames: ['Id'],
        referencedTableName: 'Product',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('ProductColors', 'FK_PRODCOLOR_PRODID');
    await queryRunner.dropTable('ProductColors');
    await queryRunner.addColumn(
      'Product',
      new TableColumn({
        name: 'ProductUrl',
        type: 'nvarchar',
        isNullable: true,
      })
    );
  }
}

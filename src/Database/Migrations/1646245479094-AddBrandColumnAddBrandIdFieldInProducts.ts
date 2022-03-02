import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddBrandColumnAddBrandIdFieldInProducts1646245479094
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ProductBrand',
        columns: [
          {
            name: 'Id',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'Name',
            type: 'nvarchar(15)',
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

    await queryRunner.addColumn(
      'Product',
      new TableColumn({
        name: 'BrandId',
        type: 'int',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      'Product',
      new TableForeignKey({
        name: 'FK_PROD_BRANDID',
        columnNames: ['BrandId'],
        referencedColumnNames: ['Id'],
        referencedTableName: 'ProductBrand',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('Product', 'FK_PROD_BRANDID');
    await queryRunner.dropTable('ProductBrand');
    await queryRunner.dropColumn('Product', 'BrandId');
  }
}

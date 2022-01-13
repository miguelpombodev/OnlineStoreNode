import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class CreateDatabaseFirstStructure1641201667567
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ProductType',
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
            name: 'Description',
            type: 'nvarchar(50)',
            isNullable: false,
          },
          {
            name: 'Name',
            type: 'nvarchar(40)',
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

    await queryRunner.createTable(
      new Table({
        name: 'Product',
        columns: [
          {
            name: 'Id',
            type: 'uniqueidentifier',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'TypeId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'Sku',
            type: 'varchar(15)',
            isNullable: false,
          },
          {
            name: 'Name',
            type: 'nvarchar(100)',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'Value',
            type: 'decimal(6,2)',
            isNullable: false,
          },
          {
            name: 'StockAmount',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'ProductUrl',
            type: 'nvarchar',
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

    await queryRunner.createTable(
      new Table({
        name: 'Customers',
        columns: [
          {
            name: 'Id',
            type: 'uniqueidentifier',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'Name',
            type: 'nvarchar(15)',
            isNullable: false,
          },
          {
            name: 'Surname',
            type: 'nvarchar(100)',
            isNullable: false,
          },
          {
            name: 'CPF',
            type: 'char(11)',
            isNullable: false,
          },
          {
            name: 'Email',
            type: 'nvarchar(30)',
            isNullable: false,
          },
          {
            name: 'Password',
            type: 'nvarchar(64)',
            isNullable: false,
          },
          {
            name: 'Cellphone',
            type: 'char(11)',
            isNullable: true,
          },
          {
            name: 'Address',
            type: 'varchar(60)',
            isNullable: true,
          },
          {
            name: 'Neighborhood',
            type: 'varchar(20)',
            isNullable: true,
          },
          {
            name: 'City',
            type: 'varchar(30)',
            isNullable: true,
          },
          {
            name: 'UF',
            type: 'char(2)',
            isNullable: true,
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

    await queryRunner.createIndex(
      'Product',
      new TableIndex({
        name: 'IX_PRODUCT_SKU',
        columnNames: ['Sku'],
      })
    );

    await queryRunner.createForeignKey(
      'Product',
      new TableForeignKey({
        name: 'FK_PROD_PRODTYPE',
        columnNames: ['TypeId'],
        referencedColumnNames: ['Id'],
        referencedTableName: 'ProductType',
      })
    );

    await queryRunner.createIndex(
      'Customers',
      new TableIndex({
        name: 'IX_CUSTOMER_EMAIL',
        columnNames: ['Email'],
      })
    );

    await queryRunner.createIndex(
      'Customers',
      new TableIndex({
        name: 'IX_CUSTOMER_CPF',
        columnNames: ['CPF'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('Product', 'FK_PROD_PRODTYPE');
    await queryRunner.dropIndex('Product', 'IX_PRODUCT_SKU');
    await queryRunner.dropIndex('Customers', 'IX_CUSTOMER_EMAIL');
    await queryRunner.dropIndex('Customers', 'IX_CUSTOMER_CPF');
    await queryRunner.dropTable('ProductType');
    await queryRunner.dropTable('Product');
    await queryRunner.dropTable('Customers');
  }
}

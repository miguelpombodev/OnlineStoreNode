import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateCartTablesStructure1642034936471
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Carts',
        columns: [
          {
            name: 'Id',
            type: 'uniqueidentifier',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'CustomerId',
            type: 'uniqueidentifier',
            isNullable: false,
          },
          {
            name: 'Purchased',
            type: 'bit',
            default: 0,
          },
        ],
      })
    );

    await queryRunner.createTable(
      new Table({
        name: 'CartItems',
        columns: [
          {
            name: 'Id',
            type: 'uniqueidentifier',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'CustomerId',
            type: 'uniqueidentifier',
            isNullable: false,
          },
          {
            name: 'CartId',
            type: 'uniqueidentifier',
            isNullable: false,
          },
          {
            name: 'ProductId',
            type: 'uniqueidentifier',
            isNullable: false,
          },
          {
            name: 'ItemQuantity',
            type: 'int',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'Carts',
      new TableForeignKey({
        name: 'FK_CART_CUSTOMER',
        columnNames: ['CustomerId'],
        referencedColumnNames: ['Id'],
        referencedTableName: 'Customers',
      })
    );

    await queryRunner.createForeignKey(
      'CartItems',
      new TableForeignKey({
        name: 'FK_CARTITEMS_CART',
        columnNames: ['CartId'],
        referencedColumnNames: ['Id'],
        referencedTableName: 'Carts',
      })
    );

    await queryRunner.createForeignKey(
      'CartItems',
      new TableForeignKey({
        name: 'FK_CARTITEMS_CUSTOMER',
        columnNames: ['CustomerId'],
        referencedColumnNames: ['Id'],
        referencedTableName: 'Customers',
      })
    );

    await queryRunner.createForeignKey(
      'CartItems',
      new TableForeignKey({
        name: 'FK_CARTITEMS_PRODID',
        columnNames: ['ProductId'],
        referencedColumnNames: ['Id'],
        referencedTableName: 'Product',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('Carts', 'FK_CART_USER');
    await queryRunner.dropForeignKey('CartItems', 'FK_CARTITEMS_CART');
    await queryRunner.dropForeignKey('CartItems', 'FK_CARTITEMS_USER');
    await queryRunner.dropForeignKey('CartItems', 'FK_CARTITEMS_PRODID');
    await queryRunner.dropTable('Carts');
    await queryRunner.dropTable('CartItems');
  }
}

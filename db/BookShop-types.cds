namespace com.bookshop.types;

using {
//    managed,
//    cuid,
    Currency
} from '@sap/cds/common';
//Number of books in stock type
define type NoOfBooks : Integer;
//Book´s price per unit type
define type Price {
    amount : Decimal(10,2);
    Currency : Currency
} 

//Book´s genre numeric type
define type Genre : Integer enum {
    fiction     = 1;
    non_fiction = 2;
};


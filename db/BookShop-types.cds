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
    currency : Currency
} 

//Book´s genre numeric type
define type Genre : Integer enum {
    fiction     = 1;
    non_fiction = 2;
};

//Book´s sex string type
define type Gender : String(1) enum {
    Male   = 'M';
    Female = 'F';
}

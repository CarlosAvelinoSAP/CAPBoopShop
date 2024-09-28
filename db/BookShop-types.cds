namespace com.bookshop.types;

using {
//    managed,
//    cuid,
    Currency
} from '@sap/cds/common';

define type NoOfBooks : Integer;
define type Price {
    amount : Decimal(10,2);
    Currency : Currency
} 


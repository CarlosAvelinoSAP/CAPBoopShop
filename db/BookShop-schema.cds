using {
    managed,
    cuid
} from '@sap/cds/common';

namespace com.bookshop;


entity Book : managed, cuid {

    key ID    : Integer;
        title : String;
        price : Decimal(10, 2);
        stock : Integer;
}

using {
    managed,
    cuid
} from '@sap/cds/common';

namespace com.bookshop;


entity Book : managed, cuid {

    // key ID    : Integer;
        title : String @mandatory;
        price : Decimal(10, 2) @mandatory;
        stock : Integer default 0;
}

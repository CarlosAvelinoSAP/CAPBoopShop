
using {
    managed,
    cuid
} from '@sap/cds/common';

using {
    com.bookshop.types.NoOfBooks,
    com.bookshop.types.Price
} from './BookShop-types';

namespace com.bookshop;


entity Books : managed, cuid {

    // key ID    : Integer;
        title : String @mandatory;
        price : Price @mandatory;
        stock : NoOfBooks default 0;
}

define entity Authors : cuid {
    name: String;
    dateOfBirth: Date;
    dateOfDeath: Date;
}

//define type NoOfBooks : Integer;


using {
    managed,
    cuid
} from '@sap/cds/common';

using {
    com.bookshop.types.NoOfBooks,
    com.bookshop.types.Price,
    com.bookshop.types.Genre,
    com.bookshop.types.Sex
} from './BookShop-types';

namespace com.bookshop;


entity Books : managed, cuid {

    // key ID    : Integer;
        title : String @mandatory;
        price : Price @mandatory;
        authors : Association to many Authors;
        stock : NoOfBooks default 0;
        genre : Genre;
}

define entity Authors : cuid {
    name: String;
    sex : Sex;
    books : Association to many Books
                on books.authors = $self;
    dateOfBirth: Date;
    dateOfDeath: Date;
}

//define type NoOfBooks : Integer;


using {
    managed,
    cuid,
    sap.common.CodeList,
    Country
} from '@sap/cds/common';

using {
    com.bookshop.types.NoOfBooks,
    com.bookshop.types.Price,
    com.bookshop.types.Genre,
    com.bookshop.types.Gender
    //com.bookshop.types { NoOfBooks, Genre ; Gender; Price }
} from './BookShop-types';

//namespace com.bookshop
namespace com.bookshop;


entity Books : managed, cuid, MyLocalAspect {

    // key ID    : Integer;
        title : localized String @mandatory;
        price : Price @mandatory;
        //authors : Association to many Authors
        //            on authors.ID = ID;
        authors : Association to Authors @mandatory @assert.target;
        stock : NoOfBooks default 0;
        genre : Genre @assert.range : true;
        publCountry : Country;
        isHandCover : Boolean;
}

define entity Authors : cuid, MyLocalAspect {
    name: String @mandatory;
    gender : Gender @assert.range : true;
    books : Association to many Books
                on books.authors = $self;
    dateOfBirth: Date;
    dateOfDeath: Date;
    epoch : Association to Epochs @assert.target;
}

// Code list is used as a value help list for frontend
entity Epochs : CodeList {
  key ID    : Integer;
      name  : localized String(255);
      descr : localized String(1000);
}

//define type NoOfBooks : Integer;
extend Authors with {
    intField : Integer @(baz)
};

aspect MyLocalAspect {
    localField : String(3);
    teste2 : String(1) @cds.on.insert : 'A';
}



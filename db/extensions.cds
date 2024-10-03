using {
    com.bookshop.Authors,
    com.bookshop.Books
} from './BookShop-schema';

using { com.custom.aspects as custAspects } from './CustomAspects';

extend Authors   with custAspects.CustomAuthorsAspect, custAspects.CustomCommonAspect ;
extend Books     with custAspects.CustomCommonAspect;


/* aspect AuthorsAspect {
    strField : Integer @(baz);
    decField : Decimal @(baz);
    createdAt : Timestamp;
    createdBy : String(255);
} */





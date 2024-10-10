using { com.bookshop as db } from '../db/BookShop-schema';

service CatalogService @(path : '/cat', impl:'srv/cat.js') {

    entity Books as
         projection on db.Books {
            ID,
            title,
            authors.name as writer,
            publCountry.name  as publCountry,
            isHandCover,
            price.amount,
            price.currency,
            stock,
            authors
    };

    entity Authors as 
        projection on db.Authors {
            *,
            epoch.name as period
    }
    excluding {
        createdAt,
        createdBy,
        modifiedAt,
        modifiedBy
    }
    ;
    action submitOrder(book : db.Books:ID, quantity: Integer) returns {
        stock : db.Books:stock
    }
}
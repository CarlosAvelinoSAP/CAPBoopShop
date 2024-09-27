using { com.bookshop as book } from '../db/BookShop-schema';

service BookShopService {

    entity Books as projection on book.Books;
    entity Authors as projection on book.Authors;
}
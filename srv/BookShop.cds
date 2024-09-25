using { com.bookshop as book } from '../db/BookShop-schema';

service BookShopService {

    entity Book as projection on book.Book;

}
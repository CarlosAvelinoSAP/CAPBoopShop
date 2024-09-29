using { com.bookshop as book } from '../db/BookShop-schema';

//com o uso de path 'admin', substitui o caminho completo '/odata/v4/admin' por 'admin'
service AdminService @(path: '/admin') {
    entity Books as projection on book.Books;
    entity Authors as projection on book.Authors;
}
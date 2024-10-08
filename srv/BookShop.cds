using { com.bookshop as bookstore } from '../db/BookShop-schema';

//com o uso de path 'admin', substitui o caminho completo '/odata/v4/admin' por 'admin'
service AdminService @(path: '/admin', impl: 'srv/Admin.js') {
    entity Books as projection on bookstore.Books;
    entity Authors as select from bookstore.Authors;
}
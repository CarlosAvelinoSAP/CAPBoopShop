using { 
    AdminService.Authors as Authors,
    AdminService.Books as Books
 } from './BookShop';

/*
Annotations such as @requires or @readonly are just convenience shortcuts for @restrict, for example:

@(requires: 'admin') is equivalent to @(restrict: [ { grant: '*', to: 'admin' } ])
@readonly is the same as @(restrict: [ { grant: 'READ' } ])

*/
annotate Books with @(restrict: [
        {
            grant: ['DELETE'],
            to: 'admin',
            where: 'stock = 0'
        },
        {
            grant: [
                'READ', 
                'CREATE',
                'UPDATE'
            ], 
            to : 'Admin'
        }
] );

annotate Authors with @(requires: 'Admin');




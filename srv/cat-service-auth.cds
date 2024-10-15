using { 
    CatalogService.Books as Books,
    CatalogService.Authors as Authors,
    CatalogService.submitOrder as submitOrder
 } 
from './cat-service';

annotate Authors with @readonly;
annotate Books with @readonly;
annotate submitOrder with @(requires: 'authenticated-user');




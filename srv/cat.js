const cds = require('@sap/cds');

class CatalogService extends cds.ApplicationService {

    init() {
        const { Books } = this.entities;
        this.after('READ', CatalogService.Authors, results => {
            console.log(`****/////******`);
            this.grantDiscount(results);       
        })

        this.on('submitOrder', this.reduceStock);

    return super.init();
    };

//As an alternative to registering an on handler, actions and functions can also be implemented 
//as conventional JavaScript methods on a service implementation class
/*     submitOrder(book, quantity) {
        const { Books } = this.entities;
    
        if (quantity < 1) {
          return req.error('The quantity must be at least 1.');
        }
    
        let stock = 10;
        return { stock };
      } */
    
    grantDiscount(results){
        for(let b of results){
            if (b.stock > 20) {
                b.title  += ' -- 11% Discount!';
            }
        }
    }

    reduceStock(req){
        const { Books } = this.entities;
        const { book, quantity } = req.data;
        console.log(`reduceStock!!`)
        if ( quantity < 1 ) {
            return req.reject(410, `The quantity must be at least 1.`);
        }
        let stock = 10;
        return {stock};
    }
}

module.exports = CatalogService;
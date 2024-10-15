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

    grantDiscount(results) {
        for (let b of results) {
            if (b.stock > 20) {
                b.title += ' -- 11% Discount!';
            }
        }
    }

    /*async reduceStock(req){
        const { Books } = this.entities;
        const { book, quantity } = req.data;

        //  let query1 = SELECT.one.from(Books).where({ ID: book }).columns( b=> { b.stock } );
        //let query1 = SELECT.one.from(Books).where`ID=${book}`.columns`stock`;
        //await SELECT.one.from(Books).where`ID=${book}`.columns`stock`;
        //let query2 = UPDATE(Books).where({ID:book}).with({stock: { '-=' : quantity }});
        //let query2 = UPDATE(Books).where`ID=${book}`.with`stock = stock - ${quantity}` ;
        //await UPDATE(Books).where`ID=${book}`.with`stock = stock - ${quantity}` ;
        const b = await SELECT.one.from(Books).where({ ID: book }).columns( b=> { b.stock } );
        let { stock } = b;
        await UPDATE(Books).where({ID:book}).with({stock: { '-=' : quantity }});
        return { stock: stock - quantity };
    }*/

    /*   * console.log(`reduceStock!!`)
        if ( quantity < 1 ) {
            return req.reject(410, `The quantity must be at least 1.`);
        }
        console.log(`TTTTTTTTTTTAAAAAAAAAAAA!!!!!`)
        //return { stock };
        return { stock: stock - quantity };
    }*/
    async reduceStock(req) {
        const { Books } = this.entities;
        
        const { book, quantity } = req.data;

        if (quantity < 1) {
            return req.error('INVALID_QUANTITY');
        }

        const b = await SELECT.one.from(Books).where({ ID: book }).columns(b => { b.stock });

        if (!b) {
            //return req.error(`Book with ID ${book} does not exist.`);
            return req.error('BOOK_NOT_FOUND', [book]);
        }

        let { stock } = b;
        if (quantity > stock) {
            //return req.error(`${quantity} exceeds stock ${stock} for book with ID ${book}.`);
            return req.reject(500,'ORDER_EXCEEDS_STOCK', [quantity, stock, book]);
        }

        await UPDATE(Books).where({ ID: book }).with({ stock: { '-=': quantity } });
        return { stock: stock - quantity };
    }
}

module.exports = CatalogService;
const cds = require('@sap/cds');

class CatalogService extends cds.ApplicationService {

    init() {
        const { Books } = this.entities;
        this.after('READ', CatalogService.Authors, results => {
            console.log(`****/////******`);
            this.grantDiscount(results);
        })

    return super.init();
    };
    grantDiscount(results){
        for(let b of results){
            if (b.stock > 20) {
                b.title  += ' -- 11% Discount!';
            }
        }
    }


}

module.exports = CatalogService;
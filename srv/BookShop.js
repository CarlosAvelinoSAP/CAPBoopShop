const cds = require('@sap/cds');

class BookShopService extends cds.ApplicationService {

  init() {
      const { Books } = this.entities;
      

      //this.before('READ', Books, this.funcTitleDesc);
      //this.before('READ', Books, this.validaPrice );
      // Validate the life data entered for an author
      //this.before(['CREATE', 'UPDATE'], Books, this.funcValidPrice);

      return super.init();
  }

  validaPrice(req) {
    console.log(req.data);
  }

  funcValidPrice(req) {
    console.log(`Test!`);  
    const { price } = req.data;
      if (!price == 0) {
          return;
      }

      req.error(`The price must be diferent of (${price}).`);     
  }

}

module.exports = BookShopService;
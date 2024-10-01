const cds = require('@sap/cds');

class BookShopService extends cds.ApplicationService {

  init() {
       this.after('READ', 'Books', books => {
        for( let book of books ) {
          if (book.stock < 10 ) book.title += ' ---Deconto de 10%!';
        }
      });
      this.before('CREATE', 'Books', req => {
        console.log('Teste');
        const price = req.data.price;
        if ( price == null ) {
          req.reject( 400, 'Por favor, informar o preço!'); 
        }
      }) 

      //const { Books } = this.entities;
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
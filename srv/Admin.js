const cds = require('@sap/cds');

class AdminService extends cds.ApplicationService {
    init() {
        const { Authors } = this.entities;
        this.before(['CREATE','UPDATE'], Authors , authors => {         
        //  this.before(['CREATE', 'UPDATE'], Authors, req => {
            console.log('Test!))))'); 
            this.validateLifeDate(authors);
            //this.validateLifeDate(req);  com 'req' também funciona
        //  }  )
         //console.log('Test!');   
         /* for( let book of books ) {
           if (book.stock < 10 ) book.title += ' ---Deconto de 10%!';
         } */
       });
       
       return super.init();

} 

validateLifeDate(authors) {
  //validateLifeDate(req) {  
  const { dateOfBirth, dateOfDeath } = authors.data;
   console.log(`!dateOfBirth====(${!dateOfBirth})`);
   if (!dateOfBirth || !dateOfDeath) {
    console.log('Datas não fornecidas! ======!')
    return;
  }
  console.log(`DateOfBirth (${dateOfBirth}) e dateOfDeath(${dateOfDeath})!`);
  if ( dateOfBirth > dateOfDeath ) 
      console.log(`DateOfBirth (${dateOfBirth}) > dateOfDeath(${dateOfDeath})!`);
  

  const birth = new Date(dateOfBirth);
  const dead = new Date(dateOfDeath);
  
  if (dead < birth) {
    authors.reject(400,`The date of death (${dateOfDeath}) is before the date of birth (${dateOfBirth}).`); 
    //req.reject(400,`The date of death (${dateOfDeath}) is before the date of birth (${dateOfBirth}).`); 
  } 

  console.log('Passou pela função!')
}


}



module.exports = AdminService;
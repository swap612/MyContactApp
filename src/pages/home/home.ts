import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactlist: any;
  constructor(public navCtrl: NavController, public platform: Platform, public contacts:Contacts) {
   
    this.platform.ready().then(() => {
      var opts = {   
         filter : "",                                
         multiple: true,        
         hasPhoneNumber:true,                             
         fields:  [ 'displayName', 'name' ]
       };
       
       contacts.find([ 'displayName', 'name' ],opts).then((contacts) => {
         this.contactlist=contacts;
       }, (error) => {
         console.log(error);
       })
   })
    

  }

  // display(){

  //   let contact: Contact = this.contacts.create();

  //   contact.name = new ContactName(null, 'Smith', 'John');
  //   contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
  //   contact.save().then(
  //     () => console.log('Contact saved!', contact),
  //     (error: any) => console.error('Error saving contact.', error)
  //   );

  // }

}

import Controller from '@ember/controller';
import {match, not, gte, and} from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',
  message: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isBothTrue'),
  isLongEnough: gte('message.length', 5),
  isBothTrue: and('isValid', 'isLongEnough'),

  actions: {

    sendMessage() {
      alert(`Email ID: ${this.get('emailAddress')}`+"\n"+ `${this.get('message')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message','');
    }
  }

});

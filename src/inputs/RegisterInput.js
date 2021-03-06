import { observable } from 'mobx';
import { RegisterValidator } from './../validators'
import { LABEL } from './../lang'

export default class {
  @observable name = null;
  @observable email = null;
  @observable job_duties = [];

  constructor(name = '', email = '', job_duties = []) {
    this.name = new RegisterValidator('name', LABEL.LBL_NAME, name)
    this.email = new RegisterValidator('email', LABEL.LBL_EMAIL, email, false)
    this.job_duties = new RegisterValidator('job_duties', LABEL.LBL_JOB_DUTIES, job_duties)
  }

  resetInputs() {
    this.name = new RegisterValidator('name', LABEL.LBL_NAME, '')
    this.email = new RegisterValidator('email', LABEL.LBL_EMAIL, '', false)
    this.job_duties = new RegisterValidator('job_duties', LABEL.LBL_JOB_DUTIES, [])
  }

  getParams() {
    return {
      'name': this.name.value,
      'email': this.email.value,
      'job_duties': this.job_duties.value
    }
  }
  
  update(key_name, value) {
    this[key_name].value = value
    this[key_name].validate()
  }

  validate() {
    let isValid = true;
    for (let key in this) {
      this[key].validate();
      if (this[key].errors.length) {
        isValid = false;
      }
    }
    return isValid;
  }

}
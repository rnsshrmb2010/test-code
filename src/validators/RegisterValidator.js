import { observable } from 'mobx';
import { ERRORS } from './../lang'

/**
 * Author: Hanamantraya R
 * Class Name: LoginValidate
 * Description: Validate the login inputs data
 */
export default class {
  @observable name = '';
  @observable label = '';
  @observable required = '';
  @observable value = '';
  @observable minLength = '';
  @observable maxLength = '';
  @observable errors = [];
  
  /**
   * @Author: Hanamantraya R
   * @Method: constructor
   * @Param: String(name)
   * @Param: String(label)
   * @Param: Boolean(required)
   * @Param: String(value)
   * @Return: Void
   * Description: Nothing return
   */
  constructor(name, label, value = '', required = true, minLength = null, maxLength = null) {
    this.name = name;
    this.label = label;
    this.value = value;
    this.required = required;
    this.minLength = minLength;
    this.maxLength = maxLength;
  }

  /**
   * @Author: Hanamantraya R
   * @Method: validate
   * @Param: Empty
   * @Return: Void
   * Description: Validates the user inputs if error return valid error message else nothing
   */
  validate() {
    this.errors.replace([]);
    switch (this.name) {
      case 'name':
        if (!this.value.length && this.required) {
          this.errors.push(ERRORS.ERR_NAME_REQ);
        }
        break;
      case 'job_duties':
        if (!this.value.length && this.required) {
          this.errors.push(ERRORS.ERR_JOB_DUTIES_REQ);
        }
        break;
      case 'email':
        let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!this.value.length && this.required) {
          this.errors.push(ERRORS.ERR_EMAIL_REQ);
        } else if (this.value.length && !filter.test(this.value)) {
          this.errors.push(ERRORS.ERR_EMAIL);
        }
        break;
      default:break;
    }
  }
}
import { observable } from 'mobx';

export default class {
  id = null;
  @observable name = null;
  
  static jsonToArray(json) {
    return json.reduce((a, c) => a[c.id] = this.cJson(c),{})
  }

  static cJson(json) {
    return new this(json);
  }    

  constructor(json) {
    this.id = json.id;
    this.name = json.name;
  }

  update(entries) {
    for (let key in entries) {
      this[key] = entries[key];
    }
  }
}
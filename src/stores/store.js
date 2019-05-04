import { observable } from 'mobx';
class Store {
  @observable formInput = null;
  @observable itemList = [];
  createForm(ClassType) {
    this.formInput = new ClassType();
  }

  _handleChange(name, value, event) {
    this.formInput.update(name, value)
    event.preventDefault();
  }
}

const store = new Store();
export default store;
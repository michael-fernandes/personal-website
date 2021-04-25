import { showModal, store } from '../store';

export default function mockupsOnClick() {
  console.log(store.getState());
  store.dispatch(showModal());
}
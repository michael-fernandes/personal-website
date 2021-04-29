import { showModal, store } from '../store';

export default function mockupsOnClick() {
  store.dispatch(showModal());
}
import { atom } from 'recoil';

// Takeaway: Define Recoil Atom
export const modalState = atom({
  key: 'modalState',
  default: false,
});
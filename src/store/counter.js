import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 2, nama: "dhio", nilai: 0 };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    infoSaya(state) {
      return `Nama saya : ${state.nama}, Nilai saya : ${state.nilai}`;
    },
  },
  actions: {
    increment() {
      this.count++;
    },

    AddlNilai(params) {
      this.nilai = this.nilai + params;
    },
  },
});

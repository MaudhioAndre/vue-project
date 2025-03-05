import { defineStore } from "pinia";

export const useNilaiStore = defineStore("nilai", {
  state: () => {
    return { nilai: 2 };
  },
  getters: {
    infoNilai(state) {
      return state.nilai > 7
        ? "Nilai Bagus"
        : state.nilai > 4
        ? "Nilai Kurang Bagus"
        : "Nilai Jelek";
    },
  },
  actions: {
    incrementNilai() {
      this.nilai++;
    },
  },
});

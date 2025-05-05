import { defineStore } from "pinia";
import { CatsState } from "./state";
import creatorJson from "@assets/creators.json";
import aerocatJson from "@assets/aerocats.json";
import landcatJson from "@assets/landcats.json";
import { Cat } from "@/models/cat.model";

export const useCatsStore = defineStore("cats", {
  state: (): CatsState => ({
    creators: null,
    aerocats: null,
    landcats: null,
  }),
  getters: {
    isMobile: () => {
        return window.innerWidth <= 600;
    },
    creatorFromCat: (state) => {
      return (cat: Cat) => {
        state.creators?.find((creator) => creator.name === cat.creator);
      };
    },
  },
  actions: {
    initialize() {
      this.creators = creatorJson.creators;
      this.aerocats = aerocatJson.aerocats;
      this.landcats = landcatJson.landcats;
    },
  },
});

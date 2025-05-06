import { defineStore } from "pinia";
import { CatsState } from "./state";
import creatorJson from "@assets/creators.json";
import aerocatJson from "@assets/aerocats.json";
import landcatJson from "@assets/landcats.json";
import { Cat } from "@/models/cat.model";
import { GroupedAssets } from "@/models/grouped-assets.model";

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

      const aerocatImages = Object.keys(import.meta.glob('/src/assets/images/aerocats/**/*'));
      const groupedAssetUrls = this.groupAssetUrls(aerocatImages);
      console.log(groupedAssetUrls);
      this.aerocats?.forEach(a => {
        const formattedName = a.name.toLowerCase().replaceAll(" ", "_");
        a.galleryImagePaths = groupedAssetUrls[formattedName]?.galleryImagePaths;
        a.referenceSheetsPath = groupedAssetUrls[formattedName]?.referenceSheetImagePaths;
      });
    },
    groupAssetUrls(urls: string[]): Record<string, GroupedAssets> {
      const initialGroupedUrls: Record<string, string[]> = {};
    
      for (const url of urls) {
        const parts = url.split('/');
    
        // We need at least 3 parts from the right for the grouping directory
        // plus the filename and its parent directory. So a total of 5 parts minimum.
        if (parts.length >= 5) {
          // The third part from the right is at index `parts.length - 3`
          const groupKey = parts[parts.length - 3];
    
          if (initialGroupedUrls[groupKey]) {
            initialGroupedUrls[groupKey].push(url);
          } else {
            initialGroupedUrls[groupKey] = [url];
          }
        }
      }

      const groupedAssetsByName: Record<string, GroupedAssets> = {};
      for (const groupKey in initialGroupedUrls) {
        groupedAssetsByName[groupKey] = {
          galleryImagePaths: [],
          referenceSheetImagePaths: []
        };
        const urlsInGroup = initialGroupedUrls[groupKey];

        for (const url of urlsInGroup) {
          const parts = url.split('/');
          // The subdirectory before the filename is at index `parts.length - 2`
          if (parts.length >= 2) { // Ensure there's at least a subdirectory and a filename
              const folderKey = parts[parts.length - 2];
              
              if (folderKey === 'gallery') {
                if (groupedAssetsByName[groupKey].galleryImagePaths) {
                  groupedAssetsByName[groupKey].galleryImagePaths.push(url);
                } else {
                  groupedAssetsByName[groupKey].galleryImagePaths = [url];
                }
              } else if (folderKey === 'reference_sheets') {
                if (groupedAssetsByName[groupKey].referenceSheetImagePaths) {
                  groupedAssetsByName[groupKey].referenceSheetImagePaths.push(url);
                } else {
                  groupedAssetsByName[groupKey].referenceSheetImagePaths = [url];
                }
              }
          }

          function sortFileByNumberName(a: string, b: string) {
            // Extract the filename from each URL
            const filenameA = a.split('/').pop() || '';
            const filenameB = b.split('/').pop() || '';

            // Remove the file extension
            const nameA = filenameA.split('.')[0];
            const nameB = filenameB.split('.')[0];

            // Convert to numbers for comparison
            const numA = parseInt(nameA, 10);
            const numB = parseInt(nameB, 10);

            // Handle cases where names might not be purely numeric
            if (isNaN(numA) || isNaN(numB)) {
                // If either is not a number, fall back to alphabetical sort
                return nameA.localeCompare(nameB);
            } else {
                // Otherwise, perform numerical sort
                return numA - numB;
            }
          }

          groupedAssetsByName[groupKey].galleryImagePaths?.sort(sortFileByNumberName);
          groupedAssetsByName[groupKey].referenceSheetImagePaths?.sort(sortFileByNumberName);
        }
      }
    
      return groupedAssetsByName;
    }
  },
});

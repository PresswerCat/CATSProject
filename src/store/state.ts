import { Cat } from "@/models/cat.model";
import { Creator } from "@/models/creator.model";
import { Landcat } from "@/models/landcat.model";
import { Aerocat } from "@models/aerocat.model";

export interface CatsState {
    creators?: Creator[];
    cats?: Cat[];
    aerocats?: Aerocat[];
    landcats?: Landcat[];
}
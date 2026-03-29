import { NullableType } from "../../../../../common";
import { IInjectionZone } from "./injection-zone.interface";

export interface IInjectionZonesSlice {
    injectionZones: NullableType<IInjectionZone[]>;
}   
import { Certificate } from "./Certificate";
import { Profesional } from "./Profesional";

export interface Education {
    profesional: Profesional[];
    certificates: Certificate[];
}

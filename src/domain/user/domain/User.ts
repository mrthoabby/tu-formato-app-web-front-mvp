import { AsideInfo } from "./AsideInfo";
import { IdentificationInfo } from "./IdentificationInfo";
import { ProfessionInfo } from "./ProfessionInfo";

export interface User {
    asideInfo: AsideInfo;
    identificationInfo: IdentificationInfo;
    professionInfo: ProfessionInfo;
}
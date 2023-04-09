import { CurrentRole } from "./CurrentRole";
import { CurrentWork } from "./CurrentWork";
import { Education } from "./Education";
import { Project } from "./Project";
import { Skill } from "./Skill";
import { WorkExperience } from "./WorkExperience";

export interface ProfessionInfo {
    introductionText: string;
    currentWork: CurrentWork;
    currentRole: CurrentRole;
    workExperience: WorkExperience[];
    education: Education;
    skills: Skill[];
    projects: Project[];
}
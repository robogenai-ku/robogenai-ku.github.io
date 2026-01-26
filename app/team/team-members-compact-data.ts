import type { TeamMember } from "./team-types"

type TeamMemberCompact = Pick<TeamMember, "id" | "name" | "role">

export const teamMembersCompact: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Tarek Taha",
    role: "DFL Research Program Director",
  },
  {
    id: 2,
    name: "Dr. Chien Tseng",
    role: "DFL Principal Investigator - Underwater",
  },
  {
    id: 3,
    name: "Dr. Qasim Kapasi",
    role: "DFL R&D Manager",
  },
  {
    id: 4,
    name: "Maryam Buhumaid",
    role: "Senior Analyst",
  },
]

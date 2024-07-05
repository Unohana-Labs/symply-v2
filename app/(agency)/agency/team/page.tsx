import Authenticated from "../../../authenticated";
import TeamHome from "@/components/agency/team/home";
export default function Team() {
  return (
    <Authenticated>
      <TeamHome />
    </Authenticated>
  );
}

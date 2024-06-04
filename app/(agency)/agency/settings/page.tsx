import Authenticated from "@/app/authenticated";
import SettingsHome from "@/components/agency/settings/home";

export default function AgencySettings() {
  return (
    <Authenticated>
      <SettingsHome />
    </Authenticated>
  );
}

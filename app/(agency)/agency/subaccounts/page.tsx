import SubAccountsHome from "@/components/agency/subaccounts/home";
import Authenticated from "../../../authenticated";
export default function Subaccounts() {
  return (
    <Authenticated>
      <SubAccountsHome />
    </Authenticated>
  );
}

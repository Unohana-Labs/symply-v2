import AccountingHome from "@/components/agency/accounting/home";
import Authenticated from "../../../authenticated";

export default function AgencyAccounting() {
  return (
    <Authenticated>
      <AccountingHome />
    </Authenticated>
  );
}

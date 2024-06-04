import TeamMembers from "./tables/team-members";
import RecentTransactions from "./tables/recent-transactions";

export default function Tables() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <span className=" col-span-2">
        <RecentTransactions />
      </span>
      <TeamMembers />
    </div>
  );
}

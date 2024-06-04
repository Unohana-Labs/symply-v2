import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectOverview from "./overview/project";
import FinancialOverview from "./overview/financial";

export default function Overview() {
  return (
    <div className="grid gap-4">
      <ProjectOverview />
      <FinancialOverview />
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function RecentTransactions() {
  return (
    <Card x-chunk="dashboard-05-chunk-3">
      <CardHeader className="px-7">
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>
          Recent transactions across the agency. This includes but not limited
          to expenses, profit, salary payments, etc.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden sm:table-cell">TRSC Type</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-card">
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Revenue</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  className="text-background text-xs bg-green-800"
                  variant="secondary"
                >
                  Success
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-center">
                <h1 className="py-2 bg-blue-800/20 hover:bg-blue-800 cursor-pointer rounded-xl">
                  View
                </h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Olivia Smith</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  olivia@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Salary</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  className="text-background text-xs bg-red-800"
                  variant="secondary"
                >
                  Failed
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
              <TableCell className="text-center">
                <h1 className="py-2 bg-blue-800/20 hover:bg-blue-800 cursor-pointer rounded-xl">
                  View
                </h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Noah Williams</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  noah@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">+ Savings</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  className="text-background text-xs bg-yellow-700"
                  variant="secondary"
                >
                  Pending
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
              <TableCell className="text-right">$350.00</TableCell>
              <TableCell className="text-center">
                <h1 className="py-2 bg-blue-800/20 hover:bg-blue-800 cursor-pointer rounded-xl">
                  View
                </h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Emma Brown</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  emma@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Revenue</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  className="text-background text-xs bg-green-800"
                  variant="secondary"
                >
                  Success
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
              <TableCell className="text-right">$450.00</TableCell>
              <TableCell className="text-center">
                <h1 className="py-2 bg-blue-800/20 hover:bg-blue-800 cursor-pointer rounded-xl">
                  View
                </h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Revenue</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge
                  className="text-background text-xs bg-green-800"
                  variant="secondary"
                >
                  Success
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-center">
                <h1 className="py-2 bg-blue-800/20 hover:bg-blue-800 cursor-pointer rounded-xl">
                  View
                </h1>
              </TableCell>
            </TableRow>
            <span className="font-semibold underline underline-offset-4 text-primary cursor-pointer">
              View all transactions
            </span>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

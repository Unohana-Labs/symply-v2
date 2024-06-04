import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookDashed, CheckCircle } from "lucide-react";

export default function ProjectOverview() {
  return (
    <section className="p-2">
      <section>
        <h1 className="text-2xl font-bold mb-4">Project Overview</h1>
      </section>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Projects
            </CardTitle>
            <BookDashed size={15} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <div className="text-xs mt-4 cursor-pointer font-bold hover:underline underline-offset-4 flex items-center gap-2">
              <ArrowRight size={14} />
              View all projecs
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Ongoing Projects
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <div className="text-xs mt-4 cursor-pointer font-bold hover:underline underline-offset-4 flex items-center gap-2">
              <ArrowRight size={14} />
              View ongoing projecs
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Conpleted Projects
            </CardTitle>
            <CheckCircle color="green" size={15} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <div className="text-xs mt-4 cursor-pointer font-bold hover:underline underline-offset-4 flex items-center gap-2">
              <ArrowRight size={14} />
              View completed projecs
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Deadline
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">June 10th, 2024</div>
            <div className="text-xs mt-4 cursor-pointer font-bold hover:underline underline-offset-4 flex items-center gap-2">
              <ArrowRight size={14} />
              View all deadlines
            </div>
          </CardContent>
        </Card>
      </section>
    </section>
  );
}

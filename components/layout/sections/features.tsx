import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { SparklesCore } from "@/components/ui/sparkles";
import { CircleDollarSign, icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "CircleDollarSign",
    title: "Financial Services Suite",
    description:
      "Beyond basic accounting, we handle account creation, seamless transfers, salary payments, and efficient disbursement. Your financial operations become streamlined and error-free.",
  },
  {
    icon: "Users",
    title: "Team Management",
    description:
      "Efficiently allocate resources, track progress, and foster collaboration. Your teams work seamlessly, meeting project goals and client expectations.",
  },
  {
    icon: "Goal",
    title: "Client-to-Business Bridge",
    description:
      "Centralize communications, manage client expectations, and enhance satisfaction. Strong client relationships drive repeat business and referrals.",
  },

  {
    icon: "LineChart",
    title: "Data-Driven Insights",
    description:
      "Monitor milestones, allocate tasks, and achieve project success. Our project management tools keep everything on track, ensuring timely deliveries.",
  },
  {
    icon: "File",
    title: "Efficient Document Handling",
    description:
      "Our document management feature organizes, secures, and retrieves files. Compliance, productivity, and peace of mind—all in one place.",
  },
];

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="px-6 md:px-32 py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="w-full absolute inset-0 min-h-screen h-full">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#09090B] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        it’s not about features; it’s about impact. We blend innovation,
        reliability, and personalized service. Our commitment to excellence
        drives results—whether it’s seamless integrations, data-driven insights,
        or exceptional support. We’re not just a solution; we’re your strategic
        advantage.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-center">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

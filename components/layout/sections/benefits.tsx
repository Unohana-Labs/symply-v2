import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { BarChart, icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Amplified Efficiency",
    description:
      "Streamline operations and eliminate manual tasks. Our software automates processes, allowing you to focus on growth.",
  },
  {
    icon: "LineChart",
    title: "Profit Maximization",
    description:
      "Accurate quotes, efficient resource allocation, and streamlined invoicing boost your bottom line. It’s like having a financial wizard on your team.",
  },
  {
    icon: "DollarSign",
    title: "Higher Conversions",
    description:
      "As your agency expands, our software scales with you. No bottlenecks, no chaos. Just smooth operations, even during growth spurts.",
  },
  {
    icon: "Sparkle",
    title: "Happy Clients",
    description:
      "Happy clients mean repeat business and referrals. Our tool ensures timely deliveries, accurate billing, and transparent communication. Client smiles? Check!",
  },
  {
    icon: "BarChart",
    title: "Holistic Insights",
    description:
      "Dive into performance metrics—project profitability, resource utilization, and client satisfaction. Make informed choices, spot trends, and steer your agency toward growth.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We don’t settle for ordinary. Our commitment goes beyond
            features—it’s about driving outcomes. Let’s explore how our tailored
            solutions, reliability, and innovation elevate your business:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-foreground hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-background font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle className="text-black">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

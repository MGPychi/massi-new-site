import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ModulesSection() {
  const modules = [
    {
      title: "Module 1: Foundation",
      description: "Set up your digital product empire from scratch",
      value: "$97",
    },
    {
      title: "Module 2: Product Creation",
      description: "Create your first product in under 24 hours",
      value: "$197",
    },
    {
      title: "Module 3: Sales Pages",
      description: "High-converting sales page templates",
      value: "$147",
    },
    {
      title: "Module 4: Email Marketing",
      description: "Automated email sequences that sell",
      value: "$127",
    },
    {
      title: "Module 5: Traffic & Marketing",
      description: "Get customers without paid ads",
      value: "$177",
    },
    {
      title: "Module 6: Scaling",
      description: "Scale to $10k+ months systematically",
      value: "$247",
    },
    {
      title: "BONUS: Templates Pack",
      description: "50+ ready-to-use templates",
      value: "$97",
    },
    {
      title: "BONUS: Case Studies",
      description: "Real student success stories",
      value: "$67",
    },
    {
      title: "BONUS: Live Q&A Access",
      description: "Monthly live coaching calls",
      value: "$197",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Here's What's Inside
        </h2>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((item, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardContent className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <h3 className="font-semibold text-white text-xs sm:text-sm">
                    {item.title}
                  </h3>
                  <span className="text-orange-500 font-bold text-xs sm:text-sm">
                    {item.value}
                  </span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
            Total Value:{" "}
            <span className="line-through text-gray-400">$1,353</span>
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500 mb-4 sm:mb-6">
            Your Price Today: $37
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg"
          >
            <span className="hidden sm:inline">Get Everything Now - $37</span>
            <span className="sm:hidden">Get Now - $37</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

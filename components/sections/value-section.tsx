import { Card, CardContent } from "@/components/ui/card";

export function ValueSection() {
  const valueItems = [
    {
      title: "Product Creation Masterclass",
      image: "ebook mockup with product creation title",
    },
    {
      title: "Sales Page Templates",
      image: "template designs for sales pages",
    },
    {
      title: "Email Marketing Scripts",
      image: "email templates and sequences",
    },
    { title: "Pricing Strategy Guide", image: "pricing strategy worksheet" },
    {
      title: "Launch Checklist",
      image: "checklist document for product launch",
    },
    {
      title: "Bonus: Traffic Generation",
      image: "traffic generation guide cover",
    },
  ];

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          You'll Instantly Receive Access To...
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valueItems.map((item, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={`/abstract-geometric-shapes.png?height=200&width=300&query=${item.image}`}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-card-foreground text-center">
                    {item.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

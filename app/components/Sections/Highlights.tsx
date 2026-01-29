import Image from "next/image";
import Badge from "../Badge";

const FEATURES = [
  {
    title: "Package Receiving",
    desc: "We receive your international orders at our overseas warehouse.",
    icon: "/package-receiving.png",
  },
  {
    title: "Parcel Consolidation",
    desc: "Combine multiple packages into one shipment to reduce shipping costs.",
    icon: "/parcel-consolidation.png",
  },
  {
    title: "Shipping Cost Calculator",
    desc: "See your shipping cost before paying. No surprises.",
    icon: "/shipping-calculator.png",
  },
  {
    title: "Real-Time Tracking",
    desc: "Track your package from warehouse to delivery in Nigeria.",
    icon: "/real-time-tracking.png",
  },
  {
    title: "Assisted Purchase",
    desc: "If a store doesn’t accept your card, share the product link and we’ll help you buy it.",
    icon: "/assisted-purchase.png",
  },
  {
    title: "Order Notifications",
    desc: "Get updates when your package arrives, ships, and is delivered.",
    icon: "/order-notifications.png",
  },
] as const;

function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200">
      <div className="relative h-40 w-full bg-gray-100">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="border-t border-gray-200/60 p-5 text-left">
        <h3 className="text-sm font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-xs leading-5 text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

export default function Highlights() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Badge>Platform Highlights</Badge>

        <h2 className="mt-4 text-2xl font-semibold text-primary sm:text-3xl">
          Everything You Need, In One Place
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-gray-500">
          All your global shopping and shipping tools, together.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard
              key={f.title}
              title={f.title}
              desc={f.desc}
              icon={f.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

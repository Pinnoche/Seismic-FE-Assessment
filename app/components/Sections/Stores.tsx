import Image from "next/image";
import Badge from "../Badge";

const STORES = [
  { name: "Adidas", logo: "/logos/adidas.png" },
  { name: "Chanel", logo: "/logos/chanel.png" },
  { name: "Nike", logo: "/logos/nike.png" },
  { name: "Chanel 2", logo: "/logos/chanel.png" },
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Ebay", logo: "/logos/ebay.png" },
  { name: "North Face", logo: "/logos/northface.png" },
  { name: "Amazon 2", logo: "/logos/amazon.png" },
] as const;

function StoreCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex h-24 items-center justify-center rounded-2xl bg-gray-100 px-6 py-10 transition hover:scale-[1.02] hover:bg-gray-200/70">
      <div className="relative h-8 w-24 sm:h-10 sm:w-28">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
          sizes="120px"
        />
      </div>
    </div>
  );
}

export default function Stores() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Badge>Popular Stores</Badge>

        <h2 className="mt-4 text-2xl font-semibold text-primary sm:text-3xl">
          Top Stores Nigerians Shop From
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-gray-500">
          Shop from trusted international brands across fashion, electronics,
          home, and more. We handle the delivery from abroad and bring your
          items safely to Nigeria.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {STORES.map((store) => (
            <StoreCard key={store.name} name={store.name} logo={store.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

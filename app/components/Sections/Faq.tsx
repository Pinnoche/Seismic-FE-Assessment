import Link from "next/link";
import Badge from "../Badge";

const FAQS = [
  {
    q: "Do I get a personal warehouse address?",
    a: "No. All packages are received at our shared overseas warehouse and processed securely.",
  },
  {
    q: "Do you handle customs fees?",
    a: "Customs duties are determined by Nigerian customs and are not controlled by us.",
  },
  {
    q: "Can I shop from any international store?",
    a: "Yes, as long as the store can ship to our warehouse location.",
  },
  {
    q: "Can I track my package?",
    a: "Yes. You’ll receive tracking updates from warehouse to delivery.",
  },
  {
    q: "What if my item is damaged?",
    a: "Optional insurance is available for eligible shipments.",
  },
] as const;

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-gray-200 p-5 transition-transform duration-200 hover:scale-[1.02] cursor-default md:flex-row md:items-start md:gap-8 md:p-8">
      <h4 className="text-base font-semibold text-primary md:whitespace-nowrap">
        {question}
      </h4>

      <p className="text-sm leading-5 text-gray-700 md:text-base">{answer}</p>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Badge>Built for You</Badge>

        <h2 className="mt-4 text-2xl font-semibold text-primary sm:text-3xl">
          FAQs
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-xs leading-5 text-gray-700">
          Focused on your needs, our team delivers solutions to ensure adequate
          and secure buying and shipping to Nigeria.
        </p>

        <div className="mt-10 space-y-3">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="mt-12">
          <h4 className="text-sm font-semibold text-primary">
            Still have a question?
          </h4>

          <p className="mt-1 text-xs text-gray-500">
            Reach out to our support team.
          </p>

          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/85 hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

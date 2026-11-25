import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Support & Product Demos",
  description:
    "Contact Space HR for enterprise sales, product demos, and customer support. Our HR technology specialists reply within one business day.",
  keywords: [
    "contact Space HR",
    "HR software support",
    "request demo",
    "Space HR help",
    "HR platform contact",
  ],
  alternates: {
    canonical: "https://spacehr.net/contact",
  },
  openGraph: {
    title: "Contact Us — Support & Product Demos",
    description:
      "Contact Space HR for enterprise sales, product demos, and customer support. Fast response guaranteed.",
    url: "https://spacehr.net/contact",
    siteName: "Space HR",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

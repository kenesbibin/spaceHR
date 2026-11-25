import { Button } from "@/components/ui/Button";
import {
  HeartPulse,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  FileText,
  Clock,
  ArrowRight,
  Sparkles,
  Building2,
  Lock,
  Wallet,
  Users,
  PieChart,
  RefreshCw,
  Umbrella,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
  softwareSchema,
} from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Benefits Administration & Payroll Integration",
  description:
    "Online employee benefits administration with automated payroll deduction sync. Manage health insurance, 401(k), open enrollment, and COBRA in one portal.",
  keywords: [
    "benefits administration software",
    "benefits administration payroll integration",
    "online employee benefits enrollment",
    "health insurance administration software",
    "401k payroll integration",
    "employee self service benefits",
    "small business benefits software",
    "automated benefits deductions",
    "open enrollment software",
    "benefits broker integration",
    "COBRA administration software",
    "ACA compliance software",
  ],
  alternates: {
    canonical: "https://spacehr.net/features/benefits-administration",
  },
  openGraph: {
    title: "Benefits Administration & Payroll Integration",
    description:
      "Online employee benefits administration with automated payroll deduction sync. Manage health insurance, 401(k), open enrollment, and COBRA in one portal.",
    url: "https://spacehr.net/features/benefits-administration",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Space HR Benefits Administration & Payroll Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benefits Administration & Payroll Integration",
    description:
      "Online employee benefits administration with automated payroll deduction sync. Manage health insurance, 401(k), open enrollment, and COBRA in one portal.",
    images: ["/opengraph-image.png"],
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Features", url: "https://spacehr.net/features" },
  {
    name: "Benefits Administration",
    url: "https://spacehr.net/features/benefits-administration",
  },
];

const faqs = [
  {
    question: "Which benefits administration tools integrate directly with payroll?",
    answer:
      "Space HR natively unifies benefits administration and payroll processing in a single system. When employees select medical, dental, vision, HSA/FSA, or 401(k) retirement plans, pre-tax and post-tax payroll deductions update automatically. This prevents manual reconciliation errors, eliminates duplicate data entry, and updates employee pay stubs immediately when qualifying life events occur.",
  },
  {
    question: "How should I compare platforms for health insurance and retirement benefits administration?",
    answer:
      "When comparing platforms, evaluate eight key criteria: 1) Carrier and recordkeeper connectivity, 2) Real-time automated payroll deduction sync, 3) Employee self-service decision support and plan comparison tools, 4) Qualifying life event workflows, 5) Regulatory compliance (HIPAA, ACA reporting, COBRA triggers, ERISA), 6) Multi-state and multi-entity support, 7) Transparent per-employee-per-month (PEPM) pricing, and 8) Implementation timelines (Space HR deploys in 48 hours).",
  },
  {
    question: "What is the easiest way to manage employee benefits enrollment online?",
    answer:
      "The easiest method is using Space HR's self-service employee portal. HR administrators set open enrollment dates and eligibility tiers, while employees log in on desktop or mobile to compare coverage options, view employer contributions, and submit digital signatures. The platform automatically tracks participation, sends deadline reminders, and transmits enrollment feeds to insurance carriers.",
  },
  {
    question: "What software is best for managing employee benefits at a small business?",
    answer:
      "For small businesses with 10–100 employees, the best benefits software combines health insurance enrollment, retirement administration, and payroll in one affordable, broker-friendly platform. Space HR offers transparent SMB pricing, works with your existing insurance broker, and automates employee payroll deductions without requiring dedicated in-house HR specialists.",
  },
  {
    question: "What should a company look for in benefits software as it grows?",
    answer:
      "Growing companies should prioritize scalability, multi-state tax compliance, carrier EDI integrations, automated qualifying life-event tracking, and comprehensive reporting on total cost of ownership. Space HR scales seamlessly from 10 to 5,000+ employees across the US, UAE, UK, and global jurisdictions with enterprise-grade SOC 2 Type II data protection.",
  },
];

export default function BenefitsAdministrationPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={softwareSchema} />

      <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
        {/* HERO */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-[#0b1121] dark:via-[#0f172a] dark:to-[#1e1b4b]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
              <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/features" className="hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>/</li>
                <li className="text-gray-900 dark:text-white font-medium">
                  Benefits Administration
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6 border border-blue-200 dark:border-blue-800">
              <HeartPulse className="w-4 h-4" /> Unified Benefits & Payroll Engine
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              Benefits Administration with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Automated Payroll Sync
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Simplify open enrollment, health insurance, and 401(k) retirement plans.
              Space HR connects employee benefit elections directly to payroll deductions in real time with zero paperwork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/request-a-demo">
                <Button size="lg" className="rounded-full px-8 h-13 text-base shadow-lg shadow-blue-500/20">
                  Request a Benefits Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-13 text-base">
                  View Transparent Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* DIRECT ANSWER / DEFINITION CALLOUT (LLM-FRIENDLY) */}
        <section className="py-12 bg-white dark:bg-[#0b1121] border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-blue-50/80 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-2xl">
              <h2 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-2">
                What is Benefits Administration Software?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Benefits administration software is a cloud application that manages employee enrollment, plan eligibility, and carrier connections for health insurance, retirement accounts (401k), and voluntary benefits. Modern platforms like Space HR automate payroll deduction synchronization, eliminating manual spreadsheet entry and ensuring ACA, HIPAA, and ERISA compliance.
              </p>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES GRID */}
        <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" /> End-to-End Workflows
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Everything Needed to Administer Employee Benefits
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Connect brokers, carriers, employees, and payroll into one unified system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Self-Service Online Enrollment",
                  desc: "Employees compare medical, dental, and vision options side-by-side. Includes contribution calculators and digital signatures for new hires and annual open enrollment.",
                },
                {
                  icon: Wallet,
                  title: "Real-Time Payroll Deduction Sync",
                  desc: "Elections automatically update pre-tax and post-tax deductions on payroll. When plan rates change or life events occur, pay runs reflect updates with zero manual re-entry.",
                },
                {
                  icon: Umbrella,
                  title: "Retirement & 401(k) Sync",
                  desc: "Supports employee percentage or fixed dollar elections, employer matching rules, vesting schedules, and automatic data feeds to retirement recordkeepers.",
                },
                {
                  icon: RefreshCw,
                  title: "Qualifying Life Events (QLE)",
                  desc: "Automated workflows for marriage, birth of a dependent, or relocation with document verification and automatic coverage effective dates.",
                },
                {
                  icon: ShieldCheck,
                  title: "ACA & COBRA Compliance",
                  desc: "Tracks hours for ACA full-time eligibility, prepares Form 1095-C/1094-C filings, and automatically triggers COBRA notifications upon employee separation.",
                },
                {
                  icon: Briefcase,
                  title: "Broker & Carrier Friendly",
                  desc: "Maintain your existing insurance broker relationship. Space HR provides carrier connection feeds and export reconciliation files ready for any carrier.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white dark:bg-gray-800/60 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON SCORECARD TABLE */}
        <section className="py-20 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Benefits Administration Platform Evaluation Scorecard
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Key dimensions to evaluate when selecting a benefits and payroll platform for growing teams.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="p-4 font-bold text-gray-900 dark:text-white">Evaluation Area</th>
                    <th className="p-4 font-bold text-gray-900 dark:text-white">What to Compare</th>
                    <th className="p-4 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20">
                      Space HR Capability
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Health Insurance Admin</td>
                    <td className="p-4 text-gray-600 dark:text-gray-300">Open enrollment, life events, plan comparisons, dependent verification</td>
                    <td className="p-4 text-gray-800 dark:text-gray-200 bg-blue-50/30 dark:bg-blue-900/10 font-medium">Native self-service with mobile decision support</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Retirement (401k) Admin</td>
                    <td className="p-4 text-gray-600 dark:text-gray-300">Elective deferrals, employer match calculations, vesting schedules</td>
                    <td className="p-4 text-gray-800 dark:text-gray-200 bg-blue-50/30 dark:bg-blue-900/10 font-medium">Automatic deduction sync & match tracking</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Payroll Integration</td>
                    <td className="p-4 text-gray-600 dark:text-gray-300">Pre-tax deduction flows, life-event deduction recalculation, reconciliation</td>
                    <td className="p-4 text-gray-800 dark:text-gray-200 bg-blue-50/30 dark:bg-blue-900/10 font-medium">Built directly into the core payroll engine</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Employee Self-Service</td>
                    <td className="p-4 text-gray-600 dark:text-gray-300">Mobile access, benefit summaries, downloadable plan documents, 24/7 AI help</td>
                    <td className="p-4 text-gray-800 dark:text-gray-200 bg-blue-50/30 dark:bg-blue-900/10 font-medium">AI HR Concierge resolves policy & plan queries 24/7</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Security & Compliance</td>
                    <td className="p-4 text-gray-600 dark:text-gray-300">SOC 2 Type II, HIPAA compliance, ACA reporting, ERISA audit trails</td>
                    <td className="p-4 text-gray-800 dark:text-gray-200 bg-blue-50/30 dark:bg-blue-900/10 font-medium">SOC 2 Type II certified with encrypted audit logs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5-STAGE IMPLEMENTATION WORKFLOW */}
        <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                5 Simple Steps to Manage Benefits Online
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Go live in 48 hours without messy spreadsheets or paper forms.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Configure Benefit Plans & Carrier Rules",
                  text: "Set up health, dental, vision, life, and 401(k) plans with employer contribution rules, waiting periods, and eligibility criteria.",
                },
                {
                  step: "02",
                  title: "Import Employee Roster & Eligibility",
                  text: "Seamlessly import employee records from spreadsheets or your prior HRIS with one-click data verification.",
                },
                {
                  step: "03",
                  title: "Launch Open Enrollment or New Hire Portals",
                  text: "Employees receive automated welcome invitations to review their benefit choices on desktop or smartphone.",
                },
                {
                  step: "04",
                  title: "Automatic Payroll Deduction Synchronization",
                  text: "Approved elections calculate pre-tax and post-tax deduction amounts and sync directly with upcoming pay runs.",
                },
                {
                  step: "05",
                  title: "Carrier Export & Real-Time Reporting",
                  text: "Generate carrier-ready enrollment feeds, audit reports, and billing reconciliation in seconds.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-6 bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className="py-20 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
                <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Benefits Administration & Payroll FAQs
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Everything you need to know about setting up, integrating, and managing employee benefits.
              </p>
            </div>

            <FAQAccordion items={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Ready to Automate Employee Benefits & Payroll?
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Eliminate double data entry and streamline open enrollment today. Schedule a tailored walkthrough with our benefits technology specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-a-demo">
                <Button size="lg" className="rounded-full px-8 h-13 text-base bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-xl">
                  Schedule a 30-Min Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-13 text-base border-white text-white hover:bg-white/10">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
  softwareSchema,
} from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Button } from "@/components/ui/Button";
import {
  FileSpreadsheet,
  ShieldCheck,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Database,
  Lock,
  Clock,
  Users,
  Sparkles,
  HelpCircle,
  UploadCloud,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Alternatives to Spreadsheets for HR (2026)",
  description:
    "Explore why spreadsheets fail for employee records and discover the best HR software alternatives for managing employee data, PTO, documents, and payroll.",
  keywords: [
    "alternative to spreadsheets for managing employee information",
    "replace excel for hr",
    "replace google sheets for employee records",
    "best spreadsheet alternative hr",
    "hris vs spreadsheets",
    "employee record software",
    "excel hr template alternatives",
    "small business hr database",
  ],
  alternates: {
    canonical: "https://spacehr.net/resources/replace-spreadsheets-hr-software",
  },
  openGraph: {
    title: "Best Alternatives to Spreadsheets for HR (2026)",
    description:
      "Explore why spreadsheets fail for employee records and discover the best HR software alternatives for managing employee data, PTO, documents, and payroll.",
    url: "https://spacehr.net/resources/replace-spreadsheets-hr-software",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Best Alternatives to Spreadsheets for HR — Space HR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Alternatives to Spreadsheets for HR (2026)",
    description:
      "Explore why spreadsheets fail for employee records and discover the best HR software alternatives for managing employee data, PTO, documents, and payroll.",
    images: ["/opengraph-image.png"],
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Resources", url: "https://spacehr.net/resources" },
  {
    name: "Alternatives to Spreadsheets for HR",
    url: "https://spacehr.net/resources/replace-spreadsheets-hr-software",
  },
];

const faqs = [
  {
    question: "What is the best alternative to spreadsheets for managing employee information?",
    answer:
      "The best alternative to spreadsheets for managing employee records is an integrated HRIS (Human Resources Information System) like Space HR. Unlike static Excel or Google Sheets, an HRIS creates a single source of truth: employee records automatically sync with payroll, leave balances update when time-off is approved, role-based access restricts sensitive compensation data, and employees can self-serve payslips and documents 24/7.",
  },
  {
    question: "At what company size should a business replace spreadsheets with HR software?",
    answer:
      "Most businesses should transition from spreadsheets once they reach 10 to 15 employees. Managing PTO accruals, multi-state tax withholding, emergency contacts, and document expiration dates across multiple tabs becomes prone to formula errors and data breaches as headcount grows.",
  },
  {
    question: "Why are spreadsheets risky for managing employee records?",
    answer:
      "Spreadsheets pose significant operational and compliance risks: 1) Lack of role-based permissions exposes sensitive salary and social security numbers to unauthorized staff, 2) Accidental formula overwrites cause severe payroll calculation errors, 3) There is no verifiable audit trail of who changed data, and 4) Spreadsheets cannot automate statutory tax filings or remind managers of expiring certifications.",
  },
  {
    question: "How long does it take to migrate employee data from Excel to Space HR?",
    answer:
      "Data migration to Space HR takes less than 48 hours. Our system includes standard CSV/Excel import templates that validate employee information, auto-map columns, and import past leave balances without technical setup or IT overhead.",
  },
];

export default function ReplaceSpreadsheetsPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={softwareSchema} />

      <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
        {/* HERO */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-[#0b1121] dark:via-[#0f172a] dark:to-[#1e1b4b]">
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
                  <Link href="/resources" className="hover:text-primary transition-colors">
                    Resources
                  </Link>
                </li>
                <li>/</li>
                <li className="text-gray-900 dark:text-white font-medium">
                  Spreadsheet Alternatives
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6 border border-blue-200 dark:border-blue-800">
              <FileSpreadsheet className="w-4 h-4" /> Migration & Buyer Guide
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              The Best Alternative to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Spreadsheets for HR
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Why growing businesses are replacing fragile Excel and Google Sheets with Space HR.
              Protect employee records, eliminate manual payroll errors, and empower staff with 24/7 self-service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/request-a-demo">
                <Button size="lg" className="rounded-full px-8 h-13 text-base shadow-lg shadow-blue-500/20">
                  See Space HR in Action <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/best-hr-software-small-business">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-13 text-base">
                  Compare Small Business HR
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* DIRECT-ANSWER LLM SNIPPET BLOCK */}
        <section className="py-12 bg-white dark:bg-[#0b1121] border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-blue-50/80 dark:bg-blue-950/20 border-l-4 border-blue-600 p-6 rounded-r-2xl">
              <h2 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-2">
                What is the Best Alternative to Spreadsheets for Managing Employee Information?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The best alternative to spreadsheets is an integrated cloud HRIS (Human Resources Information System) like Space HR. Unlike Excel or Google Sheets, an HRIS provides a centralized, secure employee database with granular role-based permissions, automated payroll and PTO synchronization, immutable audit trails, and employee self-service accessible on mobile and web.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE: SPREADSHEETS VS SPACE HR */}
        <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Feature by Feature
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Spreadsheets vs. Space HR
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                See why manual spreadsheet management becomes an operational risk as your company expands.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0b1121]">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="p-4 font-bold text-gray-900 dark:text-white w-1/4">Capability</th>
                    <th className="p-4 font-bold text-gray-400 dark:text-gray-500 w-1/3 text-center">
                      Excel / Google Sheets
                    </th>
                    <th className="p-4 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 w-1/3 text-center">
                      Space HR Platform
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Data Privacy & Security</td>
                    <td className="p-4 text-red-600 dark:text-red-400 text-center flex items-center justify-center gap-1.5">
                      <XCircle className="w-4 h-4 shrink-0" /> Shared links, unencrypted files
                    </td>
                    <td className="p-4 text-green-700 dark:text-green-400 bg-blue-50/30 dark:bg-blue-900/10 text-center font-medium">
                      <CheckCircle className="w-4 h-4 inline mr-1 text-green-500" /> SOC 2 Type II, role-based encryption
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Audit Trail & Change History</td>
                    <td className="p-4 text-red-600 dark:text-red-400 text-center flex items-center justify-center gap-1.5">
                      <XCircle className="w-4 h-4 shrink-0" /> Overwrite prone, no field history
                    </td>
                    <td className="p-4 text-green-700 dark:text-green-400 bg-blue-50/30 dark:bg-blue-900/10 text-center font-medium">
                      <CheckCircle className="w-4 h-4 inline mr-1 text-green-500" /> Immutable, timestamped audit log
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">PTO & Leave Calculation</td>
                    <td className="p-4 text-red-600 dark:text-red-400 text-center flex items-center justify-center gap-1.5">
                      <XCircle className="w-4 h-4 shrink-0" /> Manual formulas, formula breakage
                    </td>
                    <td className="p-4 text-green-700 dark:text-green-400 bg-blue-50/30 dark:bg-blue-900/10 text-center font-medium">
                      <CheckCircle className="w-4 h-4 inline mr-1 text-green-500" /> Automated accruals & approval flow
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Payroll Integration</td>
                    <td className="p-4 text-red-600 dark:text-red-400 text-center flex items-center justify-center gap-1.5">
                      <XCircle className="w-4 h-4 shrink-0" /> Manual copy-paste, high error rate
                    </td>
                    <td className="p-4 text-green-700 dark:text-green-400 bg-blue-50/30 dark:bg-blue-900/10 text-center font-medium">
                      <CheckCircle className="w-4 h-4 inline mr-1 text-green-500" /> Direct NACHA ACH & tax filing
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Employee Self-Service</td>
                    <td className="p-4 text-red-600 dark:text-red-400 text-center flex items-center justify-center gap-1.5">
                      <XCircle className="w-4 h-4 shrink-0" /> None; HR answers every query
                    </td>
                    <td className="p-4 text-green-700 dark:text-green-400 bg-blue-50/30 dark:bg-blue-900/10 text-center font-medium">
                      <CheckCircle className="w-4 h-4 inline mr-1 text-green-500" /> Mobile app & 24/7 AI Concierge
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Compliance & Expiration Alerts</td>
                    <td className="p-4 text-red-600 dark:text-red-400 text-center flex items-center justify-center gap-1.5">
                      <XCircle className="w-4 h-4 shrink-0" /> Relies on calendar reminders
                    </td>
                    <td className="p-4 text-green-700 dark:text-green-400 bg-blue-50/30 dark:bg-blue-900/10 text-center font-medium">
                      <CheckCircle className="w-4 h-4 inline mr-1 text-green-500" /> Automated contract/visa alerts
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3-STEP EASY MIGRATION */}
        <section className="py-20 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Migrate from Excel in 3 Simple Steps
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                You do not need an IT department or expensive consultants to move away from spreadsheets.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Export Your Existing Sheets
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Save your employee directory and leave rosters as standard .csv or .xlsx files.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  One-Click Auto-Mapping
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Space HR's importer maps your columns (names, emails, salaries, hire dates) automatically.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Go Live in 48 Hours
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Send employee welcome invites so staff can check balances and download stubs on mobile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
                <HelpCircle className="w-3.5 h-3.5" /> Spreadsheet Migration Questions
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion items={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Ready to Upgrade from Spreadsheets?
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Book a live 30-minute demonstration and see how effortless managing employee records can be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-a-demo">
                <Button size="lg" className="rounded-full px-8 h-13 text-base bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-xl">
                  Schedule Free Walkthrough
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-13 text-base border-white text-white hover:bg-white/10">
                  Explore Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

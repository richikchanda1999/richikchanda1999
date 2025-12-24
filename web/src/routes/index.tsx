import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: App });

type Section = "work" | "projects" | "ideas";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("work");

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Navigation Sidebar (left on landscape, top on portrait) */}
      <nav className="flex-shrink-0 p-6 pb-4 lg:p-8 lg:flex lg:flex-col lg:justify-between lg:h-screen">
          <div className="space-y-6">
            <h2 className="text-xl mb-8">hey, this is richik</h2>
            <div className="text-slate-400">
              <h3>welcome to my space on the internet</h3>
              <h3>i love to write code</h3>
              <h3>and, build seamless experiences</h3>
            </div>

            <div className="flex flex-row lg:flex-col gap-4">
              <button
                onClick={() => setActiveSection("work")}
                className={`text-left transition-colors ${
                  activeSection === "work" ? "text-white font-medium" : "text-slate-400 hover:text-slate-300"
                }`}
              >
                work
              </button>

              <button
                onClick={() => setActiveSection("projects")}
                className={`text-left transition-colors ${
                  activeSection === "projects" ? "text-white font-medium" : "text-slate-400 hover:text-slate-300"
                }`}
              >
                projects
              </button>

              <button
                onClick={() => setActiveSection("ideas")}
                className={`text-left transition-colors ${
                  activeSection === "ideas" ? "text-white font-medium" : "text-slate-400 hover:text-slate-300"
                }`}
              >
                ideas
              </button>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-row lg:flex-col gap-3 mt-6 lg:mt-0 lg:pb-8 text-sm">
            <a
              href="https://github.com/richikchanda1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/richikchanda1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              linkedin
            </a>
            <a
              href="mailto:richikchanda1999@gmail.com"
              className="text-slate-500 hover:text-white transition-colors"
            >
              email
            </a>
            <a
              href="https://resume.richik.me/Richik_Chanda_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              resume
            </a>
          </div>
        </nav>

      {/* Main Content Area (right on landscape, bottom on portrait) */}
      <main className="flex-1 min-h-0 p-6 lg:p-8 overflow-y-auto">
          {activeSection === "work" && (
            <section className="space-y-10">
              {/* Greyfinch */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg font-medium">
                    <a
                      href="https://greyfinch.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline decoration-wavy hover:text-slate-200"
                    >
                      greyfinch
                    </a>
                  </h3>
                  <span className="text-slate-500 text-sm">nov 2023 - apr 2025</span>
                </div>
                <p className="text-slate-400 text-sm">product engineer · US-based orthodontic practice management SaaS</p>

                {/* Payment Infrastructure */}
                <div className="space-y-2">
                  <p className="text-slate-500 text-xs uppercase tracking-wider">payment infrastructure</p>
                  <div className="text-slate-300 space-y-3">
                    <div className="flex gap-3">
                      <span className="text-slate-500 select-none">—</span>
                      <p>
                        overhauled payment system in a 3-member team using{" "}
                        <span className="text-slate-200">react</span> and{" "}
                        <span className="text-slate-200">hasura graphql</span>. cut provider charges by{" "}
                        <span className="text-amber-400">50%</span> for{" "}
                        <span className="text-amber-400">20M+ customers</span> across 192 clinics.{" "}
                        <span className="text-emerald-400">zero downtime</span>.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-slate-500 select-none">—</span>
                      <p>
                        built standalone <span className="text-white font-medium">pay app</span> with{" "}
                        <span className="text-slate-200">custom hasura actions</span> for secure login and payment processing. concept to production in{" "}
                        <span className="text-amber-400">3 months</span>.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-slate-500 select-none">—</span>
                      <p>
                        processed{" "}
                        <span className="text-amber-400">$10K+ in transactions</span> across 15+ partner clinics through secure payment flows.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Calendar & UI */}
                <div className="space-y-2">
                  <p className="text-slate-500 text-xs uppercase tracking-wider">calendar & UI</p>
                  <div className="text-slate-300 space-y-3">
                    <div className="flex gap-3">
                      <span className="text-slate-500 select-none">—</span>
                      <p>
                        migrated legacy calendar to modern architecture with{" "}
                        <span className="text-slate-200">custom functions</span> and{" "}
                        <span className="text-slate-200">indexes</span>.{" "}
                        <span className="text-amber-400">2x faster</span> appointment fetching with{" "}
                        <span className="text-emerald-400">100% feature parity</span>.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-slate-500 select-none">—</span>
                      <p>
                        built responsive UI with{" "}
                        <span className="text-slate-200">FullCalendar</span> library. pixel-perfect from{" "}
                        <span className="text-slate-200">figma mockups</span>.{" "}
                        <span className="text-amber-400">25% higher engagement</span> across{" "}
                        <span className="text-amber-400">100+ clinics</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Search Optimization */}
                <div className="space-y-2">
                  <p className="text-slate-500 text-xs uppercase tracking-wider">search optimization</p>
                  <div className="text-slate-300 space-y-3">
                    <div className="flex gap-3">
                      <span className="text-slate-500 select-none">—</span>
                      <p>
                        platform-wide fuzzy search using{" "}
                        <span className="text-slate-200">GIN indexes</span> and{" "}
                        <span className="text-slate-200">pg_trgm</span> extension.{" "}
                        <span className="text-amber-400">60% faster</span> response times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Questbook */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg font-medium">
                    <a
                      href="https://questbook.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline decoration-wavy hover:text-slate-200"
                    >
                      questbook (yc 21)
                    </a>
                  </h3>
                  <span className="text-slate-500 text-sm">jan 2022 - may 2023</span>
                </div>
                <p className="text-slate-400 text-sm">
                  full stack blockchain developer · now{" "}
                  <a
                    href="https://questbook.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white"
                  >
                    reclaim protocol
                  </a>
                </p>

                {/* Grants Tool */}
                <div className="space-y-2">
                  <p className="text-slate-500 text-xs uppercase tracking-wider">grants tool</p>
                  <div className="text-slate-300 space-y-3">
                    <div className="flex gap-3">
                      <span className="text-slate-500 select-none">—</span>
                      <p>
                        hired as <span className="text-amber-400">flutter engineer</span>, pivoted to full stack on day 1. joined 0→1 phase in a team of four.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-slate-500 select-none">—</span>
                      <p>
                        became{" "}
                        <a
                          href="https://github.com/questbook/grants-frontend/graphs/contributors"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300"
                        >
                          sole developer
                        </a>{" "}
                        and{" "}
                        <a
                          href="https://github.com/questbook/grants-frontend/commits/master/?author=richikchanda1999"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300"
                        >
                          frontend maintainer
                        </a>
                        . maintained{" "}
                        <span className="text-slate-200">solidity smart contracts</span>,{" "}
                        <span className="text-slate-200">next.js frontend</span>, and{" "}
                        <span className="text-slate-200">subgraphs</span>.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-slate-500 select-none">—</span>
                      <p>
                        disbursed{" "}
                        <span className="text-amber-400">$2M to builders</span> across{" "}
                        <span className="text-amber-400">20,000+ users</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Notifications & Integrations */}
                <div className="space-y-2">
                  <p className="text-slate-500 text-xs uppercase tracking-wider">notifications & integrations</p>
                  <div className="text-slate-300 space-y-3">
                    <div className="flex gap-3">
                      <span className="text-slate-500 select-none">—</span>
                      <p>
                        built{" "}
                        <a
                          href="https://github.com/questbook/qb-notification-bot/commits/master/?author=richikchanda1999"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300"
                        >
                          telegram bot
                        </a>{" "}
                        from scratch with{" "}
                        <span className="text-slate-200">webhooks</span> and{" "}
                        <span className="text-slate-200">pub-sub architecture</span>. event-driven and periodic notifications.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-slate-500 select-none">—</span>
                      <p>
                        <a
                          href="https://github.com/questbook/qb-api/commits/master/?author=richikchanda1999"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300"
                        >
                          zapier integration
                        </a>{" "}
                        with{" "}
                        <span className="text-slate-200">serverless API</span> for data pipelines to google sheets. most requested feature,{" "}
                        <span className="text-emerald-400">still works today</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Infrastructure */}
                <div className="space-y-2">
                  <p className="text-slate-500 text-xs uppercase tracking-wider">infrastructure</p>
                  <div className="text-slate-300 space-y-3">
                    <div className="flex gap-3">
                      <span className="text-slate-500 select-none">—</span>
                      <p>
                        maintained custom{" "}
                        <span className="text-slate-200">graph node</span> for subgraph on{" "}
                        <span className="text-slate-200">optimism</span>.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-slate-500 select-none">—</span>
                      <p>
                        <span className="text-slate-200">AWS lambda</span> for serverless,{" "}
                        <span className="text-slate-200">elastic beanstalk</span> for graph node,{" "}
                        <span className="text-slate-200">cloudwatch</span> for debugging.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 text-sm">
                  contributed to most repos in{" "}
                  <a
                    href="https://github.com/questbook/grants-frontend/graphs/contributors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white"
                  >
                    github.com/questbook
                  </a>
                </p>
              </div>

              {/* Tech Stack */}
              <div className="border-t border-slate-800 pt-6">
                <p className="text-slate-400 text-sm">
                  <span className="text-slate-300">stack:</span> react, typescript, next.js, postgresql, graphql (hasura), AWS (lambda, SES, cloudwatch, elastic beanstalk)
                </p>
              </div>
            </section>
          )}

          {activeSection === "projects" && (
            <section className="space-y-10">
              {/* Chatterbugs */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg font-medium">
                    <a
                      href="https://chatterbugs.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline decoration-wavy hover:text-slate-200"
                    >
                      chatterbugs web app
                    </a>
                  </h3>
                  <span className="text-slate-500 text-sm">freelance</span>
                </div>
                <p className="text-slate-400 text-sm">
                  full-stack for{" "}
                  <span className="text-slate-300">brainy bug resources</span> · educational card deck companion
                </p>

                <div className="text-slate-300 space-y-3">
                  <div className="flex gap-3">
                    <span className="text-slate-500 select-none">—</span>
                    <p>
                      serving{" "}
                      <span className="text-amber-400">500+ active users</span>, generating{" "}
                      <span className="text-amber-400">$5K+ in revenue</span>.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-500 select-none">—</span>
                    <p>
                      <span className="text-slate-200">firebase auth</span> with{" "}
                      <span className="text-slate-200">custom JWT claims</span>,{" "}
                      <span className="text-emerald-400">QR code</span> integration for physical-to-digital access.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-500 select-none">—</span>
                    <p>
                      backend in{" "}
                      <span className="text-slate-200">rust</span> +{" "}
                      <span className="text-slate-200">axum</span> with{" "}
                      <span className="text-emerald-400">hexagonal architecture</span>.{" "}
                      <span className="text-amber-400">60% better memory efficiency</span> vs node.js on{" "}
                      <span className="text-slate-200">digitalocean</span>.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-500 select-none">—</span>
                    <p>
                      CI/CD via{" "}
                      <span className="text-slate-200">github actions</span> -{" "}
                      <span className="text-amber-400">80% faster</span> deployments.
                    </p>
                  </div>
                </div>

                <p className="text-slate-500 text-sm">
                  next.js · typescript · hasura · firebase · rust (axum)
                </p>
              </div>

              {/* Limit Order Book */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg font-medium text-white">limit order book</h3>
                  <span className="text-slate-500 text-sm">ongoing</span>
                </div>
                <p className="text-slate-400 text-sm">personal project · systems programming</p>

                <div className="text-slate-300 space-y-3">
                  <div className="flex gap-3">
                    <span className="text-slate-500 select-none">—</span>
                    <p>
                      building a{" "}
                      <span className="text-emerald-400">limit order book</span> in{" "}
                      <span className="text-slate-200">rust</span> - focusing on performance and memory efficiency.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-500 select-none">—</span>
                    <p>
                      web service layer in{" "}
                      <span className="text-slate-200">go</span> to expose the order book via APIs.
                    </p>
                  </div>
                </div>

                <p className="text-slate-500 text-sm">
                  rust · go
                </p>
              </div>
            </section>
          )}

          {activeSection === "ideas" && (
            <section className="space-y-10">
              {/* Origin */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">origin</h3>
                <p className="text-slate-300">
                  my first real project wasn't at a startup - it was in{" "}
                  <span className="text-amber-400">class 6 (around 2012)</span>. built a{" "}
                  <span className="text-emerald-400">billing software</span> in{" "}
                  <span className="text-slate-200">VB6</span> for a friend's family business. later learnt{" "}
                  <span className="text-slate-200">java</span> and ported it to{" "}
                  <span className="text-slate-200">java swing</span>.
                </p>
                <p className="text-slate-400">
                  that was when i realized i loved building things that{" "}
                  <span className="text-emerald-400">solve real problems</span>.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">values</h3>
                <div className="text-slate-300 space-y-3">
                  <div className="flex gap-3">
                    <span className="text-slate-500 select-none">—</span>
                    <p>
                      <span className="text-amber-400">dependable</span>. i pause, understand and evaluate before taking action.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-500 select-none">—</span>
                    <p>
                      <span className="text-emerald-400">thrive in ambiguity</span>. startup life taught me to work towards ideas, not just bullet points.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-500 select-none">—</span>
                    <p>
                      <span className="text-white">lifelong learner</span>. among the things i love to do,{" "}
                      <span className="text-emerald-400">impacting people with my code</span> comes first.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stack */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">stack</h3>
                <div className="text-slate-300 space-y-3">
                  <div className="flex gap-3">
                    <span className="text-slate-500 select-none">—</span>
                    <p>
                      <span className="text-slate-400">core:</span>{" "}
                      <span className="text-slate-200">react</span>,{" "}
                      <span className="text-slate-200">typescript</span>,{" "}
                      <span className="text-slate-200">graphql</span>,{" "}
                      <span className="text-slate-200">postgresql</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-500 select-none">—</span>
                    <p>
                      <span className="text-slate-400">exploring:</span>{" "}
                      <span className="text-slate-200">rust</span>,{" "}
                      <span className="text-slate-200">systems programming</span>,{" "}
                      <span className="text-slate-200">message queues</span>
                    </p>
                  </div>
                </div>
              </div>

            </section>
          )}
      </main>
    </div>
  );
}

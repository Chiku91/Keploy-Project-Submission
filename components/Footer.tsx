"use client";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-[1600px] px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          
          {/* Column 1 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="/docs" className="hover:text-zinc-900 dark:hover:text-white">Docs</a></li>
              <li><a href="https://keploy.io/docs" target="_blank">Support Policy</a></li>
              <li><a href="https://keploy.io/docs" target="_blank">Learn</a></li>
              <li><a href="https://keploy.io/blog" target="_blank">Blog</a></li>
              <li><a href="https://keploy.io/team" target="_blank">Team</a></li>
              <li><a href="https://keploy.io/analytics" target="_blank">Analytics</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              More
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="https://keploy.io/products" target="_blank">Products</a></li>
              <li><a href="https://keploy.io/solutions" target="_blank">Solutions</a></li>
              <li><a href="https://keploy.io/blog" target="_blank">Community</a></li>
              <li><a href="https://github.com/keploy/keploy" target="_blank">GitHub</a></li>
              <li><a href="https://keploy.io/releases" target="_blank">Releases</a></li>
              <li><a href="https://keploy.io/governance" target="_blank">Governance</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              About Keploy
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="https://keploy.io" target="_blank">Keploy</a></li>
              <li><a href="https://github.com/keploy/keploy" target="_blank">Open Source</a></li>
              <li><a href="https://github.com/keploy" target="_blank">GitHub</a></li>
              <li><a href="https://twitter.com/keployio" target="_blank">X (Twitter)</a></li>
              <li><a href="https://www.linkedin.com/company/keploy" target="_blank">LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="https://keploy.io/privacy" target="_blank">Privacy Policy</a></li>
              <li><a href="https://keploy.io/terms" target="_blank">Terms of Service</a></li>
              <li><a href="https://keploy.io/cookies" target="_blank">Cookie Preferences</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Subscribe to our newsletter
            </h3>
            <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
              Stay updated on new releases, features, guides, and case studies.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="you@domain.com"
                className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
              />
              <button
                type="submit"
                className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 md:flex-row">
          <p>© {new Date().getFullYear()} Keploy, Inc.</p>

          <div className="flex gap-4">
            <a href="https://github.com/keploy" target="_blank">GitHub</a>
            <a href="https://twitter.com/keployio" target="_blank">X</a>
            <a href="https://www.linkedin.com/company/keploy" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

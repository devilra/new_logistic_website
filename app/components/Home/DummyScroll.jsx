import React from "react";

export default function LogisticsStickyHeadingPreview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-16">
        {/* The area containing the heading that should become sticky */}
        <section className="px-4 md:px-8">
          {/* The sticky heading container. Use position: sticky so it becomes fixed when it reaches the top of the viewport. top should equal navbar height (4rem). */}
          <div className="mt-6">
            <div className="sticky top-36 z-20 bg-white">
              {/* Add a little inner wrapper with border and background to match the site look */}
              <div className="py-4 md:py-6 bg-white border-b border-gray-200">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Logistics insights
                </h3>
                <div className="mt-1 h-0.5 w-full bg-transparent">
                  <div className="w-full max-w-full h-0.5 bg-gray-900/5" />
                </div>
              </div>
            </div>

            {/* Content below the sticky heading - scrolls under the heading */}
            <div className="pt-6 pb-24">
              <h4 className="text-xl font-semibold">Latest insights</h4>
              <p className="text-gray-600 mt-2 max-w-2xl">
                Here are the most recent articles, trends and research on
                resilience within logistics.
              </p>

              {/* Example horizontal cards (like the screenshot) */}
              <div className="mt-6 overflow-x-auto">
                <div className="flex gap-4 w-max pb-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <article
                      key={i}
                      className="w-64 md:w-72 flex-shrink-0 bg-white rounded-lg shadow p-0"
                    >
                      <div className="h-40 md:h-44 rounded-t-lg bg-gradient-to-b from-cyan-300 to-sky-200 flex items-end p-3">
                        <span className="text-white font-semibold text-sm">
                          Rethinking
                        </span>
                      </div>
                      <div className="p-3">
                        <h5 className="font-semibold">
                          How Global Supply Chains Are Being Rethought
                        </h5>
                        <p className="text-sm text-gray-500 mt-2">
                          Short excerpt showing preview of insight article. This
                          content scrolls under the sticky heading.
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Long content to allow scrolling behaviour demo */}
              <div className="mt-8 space-y-6">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="p-4 bg-white rounded-lg shadow">
                    <h6 className="font-semibold">Article title #{i + 1}</h6>
                    <p className="text-gray-600 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis, similique!
                    </p>
                    <div className="mt-3 h-40 bg-gray-100 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* small footer spacer */}
      <footer className="h-24" />
    </div>
  );
}

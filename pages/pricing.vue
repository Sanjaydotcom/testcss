<script>
definePageMeta({
  layout: "home",
});
</script>

<template>
  <div class="bg-white">
    <!-- Header and Page Header -->
    <div class="relative">
      <!-- Page Header -->
      <div
        class="
          relative
          max-w-2xl
          mx-auto
          py-24
          px-4
          sm:px-6
          lg:max-w-7xl lg:py-32 lg:px-8
        "
      >
        <div class="relative">
          <h1
            class="
              text-3xl
              font-extrabold
              text-gray-900
              sm:text-5xl sm:leading-none sm:tracking-tight
              lg:text-6xl
            "
          >
            Pricing plans for teams of all sizes
          </h1>
          <p class="mt-6 max-w-2xl text-xl text-gray-500">
            Choose an affordable plan that's packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>
      </div>
    </div>
    <!-- Pricing Section -->
    <section class="relative" aria-labelledby="pricing-heading">
      <h2 id="pricing-heading" class="sr-only">Pricing</h2>

      <!-- Tiers -->
      <div
        class="
          max-w-2xl
          mx-auto
          px-4
          space-y-12
          sm:px-6
          lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8
        "
      >
        <div
          class="
            relative
            p-8
            bg-white
            border border-gray-200
            rounded-2xl
            shadow-sm
            flex flex-col
          "
        >
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-900">Small business</h3>
            <p class="mt-4 flex items-baseline text-gray-900">
              <span class="text-5xl font-extrabold tracking-tight">$24</span>
              <span class="ml-1 text-xl font-semibold">/month</span>
            </p>
            <p class="mt-6 text-gray-500">
              The essentials to provide your best work for clients.
            </p>

            <!-- Feature list -->
            <ul role="list" class="mt-6 space-y-6">
              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">5 products</span>
              </li>

              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Up to 1,000 subscribers</span>
              </li>

              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Basic analytics</span>
              </li>

              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500"
                  >48-hour support response time</span
                >
              </li>
            </ul>
          </div>

          <a
            href="#"
            class="
              bg-rose-50
              text-blue-700
              hover:bg-rose-100
              mt-8
              block
              w-full
              py-3
              px-6
              border border-transparent
              rounded-md
              text-center
              font-medium
            "
            >Monthly billing</a
          >
        </div>

        <div
          class="
            relative
            p-8
            bg-white
            border border-gray-200
            rounded-2xl
            shadow-sm
            flex flex-col
          "
        >
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-900">Startup</h3>

            <p
              class="
                absolute
                top-0
                py-1.5
                px-4
                bg-green-400
                rounded-full
                text-xs
                font-semibold
                uppercase
                tracking-wide
                text-white
                transform
                -translate-y-1/2
              "
            >
              Most popular
            </p>
            <p class="mt-4 flex items-baseline text-gray-900">
              <span class="text-5xl font-extrabold tracking-tight">$32</span>
              <span class="ml-1 text-xl font-semibold">/month</span>
            </p>
            <p class="mt-6 text-gray-500">
              A plan that scales with your rapidly growing business.
            </p>

            <!-- Feature list -->
            <ul role="list" class="mt-6 space-y-6">
              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">25 products</span>
              </li>

              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Up to 10,000 subscribers</span>
              </li>

              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Advanced analytics</span>
              </li>

              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500"
                  >24-hour support response time</span
                >
              </li>

              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Marketing automations</span>
              </li>
            </ul>
          </div>

          <a
            href="#"
            class="
              bg-blue-500
              text-white
              hover:bg-blue-600
              mt-8
              block
              w-full
              py-3
              px-6
              border border-transparent
              rounded-md
              text-center
              font-medium
            "
            >Monthly billing</a
          >
        </div>

        <div
          class="
            relative
            p-8
            bg-white
            border border-gray-200
            rounded-2xl
            shadow-sm
            flex flex-col
          "
        >
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-900">Enterprise</h3>
            <p class="mt-4 flex items-baseline text-gray-900">
              <span class="text-5xl font-extrabold tracking-tight">$48</span>
              <span class="ml-1 text-xl font-semibold">/month</span>
            </p>
            <p class="mt-6 text-gray-500">
              Dedicated support and infrastructure for your company.
            </p>

            <!-- Feature list -->
            <ul role="list" class="mt-6 space-y-6">
              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Unlimited products</span>
              </li>

              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Unlimited subscribers</span>
              </li>

              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Advanced analytics</span>
              </li>

              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500"
                  >1-hour, dedicated support response time</span
                >
              </li>

              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Marketing automations</span>
              </li>

              <li class="flex">
                <!-- Heroicon name: outline/check -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="ml-3 text-gray-500">Custom integrations</span>
              </li>
            </ul>
          </div>

          <a
            href="#"
            class="
              bg-rose-50
              text-blue-700
              hover:bg-rose-100
              mt-8
              block
              w-full
              py-3
              px-6
              border border-transparent
              rounded-md
              text-center
              font-medium
            "
            >Monthly billing</a
          >
        </div>
      </div>
    </section>

    <!-- Logo Cloud -->
    <section
      aria-labelledby="customer-heading"
      class="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
    >
      <h2 id="customer-heading" class="sr-only">Our customers</h2>
      <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            class="h-12"
            src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
            alt="Tuple"
          />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            class="h-12"
            src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
            alt="Mirage"
          />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            class="h-12"
            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
            alt="StaticKit"
          />
        </div>
        <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            class="h-12"
            src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
            alt="Transistor"
          />
        </div>
        <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            class="h-12"
            src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
            alt="Workcation"
          />
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <div class="relative">
      <!-- Decorative background -->
      <div
        aria-hidden="true"
        class="absolute inset-x-0 h-1/2 bg-gradient-to-b from-white to-gray-50"
      ></div>

      <div class="relative max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
          class="
            relative
            py-24
            px-8
            bg-blue-500
            rounded-xl
            shadow-2xl
            overflow-hidden
            lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8
          "
        >
          <div
            class="
              absolute
              inset-0
              opacity-50
              filter
              saturate-0
              mix-blend-multiply
            "
          >
            <img
              src="https://images.unsplash.com/photo-1568347877321-f8935c7dc5a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="relative lg:col-span-1">
            <img
              class="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
              alt=""
            />
            <blockquote class="mt-6 text-white">
              <p class="text-xl font-medium sm:text-2xl">
                LogistiX has completely transformed how we interact with
                customers. We've seen record bookings, higher customer
                satisfaction, and reduced churn.
              </p>
              <footer class="mt-6">
                <p class="flex flex-col font-medium">
                  <span>Marie Chilvers</span>
                  <span>CEO, Workcation</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <section
      aria-labelledby="faq-heading"
      class="
        max-w-2xl
        mx-auto
        py-24
        px-4
        divide-y divide-gray-200
        sm:px-6
        lg:max-w-7xl lg:py-32 lg:px-8
      "
    >
      <h2 id="faq-heading" class="text-3xl font-extrabold text-gray-900">
        Frequently asked questions
      </h2>
      <div class="mt-8">
        <dl class="divide-y divide-gray-200">
          <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
            <dt class="text-base font-medium text-gray-900 md:col-span-5">
              What&#039;s the best thing about LogistiX?
            </dt>
            <dd class="mt-2 md:mt-0 md:col-span-7">
              <p class="text-base text-gray-500">
                LogistiX is a one stop destination for all your logistics needs.
                We have a wide range of services to choose from, including air,
                sea, and land transportation, warehousing, and distribution
                integrated right into our platform.
              </p>
            </dd>
          </div>

          <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
            <dt class="text-base font-medium text-gray-900 md:col-span-5">
              What are some other features which comes with LogistiX?
            </dt>
            <dd class="mt-2 md:mt-0 md:col-span-7">
              <p class="text-base text-gray-500">
                We have a range of related solutions which are integrated into
                our platform alongside the primary shipping module. This
                includes HR and payroll systems, a complete finance solution,
                and an advanced CRM.
              </p>
            </dd>
          </div>

          <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
            <dt class="text-base font-medium text-gray-900 md:col-span-5">
              Does LogistiX have a mobile app?
            </dt>
            <dd class="mt-2 md:mt-0 md:col-span-7">
              <p class="text-base text-gray-500">
                LogistiX does not have a mobile app at the moment, however we
                are working on one. That being said, all our services are fully
                supported on all types of devices regardless of screen
                resolution.
              </p>
            </dd>
          </div>

          <!-- More questions... -->
          <!-- More items... -->
        </dl>
      </div>
    </section>
  </div>
</template>
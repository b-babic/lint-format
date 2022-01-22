import { ArrowLeftIcon } from "./icons/arrow-left";

export function NotFoundPage() {
  return (
    <div class="flex pt-48 items-center">
      <div class="flex flex-col px-5 text-gray-700 items-center justify-center md:flex-row">
        <div class="max-w-lg">
          <div class="font-bold leading-normal tracking-wide text-6xl">404</div>

          <p class="font-light leading-normal text-3xl md:text-4xl">
            Sorry we couldn&apos;t find this page.{" "}
          </p>

          <p class="mb-6">But dont worry, you can find plenty of other things on our homepage.</p>

          <a
            class="border border-transparent inline-flex font-semibold py-4 pr-6 transition-colors text-green-600 items-center group hover:cursor-pointer hover:text-green-700 focus:border-teal-500"
            href="/"
          >
            <div className="h-5 mr-2 transform transition-transform w-5 -translate-x-0 group-hover:-translate-x-2">
              <ArrowLeftIcon />
            </div>
            Back to homepage
          </a>
        </div>
      </div>
    </div>
  );
}

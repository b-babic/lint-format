import { Link } from "wouter";

import { ArrowLeftIcon } from "../ui/icons/arrow-left";

function TestComponent() {
  return null;
}

export function Homepage() {
  return (
    <section class="py-16">
      <TestComponent />
      <article class="prose lg:prose-xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>

        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with
          the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for
          Halloween.
        </p>

        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up
          around the country.
        </p>
      </article>

      <Link to="test">
        <div class="border border-transparent flex font-semibold py-4 pr-6 transition-colors text-green-600 items-center group hover:cursor-pointer hover:text-green-700 focus:border-teal-500">
          Go to not found page
          <div class="h-5 ml-2 transform transition-transform w-5 translate-x-0 group-hover:translate-x-2">
            <ArrowLeftIcon classNames="transform rotate-180" />
          </div>
        </div>
      </Link>
    </section>
  );
}

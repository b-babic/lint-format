import type { ComponentChildren } from "preact";

interface DefaultLayoutProps {
  children: ComponentChildren;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <main class="flex flex-col min-h-screen w-full antialised">
      <div class="container mx-auto">{children}</div>
    </main>
  );
}

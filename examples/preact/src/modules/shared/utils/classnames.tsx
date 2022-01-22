const cx = (...classNames: ReadonlyArray<string | boolean | undefined>): string => classNames.filter(Boolean).join(" ");

export { cx };

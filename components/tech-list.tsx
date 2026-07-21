type TechListProps = {
  items: readonly string[];
  label: string;
  emphasized?: boolean;
};

export function TechList({ items, label, emphasized = false }: TechListProps) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className={
            emphasized
              ? "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
              : "rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

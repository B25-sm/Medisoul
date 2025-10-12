import * as React from "react";

type AccordionContextType = {
  openItem: string | null;
  setOpenItem: (v: string | null) => void;
  collapsible: boolean;
};

const AccordionContext = React.createContext<AccordionContextType | null>(null);

type AccordionItemContextType = { value: string };
const AccordionItemContext = React.createContext<AccordionItemContextType | null>(null);

export function Accordion({
  type,
  collapsible = false,
  className,
  children,
}: {
  type: "single";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  return (
    <div className={className} data-accordion-type={type}>
      <AccordionContext.Provider value={{ openItem, setOpenItem, collapsible }}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
}

export function AccordionItem({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className="border-b">{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  const acc = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);
  if (!acc || !item) return null;
  const isOpen = acc.openItem === item.value;
  return (
    <button
      onClick={() => {
        if (isOpen) {
          acc.setOpenItem(acc.collapsible ? null : item.value);
        } else {
          acc.setOpenItem(item.value);
        }
      }}
      className={"flex w-full items-center justify-between py-3 text-left " + (className ?? "")}
    >
      <span>{children}</span>
      <span>{isOpen ? "−" : "+"}</span>
    </button>
  );
}

export function AccordionContent({ children, className }: { children: React.ReactNode; className?: string }) {
  const acc = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);
  if (!acc || !item) return null;
  const isOpen = acc.openItem === item.value;
  return isOpen ? <div className={className}>{children}</div> : null;
}



import Image from "next/image";
import { MaterialIcon } from "@/components/marketing/material-icon";
import { homeValueRows } from "@/lib/content/home";

export function ValueComparisonRows() {
  return (
    <div className="flex flex-col gap-3.5">
      {homeValueRows.map((row) => (
        <div
          key={row.title}
          className="flex items-center gap-4 rounded-[18px] border p-4 md:p-5"
          style={{
            opacity: row.opacity,
            background: row.rowBg,
            borderColor: row.rowBorder,
            boxShadow: row.shadow,
          }}
        >
          {row.useBrandIcon ? (
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-cream shadow-[0_4px_12px_rgba(255,122,89,0.25)]">
              <Image src="/logo.svg" alt="DearMelody" width={30} height={30} />
            </div>
          ) : (
            <div
              className="flex size-11 shrink-0 items-center justify-center rounded-full"
              style={{ background: row.bg }}
            >
              <MaterialIcon
                name={row.icon}
                className="text-2xl"
                style={{ color: row.fg }}
              />
            </div>
          )}
          <div>
            <div className="text-[17px] font-bold text-ink">{row.title}</div>
            <div className="text-[15px] text-muted-text">{row.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

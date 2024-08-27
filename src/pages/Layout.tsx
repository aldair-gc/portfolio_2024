import { MenuBar } from "@/modules/MenuBar";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  const LINKS = ["home", "projects", "expertise", "about", "contact"] as const;
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center">
      <MenuBar links={LINKS.map((link) => t(`${link}.title`))} />
      <Outlet />
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          style={{
            clipPath: "polygon(50% 70%, 2% 40%, 100% 4%, 30% 90%, 35% 1%, 90% 90%)",
          }}
          className="relative aspect-square h-full left-1/2 -translate-x-1/2 bg-gradient-to-tr from-neutral-600 to-neutral-100 opacity-30"
        />
      </div>
    </div>
  );
}

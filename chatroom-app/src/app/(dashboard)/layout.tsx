import { Toaster } from "react-hot-toast";

import LayoutClient from "@/components/layout/Layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <LayoutClient>{children}</LayoutClient>;
}

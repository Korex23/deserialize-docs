import { redirect } from "next/navigation";

export default function ApiHome() {
  redirect("/api/swap-api/docs/introduction");
}

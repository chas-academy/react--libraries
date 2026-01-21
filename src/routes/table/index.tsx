"use no memo";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { tableData } from "@/lib/table";

export const Route = createFileRoute("/table/")({
  component: RouteComponent,
});

const columns = [
  { accessorKey: "invoice", header: "Invoice" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "method", header: "Method" },
  { accessorKey: "amount", header: "Amount" },
];

function RouteComponent() {
  const router = useRouter();

  return <></>;
}

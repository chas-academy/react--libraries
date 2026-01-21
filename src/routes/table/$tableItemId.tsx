import { tableData } from "@/lib/table";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/table/$tableItemId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { tableItemId } = Route.useParams();
  const tableItem = tableData.find((item) => item.id === tableItemId);

  return <></>;
}

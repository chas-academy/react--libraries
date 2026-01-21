import { tableData } from "@/lib/table";
import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/table/$tableItemId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { tableItemId } = Route.useParams();
  const tableItem = tableData.find((item) => item.id === tableItemId);

  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle className="bg-indigo-100 w-fit p-2 rounded-md">
          {tableItem?.invoice}
        </CardTitle>
        <CardDescription>Invoice overview</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Status <strong>{tableItem?.status}</strong>
        </p>
        <p>
          Method <strong>{tableItem?.method}</strong>
        </p>
        <p>
          Amount <strong>{tableItem?.amount}</strong>
        </p>
      </CardContent>
    </Card>
  );
}

"use no memo";
import { createFileRoute, useRouter } from '@tanstack/react-router';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { tableData } from '@/lib/table';

export const Route = createFileRoute('/table/')({
  component: RouteComponent,
});

const columns = [
  { accessorKey: 'invoice', header: 'Invoice' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'method', header: 'Method' },
  { accessorKey: 'amount', header: 'Amount' },
];

function RouteComponent() {
  const router = useRouter();
  const table = useReactTable({ data: tableData, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} onClick={() => router.navigate({ to: `/table/${row.original.id}` })}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

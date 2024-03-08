import React from "react";
import { Firm } from "../types";
import { useReactTable,   createColumnHelper,
    flexRender,
    getCoreRowModel,
   } from "@tanstack/react-table";

function FirmTable(firms: Firm[]) {
    const columnHelper = createColumnHelper<Firm>();
    const columns = [
        columnHelper.accessor(row => row.firm_id, {
            id: 'firmId',
            cell: info => <i>{info.getValue()}</i>,
            header: () => <span>Firm ID</span>,
            footer: info => info.column.id,
          }),
            columnHelper.accessor(row => row.firm_name, {
                id: 'firmName',
                cell: info => <i>{info.getValue()}</i>,
                header: () => <span>Firm Name</span>,
                footer: info => info.column.id,
            }),
            columnHelper.accessor(row => row.firm_type, {
                id: 'firmType',
                cell: info => <i>{info.getValue()}</i>,
                header: () => <span>Firm Type</span>,
                footer: info => info.column.id,
            }),
            columnHelper.accessor(row => row.date_added, {
                id: 'dateAdded',
                cell: info => <i>{info.getValue()}</i>,
                header: () => <span>Firm Date Added</span>,
                footer: info => info.column.id,
            }),
            columnHelper.accessor(row => row.address, {
                id: 'address',
                cell: info => <i>{info.getValue()}</i>,
                header: () => <span>Firm Address</span>,
                footer: info => info.column.id,
            }),

    ]
    const data = React.useMemo(() => firms, [firms]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })
      return (
        <div className="p-2">
          <table>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="h-4" />
        </div>
      )
    }

export default FirmTable;
import type { RawRecord } from "../types/RawRecord";
import type { RowData } from "../types/RowData";
import { fieldFromDate } from "./fieldFromDate";


export function convertToRowData(records: RawRecord[], cols: [key: string, label: string][]): RowData[] {
    const rows: RowData[] = cols.map(([_, label]) => ({
        breakdown: label
    }));

    for (const record of records) {
        const col = fieldFromDate(record.date);

        cols.forEach(([key], index) => {
            const value = record[key];
            if (value !== undefined) {
                rows[index][col] = value;
            }
        });
    }

    return rows;
}

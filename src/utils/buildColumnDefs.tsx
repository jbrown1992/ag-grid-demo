import { getYearFields } from "./getYearFields";
import type { RawRecord } from "../types/RawRecord";

export const buildColumnDefs = (records: RawRecord[]) => {
    const years = getYearFields(records);

    const yearCols = years.map(field => ({
        headerName: field === "ttm" ? "TTM" : field.replace("y", ""),
        field,
        type: "numericColumn",
        valueFormatter: (params: any) => {
            const value = params.value;
            if (value == null) return "";
            return value.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
            });
        }
    }));

    return [
        { headerName: "Breakdown", field: "breakdown" },
        ...yearCols
    ];
};

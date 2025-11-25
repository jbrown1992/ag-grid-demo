import type { RawRecord } from "../types/RawRecord";
import type { RowData } from "../types/RowData";

export const fieldFromDate = (date: string): string => date === "TTM" ? "ttm" : "y" + date.split("-")[0];
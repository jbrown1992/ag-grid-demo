import { fieldFromDate } from "./fieldFromDate";
import type { RawRecord } from "../types/RawRecord";


export const getYearFields = (records: RawRecord[]) => {
    return records.map(r => fieldFromDate(r.date)
    );
};

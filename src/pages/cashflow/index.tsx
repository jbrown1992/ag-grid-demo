import { AgGridReact } from "ag-grid-react";
import { useContext, useEffect, useState } from "react";
import type { ColDef, ColGroupDef } from "ag-grid-community";
import cashflowGridColumns from "../../types/cashflowGridColumns";
import { TickerContext } from "../../context/TickerContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { pages } from "../../routes/pages";
import type { RowData } from "../../types/RowData";
import { buildColumnDefs } from "../../utils/buildColumnDefs";
import { convertToRowData } from "../../utils/convertToRowData";
const rawData = [
    {
        "date": "TTM",
        "operatingCashFlow": 147039000,
        "cashFlowFromContinuingOperatingActivities": 147039000,
        "netIncomeFromContinuingOperations": 104912000,
        "operatingGainsLosses": -1734000,
        "depreciationAmortisationDepletion": 39831000,
        "deferredTax": -3132000,
        "assetImpairmentCharge": 950000,
        "unrealisedGainLossOnInvestmentSecurities": 511000,
        "stockBasedCompensation": 12125000,
        "changeInWorkingCapital": -6424000,
        "investingCashFlow": -91957000,
        "financingCashFlow": -46922000,
        "endCashPosition": 29000000,
        "capitalExpenditure": -69022000,
        "issuanceOfCapitalStock": 2039000,
        "issuanceOfDebt": 0,
        "repaymentOfDebt": -2250000,
        "repurchaseOfCapitalStock": -19963000,
        "freeCashFlow": 78017000
    },
    {
        "date": "2025-06-30",
        "operatingCashFlow": 136162000,
        "cashFlowFromContinuingOperatingActivities": 136162000,
        "netIncomeFromContinuingOperations": 101832000,
        "operatingGainsLosses": 202000,
        "depreciationAmortisationDepletion": 34153000,
        "deferredTax": -7056000,
        "assetImpairmentCharge": 943000,
        "unrealisedGainLossOnInvestmentSecurities": -536000,
        "stockBasedCompensation": 11974000,
        "changeInWorkingCapital": -5350000,
        "investingCashFlow": -72599000,
        "financingCashFlow": -51699000,
        "endCashPosition": 30242000,
        "capitalExpenditure": -64551000,
        "issuanceOfCapitalStock": 2056000,
        "issuanceOfDebt": 0,
        "repaymentOfDebt": -3216000,
        "repurchaseOfCapitalStock": -18420000,
        "freeCashFlow": 71611000
    },
    {
        "date": "2024-06-30",
        "operatingCashFlow": 118548000,
        "cashFlowFromContinuingOperatingActivities": 118548000,
        "netIncomeFromContinuingOperations": 88136000,
        "operatingGainsLosses": 245000,
        "depreciationAmortisationDepletion": 22287000,
        "deferredTax": -4738000,
        "assetImpairmentCharge": 206000,
        "unrealisedGainLossOnInvestmentSecurities": -146000,
        "stockBasedCompensation": 10734000,
        "changeInWorkingCapital": 1824000,
        "investingCashFlow": -96970000,
        "financingCashFlow": -37757000,
        "endCashPosition": 18315000,
        "capitalExpenditure": -44477000,
        "issuanceOfCapitalStock": 2002000,
        "issuanceOfDebt": 24395000,
        "repaymentOfDebt": -29070000,
        "repurchaseOfCapitalStock": -17254000,
        "freeCashFlow": 74071000
    },
    {
        "date": "2023-06-30",
        "operatingCashFlow": 87582000,
        "cashFlowFromContinuingOperatingActivities": 87582000,
        "netIncomeFromContinuingOperations": 72361000,
        "operatingGainsLosses": 469000,
        "depreciationAmortisationDepletion": 13861000,
        "deferredTax": -6059000,
        "assetImpairmentCharge": 30000,
        "unrealisedGainLossOnInvestmentSecurities": -303000,
        "stockBasedCompensation": 9611000,
        "changeInWorkingCapital": -2388000,
        "investingCashFlow": -22680000,
        "financingCashFlow": -43935000,
        "endCashPosition": 34704000,
        "capitalExpenditure": -28107000,
        "issuanceOfCapitalStock": 1866000,
        "issuanceOfDebt": 0,
        "repaymentOfDebt": -2750000,
        "repurchaseOfCapitalStock": -22245000,
        "freeCashFlow": 59475000
    },
    {
        "date": "2022-06-30",
        "operatingCashFlow": 89035000,
        "cashFlowFromContinuingOperatingActivities": 89035000,
        "netIncomeFromContinuingOperations": 72738000,
        "operatingGainsLosses": -1000,
        "depreciationAmortisationDepletion": 14460000,
        "deferredTax": -5702000,
        "assetImpairmentCharge": 101000,
        "unrealisedGainLossOnInvestmentSecurities": -509000,
        "stockBasedCompensation": 7502000,
        "changeInWorkingCapital": 446000,
        "investingCashFlow": -30311000,
        "financingCashFlow": -58876000,
        "endCashPosition": 13931000,
        "capitalExpenditure": -23886000,
        "issuanceOfCapitalStock": 1841000,
        "issuanceOfDebt": 0,
        "repaymentOfDebt": -9023000,
        "repurchaseOfCapitalStock": -32696000,
        "freeCashFlow": 65149000
    }
]

const CashflowGrid = () => {
    const [colDefs, setColDefs] = useState<(ColDef<RowData> | ColGroupDef<RowData>)[]>([]);
    const [rowData, setRowData] = useState<RowData[]>([]);
    const { ticker } = useContext(TickerContext);
    const nav = useNavigate();

    console.log("ticker on cashflows: " + ticker)
    useEffect(() => {
        const rows = convertToRowData(rawData, cashflowGridColumns);
        setRowData(rows);

        const dynamicCols = buildColumnDefs(rawData);
        setColDefs(dynamicCols);
    }, [rawData]);


    return (
        <div>
            <Button onClick={() => nav(pages.home)}>Back</Button>
            <div style={{ height: 1000 }}>
                <AgGridReact rowData={rowData} columnDefs={colDefs}>
                </AgGridReact >
            </div>
        </div>
    )
}

export default CashflowGrid;
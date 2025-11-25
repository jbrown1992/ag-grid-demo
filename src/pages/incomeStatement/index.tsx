import type { ColDef, ColGroupDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useState, useContext, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { TickerContext } from "../../context/TickerContext";
import { pages } from "../../routes/pages";
import { convertToRowData } from "../../utils/convertToRowData";
import type { RowData } from "../../types/RowData";
import { buildColumnDefs } from "../../utils/buildColumnDefs";
import incomeStatementGridColumns from "../../types/incomeStatementGridColumns";

var rawData = [{
    "date": "TTM",
    "totalRevenue": 293812000,
    "costOfRevenue": 91775000,
    "grossProfit": 202037000,
    "operatingExpense": 66100000,
    "operatingIncome": 135937000,
    "netNonOperatingInterestIncomeExpense": 441000,
    "otherIncomeExpense": -8719000,
    "preTaxIncome": 127659000,
    "taxProvision": 22747000,
    "netIncomeCommonStockholders": 104912000,
    "dilutedNiAvailableToComStockholders": 104912000,
    "basicEps": 14.11,
    "dilutedEps": 14.06,
    "basicAverageShares": 7433000,
    "dilutedAverageShares": 7464000,
    "totalOperatingIncomeAsReported": 135937000,
    "totalExpenses": 157875000,
    "netIncomeFromContinuingAndDiscontinuedOperation": 104912000,
    "normalisedIncome": 104709833.67,
    "interestIncome": 2942000,
    "interestExpense": 2501000,
    "netInterestIncome": 441000,
    "ebit": 130160000,
    "ebitda": 169991000,
    "reconciledCostOfRevenue": 91775000,
    "reconciledDepreciation": 39831000,
    "netIncomeFromContinuingOperationNetMinorityInterest": 104912000,
    "totalUnusualItemsExcludingGoodwill": 246000,
    "totalUnusualItems": 246000,
    "normalisedEbitda": 169745000,
    "taxRateForCalcs": 0,
    "taxEffectOfUnusualItems": 43833.67
},
{
    "date": "2025-06-30",
    "totalRevenue": 281724000,
    "costOfRevenue": 87831000,
    "grossProfit": 193893000,
    "operatingExpense": 65365000,
    "operatingIncome": 128528000,
    "netNonOperatingInterestIncomeExpense": 262000,
    "otherIncomeExpense": -5163000,
    "preTaxIncome": 123627000,
    "taxProvision": 21795000,
    "netIncomeCommonStockholders": 101832000,
    "dilutedNiAvailableToComStockholders": 101832000,
    "basicEps": 13.70,
    "dilutedEps": 13.64,
    "basicAverageShares": 7433000,
    "dilutedAverageShares": 7465000,
    "totalOperatingIncomeAsReported": 128528000,
    "totalExpenses": 153196000,
    "netIncomeFromContinuingAndDiscontinuedOperation": 101832000,
    "normalisedIncome": 102192912,
    "interestIncome": 2647000,
    "interestExpense": 2385000,
    "netInterestIncome": 262000,
    "ebit": 126012000,
    "ebitda": 160165000,
    "reconciledCostOfRevenue": 87831000,
    "reconciledDepreciation": 34153000,
    "netIncomeFromContinuingOperationNetMinorityInterest": 101832000,
    "totalUnusualItemsExcludingGoodwill": -438000,
    "totalUnusualItems": -438000,
    "normalisedEbitda": 160603000,
    "taxRateForCalcs": 0,
    "taxEffectOfUnusualItems": -77088
},
{
    "date": "2024-06-30",
    "totalRevenue": 245122000,
    "costOfRevenue": 74114000,
    "grossProfit": 171008000,
    "operatingExpense": 61575000,
    "operatingIncome": 109433000,
    "netNonOperatingInterestIncomeExpense": 222000,
    "otherIncomeExpense": -1868000,
    "preTaxIncome": 107787000,
    "taxProvision": 19651000,
    "netIncomeCommonStockholders": 88136000,
    "dilutedNiAvailableToComStockholders": 88136000,
    "basicEps": 11.86,
    "dilutedEps": 11.80,
    "basicAverageShares": 7431000,
    "dilutedAverageShares": 7469000,
    "totalOperatingIncomeAsReported": 109433000,
    "totalExpenses": 135689000,
    "netIncomeFromContinuingAndDiscontinuedOperation": 88136000,
    "normalisedIncome": 88585082,
    "interestIncome": 3157000,
    "interestExpense": 2935000,
    "netInterestIncome": 222000,
    "ebit": 110722000,
    "ebitda": 133009000,
    "reconciledCostOfRevenue": 74114000,
    "reconciledDepreciation": 22287000,
    "netIncomeFromContinuingOperationNetMinorityInterest": 88136000,
    "totalUnusualItemsExcludingGoodwill": -549000,
    "totalUnusualItems": -549000,
    "normalisedEbitda": 133558000,
    "taxRateForCalcs": 0,
    "taxEffectOfUnusualItems": -99918
},
{
    "date": "2023-06-30",
    "totalRevenue": 211915000,
    "costOfRevenue": 65863000,
    "grossProfit": 146052000,
    "operatingExpense": 57529000,
    "operatingIncome": 88523000,
    "netNonOperatingInterestIncomeExpense": 1026000,
    "otherIncomeExpense": -238000,
    "preTaxIncome": 89311000,
    "taxProvision": 16950000,
    "netIncomeCommonStockholders": 72361000,
    "dilutedNiAvailableToComStockholders": 72361000,
    "basicEps": 9.72,
    "dilutedEps": 9.68,
    "basicAverageShares": 7446000,
    "dilutedAverageShares": 7472000,
    "totalOperatingIncomeAsReported": 88523000,
    "totalExpenses": 123392000,
    "netIncomeFromContinuingAndDiscontinuedOperation": 72361000,
    "normalisedIncome": 72373150,
    "interestIncome": 2994000,
    "interestExpense": 1968000,
    "netInterestIncome": 1026000,
    "ebit": 91279000,
    "ebitda": 105140000,
    "reconciledCostOfRevenue": 65863000,
    "reconciledDepreciation": 13861000,
    "netIncomeFromContinuingOperationNetMinorityInterest": 72361000,
    "totalUnusualItemsExcludingGoodwill": -15000,
    "totalUnusualItems": -15000,
    "normalisedEbitda": 105155000,
    "taxRateForCalcs": 0,
    "taxEffectOfUnusualItems": -2850
},
{
    "date": "2022-06-30",
    "totalRevenue": 198270000,
    "costOfRevenue": 62650000,
    "grossProfit": 135620000,
    "operatingExpense": 52237000,
    "operatingIncome": 83383000,
    "netNonOperatingInterestIncomeExpense": 31000,
    "otherIncomeExpense": 302000,
    "preTaxIncome": 83716000,
    "taxProvision": 10978000,
    "netIncomeCommonStockholders": 72738000,
    "dilutedNiAvailableToComStockholders": 72738000,
    "basicEps": 9.70,
    "dilutedEps": 9.65,
    "basicAverageShares": 7496000,
    "dilutedAverageShares": 7540000,
    "totalOperatingIncomeAsReported": 83383000,
    "totalExpenses": 114887000,
    "netIncomeFromContinuingAndDiscontinuedOperation": 72738000,
    "normalisedIncome": 72447754,
    "interestIncome": 2094000,
    "interestExpense": 2063000,
    "netInterestIncome": 31000,
    "ebit": 85779000,
    "ebitda": 100239000,
    "reconciledCostOfRevenue": 62650000,
    "reconciledDepreciation": 14460000,
    "netIncomeFromContinuingOperationNetMinorityInterest": 72738000,
    "totalUnusualItemsExcludingGoodwill": 334000,
    "totalUnusualItems": 334000,
    "normalisedEbitda": 99905000,
    "taxRateForCalcs": 0,
    "taxEffectOfUnusualItems": 43754
}]


const IncomeStatemnt = () => {
    const [colDefs, setColDefs] = useState<(ColDef<RowData> | ColGroupDef<RowData>)[]>([]);
    const [rowData, setRowData] = useState<RowData[]>([]);
    const { ticker } = useContext(TickerContext);
    const nav = useNavigate();

    console.log("ticker on cashflows: " + ticker)
    useEffect(() => {
        const rows = convertToRowData(rawData, incomeStatementGridColumns);
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

export default IncomeStatemnt;
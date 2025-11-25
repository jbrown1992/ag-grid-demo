
export interface IncomeStatementPeriod {
    date: string;
    totalRevenue: number;
    costOfRevenue: number;
    grossProfit: number;
    operatingExpense: number;
    operatingIncome: number;
    netNonOperatingInterestIncomeExpense: number;
    otherIncomeExpense: number;
    preTaxIncome: number;
    taxProvision: number;
    netIncomeCommonStockholders: number;
    dilutedNiAvailableToComStockholders: number;
    basicEps: number;
    dilutedEps: number;
    basicAverageShares: number;
    dilutedAverageShares: number;
    totalOperatingIncomeAsReported: number;
    totalExpenses: number;
    netIncomeFromContinuingAndDiscontinuedOperation: number;
    normalisedIncome: number;
    interestIncome: number;
    interestExpense: number;
    netInterestIncome: number;
    ebit: number;
    ebitda: number;
    reconciledCostOfRevenue: number;
    reconciledDepreciation: number;
    netIncomeFromContinuingOperationNetMinorityInterest: number;
    totalUnusualItemsExcludingGoodwill: number;
    totalUnusualItems: number;
    normalisedEbitda: number;
    taxRateForCalcs: number;
    taxEffectOfUnusualItems: number;
}

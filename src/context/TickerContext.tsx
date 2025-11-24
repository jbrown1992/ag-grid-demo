import React, { createContext, useState, type ReactNode } from "react";

interface TickerContextType {
    ticker: string;
    setTicker: (value: string) => void;
}

const TickerContext = createContext<TickerContextType>({
    ticker: "",
    setTicker: () => { },
});

interface TickerProviderProps {
    children: ReactNode;
}

const TickerProvider: React.FC<TickerProviderProps> = ({ children }) => {
    const [ticker, setTicker] = useState<string>("");
    
    return (
        <TickerContext.Provider value={{ ticker, setTicker }}>
            {children}
        </TickerContext.Provider>
    );
};

export { TickerContext, TickerProvider };
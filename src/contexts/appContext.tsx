'use client';
import { createContext, useState, useContext, ReactNode } from 'react';

type AppContextType = {
    hideHeader: boolean;
    setHideHeader: (hide: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [hideHeader, setHideHeader] = useState(false);

    return (
        <AppContext.Provider value={{ hideHeader, setHideHeader }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
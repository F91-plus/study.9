import { useState, createContext, useContext } from 'react';

const LocaleContext = createContext();

export function LocaleProvider({children}) {
    const [ locale, setLocale ] = useState('kor');
    return (
        <LocaleContext.Provider value={{locale, setLocale}}>
            {children}
        </LocaleContext.Provider>
    )
}

// locale과 setLocale 값과 함수를 리턴하는 기능
export function useLocale() {
    const context = useContext(LocaleContext);
    // console.log(context);
    if(!context) {
        throw new Error('Local Provider 내부에서만 사용이 가능합니다.');
    }

    return context.locale;
}
export function useSetLocale() {
    const context = useContext(LocaleContext);
    if(!context) {
        throw new Error('Local Provider 내부에서만 사용이 가능합니다.');
    }

    return context.setLocale;
}

// export default LocaleContext;
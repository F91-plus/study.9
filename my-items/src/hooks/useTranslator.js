import { useLocale } from "../context/LocaleContext"


// translator
const dict = {
    kor: {
        'delete btn' : '삭제',
        'edit btn' : '수정',
        'stuff date' : '최신순'
    },
    eng: {
        '삭제' : 'Delete',
        '수정' : 'Edit',
        'stuff date' : 'newest'
    }
}

function useTranslator() {
    const locale = useLocale();
    const translator = (key) => dict[locale][key];
    return translator;
}

export default useTranslator;
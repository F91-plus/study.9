import { useLocale, useSetLocale } from "../context/LocaleContext";

// function LocaleSelect ({ value, onChange }) {
function LocaleSelect () {
    // onChange == setLocale
    const onChange = useSetLocale();

    useLocale();

    const handleChange = (e) => {
        // console.log(e.target.value);
        onChange(e.target.value);
    }

    return(
        <select onChange={handleChange}>
            <option value="kor">한글</option>
            <option value="eng">English</option>
        </select>
    )
}

export default LocaleSelect;
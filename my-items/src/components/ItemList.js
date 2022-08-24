import React, {useContext} from "react";
import LocaleContext, { useLocale } from "../context/LocaleContext";
import useTranslator from "../hooks/useTranslator";

function convertingDate(ms) {
    // ms 시간을 가지고 온다
    // console.log(`converting : ${ms}`); createAt 확인
    const date = new Date(ms);
    return `${date.getFullYear()}. ${date.getMonth()+1}. ${date.getDate()}`
}

function Item( { item, onDelete, onConfig } ) {
    // 4 props 추가
    // console.log(item);
    const { calorie, content, createdAt, imgUrl, title } = item;
    
    // 삭제 
    const handleDelete = () => {
        // 5 구현
        onDelete(item.id);
    }

    // 수정
    const handleConfig = () => {
        onConfig();
    }

    // context
    const locale = useLocale();
    
    const translator = useTranslator();
    
    return(
        <div>
            <div>
                {title}
                <button onClick={handleDelete}> {translator('delete btn')}</button>
                {/* {locale === 'kor' ? '수정' : 'Edit'}  */}
                <button onClick={handleConfig}> {translator('edit btn')} </button>
            </div>
            <div>{calorie} kcal</div>
            <div>{content}</div>
            <img src={imgUrl} />
            {/* createdAt 을 활용해 각 아이템의 등록일자를 출력
            (단, YYYY. MM. DD 형태로 출력) */}
            <div>{convertingDate(createdAt)}</div>
            <p>{locale}</p>
        </div>
    );
}

function ItemList( { items, onDelete, onConfig } ) {
    // 2 props 추가
    return(
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {/* const { calorie, content, createdAt, imgUrl, title } = item */}
                    {/* 사용불가... 새로운 컴포넌트로 만들어서 사용 */}
                    <Item 
                        item={item}
                        onDelete={onDelete} // 3 추가
                        onConfig={onConfig}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ItemList;
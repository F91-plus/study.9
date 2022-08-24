import React from "react";
import FileInput from "./FileInput";

function ItemConfig () {
    
    return (
        <div>
            <form>
                <h3>음식 정보 수정</h3>
                <FileInput type="text" name="imgFile" />
                <input type="text" name="title"  />
                <input type="number" name="calorie"  />
                <input name="content" />
                <button type="submit">Config</button>
            </form>
        </div>
    )
}

export default ItemConfig;
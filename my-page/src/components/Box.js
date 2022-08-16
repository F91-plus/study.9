import React,{useState} from "react";

function Box() {
    const [photos, setPhotos] = useState([]);

// 제이슨프레이스홀더에서 5000개 이미지 출력 해보셥

    let url='https://jsonplaceholder.typicode.com/photos'

    function fetchAPI(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => setPhotos(data))
        .catch((error) => console.log('에러 발생'))
    }
}

    if(photos.length > 0) {
        return(
            photos.map(photo => (
                <div>
                    <img scr={photo.tumbnailUrl}></img>
                </div>
            ))          
    )}
    else {
        return (
            <div>
                <button onClick={()=> fetchAPI(url)}>Click</button>
            </div>
        )
    }

export default Box;
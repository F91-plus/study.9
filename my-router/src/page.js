import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[ 홈페이지 ]</h1>
            <nav>
                <Link to="about">Link : 회사소개</Link><br/>
                <Link to="events">Link : 이벤트</Link><br/>
                <Link to="products">Link : 제품</Link><br/>
                <Link to="contact">Link : 고객지원</Link>
            </nav>
        </div>
    )
}

// http://localhost:3000/about
// http://localhost:3000/about/service
// http://localhost:3000/about/history
export function About() {
    return (
        <div>
            <h1>[ 회사소개 ]</h1>
            <Outlet />
                {/* <Link to="service">Link : 서비스</Link><br/>
                <Link to="history">Link : 연혁</Link><br/>
                <Link to="location">Link : 위치</Link> */}
        </div>
    )
}
export function Service() {
    return (
        <div>
            <h2>[ 서비스~ ]</h2>
            <p>서비스</p>
        </div>
    )
}
export function History() {
    return (
        <div>
            <h2>[ 연혁 ]</h2>
            <p>회사 연혁 소개</p>
        </div>
    )
}          
export function Location() {
    return (
        <div>
            <h2>[ 위치 ]</h2>
            <p>회사 위치 소개</p>
        </div>
    )
}

// http://localhost:3000/events
export function Events() {
    return (
        <div>
            <h1>[ 이벤트 ]</h1>
        </div>
    )
}

// http://localhost:3000/products
const data = {
    '1': {
        name : "아메리카노",
        price: 1500
    },
    '2': {
        name : "아이스티",
        price: 2500
    }
}
export function Products() {
    // 쿼리스트링 :?productId=1&productBrand=LG
    const [ searchParams, setSearchParams ] = useSearchParams();
    console.log(searchParams.get('productId'));
    console.log(searchParams.get('productBrand'));

    // URL 파라미터
    // const params = useParams();
    // console.log(params);
    // ver1
    // const productId = params.productId;

    // ver2
    // const product = data[params.productId];
    
    // ver3 : 없는 데이터를 처리하는 방법
    // console.log(product? 'true' : 'false');

    // ver4 : ver2는 주석처리해야함
    const productId = searchParams.get('productId');
    const product = data[productId];

    return (
        <div>
            {/* ver1 */}
            {/* <h1>[ 제품 {productId} ]</h1>
            <div>
                <p>{data[productId].name}</p>
                <p>{data[productId].price}</p>
            </div> */}

            {/* ver2 & 3 */}
            {product?
                (<>
                    {/* <h1>[ 제품 {params.productId} ]</h1> */}
                    <h1>[ 제품 {productId} ]</h1>
                    <div>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                </>)
                :
                (<>
                    <p>존재하지 않는 데이터입니다!</p>
                </>)
            }
        </div>
    )
}


// http://localhost:3000/contact
export function Contact() {
    return (
        <div>
            <h1>[ 고객지원 ]</h1>
        </div>
    )
}

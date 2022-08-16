import React from "react";
import styled from "styled-components";

const PageUL = styled.ul`
    
    list-style: none;
    text-align :center;
    border: 2px solid black;
`;
const PageLI = styled.li`
    
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
    padding: 5px;
    margin: 3px;
    color : white;
    boder-radius: 5px;
    & : hover {
        color: gold;
        cursor: pointer;
    };
    background: blue;
  
   
`;

const PageSpan = styled.span`
`;





function Pagination( { postsPerpage, totalPosts, paginate}) {

        const pageNumbers = [];

        for(let i = 1; i <= Math.ceil(totalPosts/ postsPerpage); i++) {
            pageNumbers.push(i)
        }
        


        
    return(
        <div>
            <nav>
                <PageUL>
                    {pageNumbers.map(pageNumber => (
                      <PageLI key={pageNumber} >
                        <PageSpan onClick={() => paginate(pageNumber)}>{pageNumber}</PageSpan>
                      </PageLI>  
                    ))}
                </PageUL>
            </nav>

        </div>



    )



}
export default Pagination
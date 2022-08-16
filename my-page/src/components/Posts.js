import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';



const Layout = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin: 0 auto;
    align-itmes: center;
    
    
`;



function Posts() {
        
        const [posts, setPosts] =useState([]);

        //현재 페이지 정보 
        const [currentPage, setCurrentPage] = useState(1);
        const [postsPerpage, setPostsPerPage] = useState(10);
        // const POST_PER_PAGE = 10;
        //
        
        const indexofLast = currentPage * postsPerpage;
        const indexofFirst = indexofLast - postsPerpage;
        const currentPosts = (posts) => {

            let currentPosts = 0;
            currentPosts = posts.slice(indexofFirst,indexofLast);
            return currentPosts;

        }
        
        
        let results = currentPosts(posts);

        useEffect(() => {
            
            // [1,2,3,4,5].splice(1,3).map(num => console.log(num))

            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));

        },[]);
        

      

        

        return (
            
           <Layout>


            {results.map(post => (
                <div key={post.id}>
                    <h3>{post.id} - {post.title}</h3>
                    <p>{post.body}</p>
                  
                    </div>
                
            ))}


            <Pagination 
                postsPerpage={postsPerpage} 
                totalPosts={posts.length}
                paginate={setCurrentPage}
            >
                


            </Pagination>

           </Layout>

        );


    }



export default Posts;
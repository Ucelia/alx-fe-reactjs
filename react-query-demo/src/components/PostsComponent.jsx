import { useQuery } from "react-query";

const fetchData = async () =>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent =() =>{
    const { data, error, isError, isLoading, refetch }= useQuery('fetchPosts', fetchPosts);

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error: {error.message}</div>

    return(
        <div>
            <button onClick={()=>refetch()}>Refetch</button>
            <ul>
                {data.map(item =>(
                <div key={item.id}>{item.title}</div>
            ))}
            </ul>
        </div>
    )
};

export default PostsComponent;
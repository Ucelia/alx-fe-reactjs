import { useQuery } from "react-query";

const fetchData = async () =>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent =() =>{
    const { data, error, isLoading }= useQuery('fetchData', fetchData);

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error loading data</div>

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
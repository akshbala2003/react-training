 import React from 'react';

const Button = () => {
   return( <div>
    <button style={buttonStyle}>edit</button>
    <button style = {buttonStyle}>delete</button>
</div>)
}

const Card = ({posts,currentId}) => {
   return ( <ul style={card}>
    {posts.map(
        (post) => (
            <li key={post.id} style={cardStyle}>
                <h2>Title: {post.title}</h2>
                <p>{post.body}</p>
                <p>Likes : {post.reactions.likes} | Dislikes : {post.reactions.dislikes}</p>
                <p> Views : {post.views}</p>
                {post.userId === currentId && <Button/>
                    }
            </li>
        )
    )}
    </ul>)
}

const PostList = ({data}) => {
    
    const currentId = 123;
    const {posts,total} = data;

    return (
        <div>
            <h1>Total Post: {total}</h1>
            <Card posts={posts} currentId= {currentId}/>
            
        </div>
    )

}

 const card = {
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    listStyleType:'none'
}

const cardStyle = {
    border: '1px solid #ccc',
    margin:'10px',

    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };
  
  const buttonStyle = {
    margin: '5px',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  };
  

export default PostList;
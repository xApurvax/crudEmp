import Link from "next/link"

const PostList = ({posts}) => {
  return (
    <div>
         <div><Link href="/">
            <a>--Home--</a>
        </Link>
        </div>
        <div><h1>User</h1></div>
        <div>{posts.map((post) => {
            return (
                <div key={post.id}>
                <Link href={`posts/${post.id}`}><a>
                    <h4>
                        {post.id} {post.title}
                    </h4>  
                </a></Link>
                    <hr />
                </div>
            )
        })
        }</div>
    </div>
  )
}

export default PostList

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
    const data = await response.json()
    console.log(data)

    return {
        props : {
            posts : data,  
        }
    }
}
import Link from "next/link"
import {useRouter} from "next/router"

const Home = () => {
  const router = useRouter()

  const handleClick = () => {
    // console.log("Order Placed");
    router.push("/product")
  }

  return (
    <div>
      <div><h1>Home Page</h1></div>
      <Link href="/users">
        <a>User</a>
      </Link>
      <br />
      <Link href="/post">
        <a>Post</a>
      </Link>
      <br />
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <br />
      <Link href="/product">
        <a>Products</a>
      </Link>
      <br />
      <Link href="/products">
        <a>Items</a>
      </Link>
      <br />
      <Link href="/product">
        <a>Products</a>
      </Link>
      <br />
      <button onClick={handleClick}>
        Place Order
      </button>
    </div>
  )
}

export default Home
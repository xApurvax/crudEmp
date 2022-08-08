import Link from "next/link"

const product = ({ productId = 100 }) => {
  return (
    <div>
    <div>
      <Link href="/">
        <a>--Home--</a>
      </Link>
    </div>
    <div><h3>
      <Link href="/product/1">
        <a>product 1</a>
      </Link>
    </h3></div>
    <div><h3>
      <Link href="/product/2" >
        <a>product 2</a>
      </Link>
    </h3></div>
    <div><h3>
      <Link href="/product/3" replace >
        <a>product 3</a>
      </Link>
    </h3></div>
    <div><h3>
      <Link href={`/product/${productId}`}>
        <a>product {productId}</a>
      </Link>
    </h3></div>
    </div>
  )
}

export default product
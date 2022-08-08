import Link from "next/link"

const ProductList = ({products}) => {
  return (
    <div>
        <h1>List of products</h1>
        {products.map((product) =>{
            return (
                <div key={product.id}>
                <Link href={`products/${product.id}`} ><a>
                    <h2>
                        {product.id} {product.title} {product.price}
                    </h2>
                </a></Link>
                    <hr />
                </div>
            )
        })

        }
    </div>
  )
}

export default ProductList

export async function getStaticProps() {
    console.log("Generating / Regenerating Product List")
    const response = await fetch("http://localhost:4000/products")
    const data = await response.json()

    return{
        props : {
            products : data,
        },
        revalidate:10,
    }
}
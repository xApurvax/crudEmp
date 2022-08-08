import {useRouter} from 'next/router'

const Product = ({product}) => {

    const router = useRouter()

    if (router.isFallback){
        return <h1>Loading...</h1>
    }

  return (
    <div>
          <h2>
            {product.id} {product.title} {product.price}
          </h2>
          <p>{product.description}</p>
          <hr />
    </div>
  )
}

export default Product

export async function getStaticProps(context) {
    const {params} = context
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()

    if(!data?.id) {
        return {
           notFound : true,
        }
      }

    return{
        props : {
            product : data,
        }
    }
}

export async function getStaticPaths() {
    return {
        paths : [
            {
                params : { productId : '1' }
            }, 
        ],
        fallback : true,
    }
}
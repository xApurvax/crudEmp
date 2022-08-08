import { useRouter } from 'next/router'

const Docs = () => {
    const router = useRouter()
    const {params =[]} = router.query
    console.log(params);

    if(params.length === 2){
        return (
            <div>Viewing Docs for feature {params[0]} and concept {params[1]} </div>
        )
    }else if(params.length === 1){
        return (
            <div>Viewing Docs for feature {params[0]} </div>
        )
    }

  return (
    <div>Docs Home Page {params}</div>
  )
}

export default Docs
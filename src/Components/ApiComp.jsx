import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux/es/exports'
import { fetchApi } from '../store/landingPageSlice';

const ApiComp = () => {
    const dispatch = useDispatch();
    const {data, status} = useSelector((state) => state.apiData);

    console.log(data);
    useEffect(() => {
    status=="IDLE" &&
        dispatch(fetchApi());
    }, [])
    
  return (
    <div>
        
    </div>
  )
}

export default ApiComp
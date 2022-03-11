import React from 'react'
import ReactLoading from 'react-loading';
import  './styles.css';
function Loading() {
  return (
    <div className='loading'>
    
    <ReactLoading type={'spin'} color={'#1B1A17'} height={30} width={30} />
    </div>
    
  )
}

export default Loading
import React from 'react'
import './ItemPost.css'
function ItemPost(props) {
    const {pic,onBgClick} = props
  return (
    <div className='item-post'>
        <div className='item-post-bg' onClick={onBgClick}></div>
        <div className='item-post-content'>
            <img src={pic.Url} />
            <h4>{pic.title}</h4>
        </div>
    </div>
  )
}

export default ItemPost
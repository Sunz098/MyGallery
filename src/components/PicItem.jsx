import React from 'react'

function PicItem(props) {
    const{pic , onPicClick} = props
  return (
    <div className='Pic-item'>
        <img src={pic.Url} onClick={()=> {onPicClick(pic)}} />
        <h4>{pic.title}</h4>
    </div>
  )
}

export default PicItem
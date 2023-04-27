import React from 'react'

function AboutComponent({img,title}) {
  return (
    <div><img src={img} alt="asd" />
    {title}</div>
  )
}

export default AboutComponent
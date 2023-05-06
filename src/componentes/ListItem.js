import React from 'react'

const ListItem = (props) => {
  return (
    <div>
        <li>
            <a 
            target="_blank"
            rel="noreferrer"
            href={props.url}>
            <img src={props.imageUrl} alt={props.alt}/>
            </a>
        </li>
    </div>
  )
}

export default ListItem
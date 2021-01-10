import React from 'react'
import '../assets/styles/components/Link.scss'

const Link = ({ name, icon, url }) => (
    <div className="link">
        <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={require(`../assets/images/footer/${icon}`)} alt={name} />
        </a>
    </div>
)

export default Link;
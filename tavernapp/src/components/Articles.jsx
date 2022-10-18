import React, {useState} from 'react'

export default function Articles() {
    const [Articles, SetArticles] = useState([])
  return (
    <div>
        {
            Articles.length === 0 ? (
                <p>no articles found!</p>
            ):(
                <div>div</div>
            )
        }
    </div>
  )
}

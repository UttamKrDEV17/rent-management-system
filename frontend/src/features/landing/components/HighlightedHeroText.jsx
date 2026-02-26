import React from 'react'

const HighlightedHeroText = ({text="Sample Text"}) => {
  return (
    <div className='inline-flex gap-1 px-4 py-1 rounded-full bg-secondary text-primary text-xs font-semibold items-center justify-center'>
      <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block'></span>
        {text}
    </div>
  )
}

export default HighlightedHeroText
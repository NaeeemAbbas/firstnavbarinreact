import React from 'react'
import Button from './components/Button'

const Hero = () => {
    let were =[
        { were:"Link",},
        { were:"Click"},
        { were:"Join"},
        { were:"Download"},
    ]
  return (
<>
<div className='bg-gray-500'>
    <h1 className='text-center block md:xl lg:bg-red-400'>This is the main Heading in my Website</h1>
    <p className='text-[3rem] text-24 flex md:col-span-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere alias tenetur natus, aliquid quod magni. Nihil quisquam laboriosam minus impedit quia repellendus, minima vel soluta pariatur tempora delectus, sint exercitationem eaque quam aspernatur nam. Quasi perferendis fugiat dolor, cupiditate itaque enim minus eius et officiis suscipit repudiandae eum, impedit quos vitae possimus voluptates quisquam perspiciatis corrupti dicta necessitatibus optio distinctio? Illum repellendus voluptas placeat labore adipisci beatae unde quo. Quos, totam consequuntur velit magnam fuga deleniti reiciendis iste hic explicabo eum enim adipisci saepe accusantium nam nesciunt nulla eos.</p>
</div>
<h1>
   <Button className='text-white'/>
</h1>
</>
  )
}

export default Hero
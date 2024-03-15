import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loading = ({height="40" , width="75"}) => {
  return <ThreeDots height={height} width={width} radius={9} color='rgb(var(--color-primary-900))' wrapperClass='flex-center gap-4' visible={true} />
}

export default Loading
import { FC } from 'react'

const B_P: FC<{ value: number }> = ({ value }) => {
    const mvalue = ((value - 0) * (500 - 0)) / (100 - 0) + 0;
    const tval=mvalue-21;
  return (

  <svg viewBox="0 -0.8 500 20" preserveAspectRatio="none">
    <text x={tval} y="5" font-size="8" fill="#4bffa5">{value}%</text>
    <rect x="0" y="8" width="500" height="4" fill="#07170f" />
    <rect x="0" y="8" width={mvalue} height="4" fill="#4bffa5" />
  </svg>

  )
}

export default B_P
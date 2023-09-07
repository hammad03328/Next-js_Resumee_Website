import { FC } from "react"

const C_P: FC<{ value: number }> = ({ value }) => {

      const mappedValue = ((value - 0) * (125 - 25)) / (100 - 0) + 25;
  const circumference = 2 * Math.PI * 30;
  const dashArray = `${mappedValue / 100 * circumference} ${circumference}`;
  

  return (
    <svg viewBox="10 0 80 90" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" stroke="#07170f" stroke-width="10" fill="none" />
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="#4bffa5"
        stroke-width="8"
        fill="none"
        stroke-dasharray={dashArray}
        stroke-dashoffset={circumference / 4}
        transform="rotate(-90, 50, 50)"
      />
      <text x="50" y="50" text-anchor="middle" fill="white" font-weight="bold" dy="0.3em" font-size="18">
        {value}%
      </text>
    </svg>
  )
}

export default C_P

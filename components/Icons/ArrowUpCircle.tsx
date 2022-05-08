interface Props {
  style?: React.CSSProperties
}

const ArrowUpCircle = ({ style }: Props) => {
  return (
    <svg
      version="1.1"
      id="Ebene_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
      style={style}
    >
      <g>
        <path
          d="M33.454,17.627c-0.756-0.801-2.152-0.801-2.908,0l-17,18c-0.758,0.803-0.722,2.069,0.081,2.827
            c0.803,0.758,2.069,0.722,2.827-0.081L32,21.913l15.546,16.46C47.939,38.79,48.469,39,49,39c0.493,0,0.986-0.181,1.373-0.546
            c0.803-0.758,0.839-2.024,0.081-2.827L33.454,17.627z"
        />
        <path
          d="M32,0C23.453,0,15.417,3.329,9.374,9.373C3.329,15.417,0,23.453,0,32s3.33,16.583,9.374,22.626
          C15.417,60.671,23.453,64,32,64s16.583-3.329,22.626-9.373C60.671,48.583,64,40.547,64,32s-3.33-16.583-9.374-22.626
          C48.583,3.329,40.547,0,32,0z M51.797,51.798C46.509,57.087,39.479,60,32,60s-14.509-2.913-19.798-8.202C6.913,46.51,4,39.479,4,32
          s2.913-14.51,8.203-19.798C17.491,6.913,24.521,4,32,4s14.509,2.913,19.798,8.202C57.087,17.49,60,24.521,60,32
          S57.087,46.51,51.797,51.798z"
        />
      </g>
    </svg>
  )
}

export default ArrowUpCircle

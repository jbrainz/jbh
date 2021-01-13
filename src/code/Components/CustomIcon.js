const CustomIcon = ({ src, height, width }) => {
  return (
    <img
      style={{ height: undefined, width: undefined }}
      src={src}
      height={height}
      width={width}
      alt="order"
    />
  )
}

export default CustomIcon

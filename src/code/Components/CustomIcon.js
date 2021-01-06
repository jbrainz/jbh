const CustomIcon = (props) => {
  return (
    <img
      style={{ height: undefined, width: undefined }}
      src={props.src}
      height={props.height}
      width={props.width}
      alt="order"
    />
  )
}

export default CustomIcon

export function Container() {
  return (
    <div style = {{ ...containerStyle}}>
    </div>
  )
}

const containerStyle: React.CSSProperties = {
    width: "60%",
    margin: "auto",
    height: "40rem",
    backgroundColor: "#08f",
    borderRadius: "10px",

}
 

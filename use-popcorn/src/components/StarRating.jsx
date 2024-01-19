// keeping this var outside do not re-render it 
const containerStyle = {
  display: "flex",
  alignItems: "centre",
  gap: "20px",
};
const starStyle = {
    display : "flex",
    gap:"4px"
}
const textStyle={
    // lineHeight:"2",
    margin:"0"
}
export default function StarRating({maxRating = 5}) {
  //   const noOfStars= new Array(10).fill().map((v,i)=>i+1);]

  return (
    <div style={containerStyle}>
      {/* {noOfStars.map((v,i)=><div key={i} >a</div>)} */}
      <div style={starStyle}>
        {Array.from({ length: maxRating }, (_, i) => {
          return <span key={i + 1}>{i + 1}</span>;
        })}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}

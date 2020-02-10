import React from 'react';
import './Paint.css';

const getRandomColor = ()=> {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const getY = ()=>{
  return Math.floor(Math.random()*window.innerWidth);
}
const getZ = ()=>{
  return Math.floor(Math.random()*20);
}
const getX = ()=>{
  return Math.floor(Math.random()*window.innerHeight*5);
}
const Paint = () => {
  const color = function(e) {
    e.target.style.fill = getRandomColor();
  };
  const num = [1,2,3,4,5,6,7];
  const shapes = num.map(()=>{
    let numPolygons = Math.ceil(Math.random()*4);
    numPolygons = 5;
    const viewbox = 6;
    const polygons = [];
    const oldPoints = [];
    for(let x=0; x<numPolygons; x++){
      let numPoints = 3;
      if(oldPoints.length<2){
        oldPoints.push( [ Math.random()*viewbox,  Math.random()*viewbox]);
        oldPoints.push( [ Math.random()*viewbox,  Math.random()*viewbox]);
      }else{
        oldPoints.shift();
      }
      oldPoints.push( [ Math.random()*viewbox,  Math.random()*viewbox]);
      let points = ''+oldPoints[0][0]+' '+oldPoints[0][1]+' '+oldPoints[1][0]+' '+oldPoints[1][1]+' '+oldPoints[2][0]+' '+oldPoints[2][1];
      polygons.push(<polygon stroke="#FFFFFF" fill="#1c1a1f" stroke-width="0.1" className="a" points={points}></polygon>)
    }
    return(<div className="spot" style={{top: getX()+"px", left: getY()+"px"}} ><svg  onClick={color} viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
        {polygons}
      </svg></div>);
  })
  return (
    <div className="paint">
      {shapes}
    </div>
  );
};

export default Paint;
import React from 'react';

const ImageCard = ({ data }) => {

    return (
    
<div style={{width:"350px",padding:"30px"}} >
  <div  >
    <div  >
      <div class="image-card">
      <img className="card-img-top" src={data.url} alt={data.title} />
        <div class="card-body">
          <h4 class="card-title">{data.title}</h4>
           
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default ImageCard;
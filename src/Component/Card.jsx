import React, { useState } from 'react'

const Card = (props) => {
  
    const [buttonText, setButtonText] = useState('Add to cart');
  
  
    const handleClick = () => {

      if (buttonText === 'Add to cart') {
        
        setButtonText('Remove from Cart');
        props.setCardItems([...props.cardItems,props.data.id])
      } else {
        let a = props.cardItems.filter((v)=>v!==props.data.id)
        console.log(a)
        setButtonText('Add to cart');
        props.setCardItems(a)
      }
    };
  
    return (
      <div className="col mb-5">
        <div className="card h-100">
          <div
            className="badge bg-dark text-white position-absolute mt-2"
            style={({ top: "0.5rem" }, { right: "0.5rem" })}>
            {props.data.sale ? (<>Sale</>) : (<></>)}
          </div>
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{props.data.name}</h5>
              <div className="d-flex justify-content-center small text-warning mb-1">
                {props.data.star ? 
                  (<div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>) : (<></>)
                }
              </div>
              <span className="text-secondary text-decoration-line-through me-1">
                {props.data.spanprice}
              </span>
              
              {props.data.price}
              
            </div>
          </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <button className="btn btn-outline-dark mt-auto" href="#" onClick={() => {handleClick()}}>
                  {props.data.card ? (<>{buttonText}</>) : (<>View options</>)}
                </button>
              </div>
            </div>
        </div>
      </div>
    );
}

export default Card
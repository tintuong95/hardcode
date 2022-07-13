export default function Card({data,setResult,newResult}){
    let styleCard={}
    if(newResult===undefined){
        styleCard={}
    }else if(newResult===false){
        styleCard={   border: "1px solid rgb(255, 63, 63)", boxShadow:" -0px -0px 20px rgb(255, 63, 63)"}
    }else {
        styleCard={ border: "1px solid greenyellow", boxShadow:" -0px -0px 20px greenyellow"}
    }

    return <div className="card m-4" style={{...styleCard}}>
    <div className="card-body">
      <h5 className="card-title">
        {Object.keys(data)[0]}
      </h5>

      <div>
        
        {Object.entries(Object.values(data)[0]).map((item,index)=>{
           
           return <div className="form-check m-2">
           <input
               onChange={(e)=>{
                   const {value}=e.target
                   setResult({title:Object.keys(data)[0],select:value})
               }}
             className="form-check-input"
             type="radio"
             value={item[0]}
             name="flexCheckDefault"
             id={item[0]}
           />
           <label  className="form-check-label " htmlFor={item[0]}>
             {item[0]}
           </label>
         </div>
       })}
        
        
       
      </div>

     
    </div>
  </div>
}
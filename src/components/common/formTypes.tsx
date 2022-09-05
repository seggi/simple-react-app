
export const FurnitureForm = ({ 
    handleWidthChange, 
    handleHeightChange,  
    handleLengthChange,  
    width,
    height,
    length
    }:any ) => ( <div className="content-box__right-items">
  <div className="item-box">
      <div className="txt-item">
        <span>Height (CM)</span>
      </div>
      <div className="input-item">
        <input  
          id="#price" 
          type="text" 
          value={height} 
          placeholder='#sku' 
          onChange={handleHeightChange} />
      </div>
  </div>
  
  <div className="item-box">
      <div className="txt-item">
        <span>Width (CM)</span>
      </div>
      <div className="input-item">
        <input  
          id="#price" 
          type="text" 
          value={width} 
          placeholder='#shu'
          onChange={handleWidthChange}
          />
      </div>
  </div>
  <div className="item-box">
      <div className="txt-item">
        <span>length (CM)</span>
      </div>
      <div className="input-item">
        <input  
          id="#price" 
          type="text" 
          value={length}
          placeholder="#length"
          onChange={handleLengthChange}
           />
      </div>
  </div>
  <span id="description-txt">*Product description</span>
  </div>);
  

export const MediaType = ({handleSizeChange, size}: any) => (
  <div className="content-box__right-items">
      <div className="item-box">
          <div className="txt-item">
            <span>Size (MB)</span>
          </div>
          <div className="input-item">
            <input  id="#price" type="text" value={size} placeholder="$size" onChange={handleSizeChange}/>
          </div>
      </div>
      <span id="description-txt">*Product description</span>
  </div>
)

export const IntellectualObject = ({handleWeightChange, weight}:any) => (
    <div className="content-box__right-items">
      <div className="item-box">
          <div className="txt-item">
            <span>Weight (KG)</span>
          </div>
          <div className="input-item">
            <input  
              id="#price" 
              type="text" 
              value={weight} 
              placeholder="#weight"
              onChange={handleWeightChange}/>
          </div>
      </div>
      <span id="description-txt">*Product description</span>
    </div>
);
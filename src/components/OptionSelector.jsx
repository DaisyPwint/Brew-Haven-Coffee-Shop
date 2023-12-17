const OptionSelector = ({options,title,optionValue,selectedOptions}) => {

  const handleOption = (e,value) => {
    const checked = e.target.checked;
    optionValue(title,value,checked)
  }
  
return (
    <>
      {
      Array.isArray(options) ? 
      <>
        <h1 className='mt-3'>{title}</h1>
        <div className="flex flex-wrap">
          {
          options.map((value, index) => (
            <label key={index}  className={`p-2 m-2 rounded-md text-gray-900 border border-black cursor-pointer ${selectedOptions.includes(value) ? 'bg-gray-900 text-white' : ''}`}>
            <input type="checkbox" className='hidden' checked={selectedOptions.includes(value)} onChange={(e) => handleOption(e,value)}/>
            <div>{value}</div>
          </label>
        ))
          }
          
        {/* {
          options.map((value, index) => (
              <label key={index}  className={`p-2 m-2 rounded-md text-gray-900 border border-black cursor-pointer ${selectedOptions.includes(value) ? 'bg-gray-900 text-white' : ''}`}>
              <input type="radio" className='hidden' name={title} checked={selectedOptions === value} onChange={(e) => handleOption(e,value)}/>
              <div>{value}</div>
            </label>
          ))
        } */}
        </div>
      </> : null}
    </>
  )
}

export default OptionSelector


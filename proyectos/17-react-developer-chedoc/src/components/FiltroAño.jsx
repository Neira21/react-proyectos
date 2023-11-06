// eslint-disable-next-line
const FiltroAño = ({OnChange}) => {

  const ChangeYear = (e) => {
    const newYear = e.target.value
    OnChange(newYear)
  }

  return (
    <div style={{display:'flex', width:'100%', alignItems:'center', justifyContent:'center', paddingTop:'15 px' } }>
      <select style={{width:'100px', padding:'10px', borderRadius:'10px' }} name="año" id="año" onChange={ChangeYear} >
        <option value="all">All</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
      </select>
    </div>
  )
}

export default FiltroAño
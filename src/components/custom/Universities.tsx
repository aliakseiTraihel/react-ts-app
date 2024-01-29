import "./Universities.css"
import {Universitate, useFetch} from "./Fetch.tsx";
import Universitet from "./Universit.tsx";

function Universities() {
  const {data, loading, setRegion, error} = useFetch(10);
  return(<div className="universitetes">
    <div className="universitetes-select">
      <select name="select" defaultValue="" onChange={event => setRegion(event.target.value)}>
        <option value=''>Choose region</option>
        <option value="United+States">United States</option>
        <option value="Poland">Poland</option>
        <option value="Germany">Germany</option>
      </select>
    </div>
    { error ?
    <div className="universitetes-error">
      {error}
    </div> :
    <div className="universitetes-items">
      {loading ? <span>Loading...</span> :
        data.map((data: Universitate, index: number) => <Universitet data={data} key={index}/>)
      }
    </div>
    }
  </div>)
}

export default Universities;
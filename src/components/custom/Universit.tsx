import {Universitate} from "./Fetch.tsx";

function  Universitet({data}: {data: Universitate}) {
  return(<div className="universitetes-item">
    <div>
      <div>{data.name}</div>
      <div><b>{data.country}</b></div>
    </div>
    {data.web_pages.map((page: string, index: number) => <a key={index} href={page}>open</a>)}
  </div>)
}

export default Universitet;
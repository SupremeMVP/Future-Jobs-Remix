import { Link } from "remix";
import Hiring from '~/components/Features/Hiring'

export default function CompanyCard(props: any) {
  return (
    <div className="card m-3">
      <div className="card-body">
        <h5 className="card-title">{props.company.name}</h5>
        <p className="card-text">{props.company.description}</p>
        <Link to={props.additional ? props.additional + props.company.key : props.company.key} className="btn btn-sm btn-primary">
          Company Details
        </Link>
      </div>
      <Hiring isHiring={props.company.hiring} />
    </div>
  )
}
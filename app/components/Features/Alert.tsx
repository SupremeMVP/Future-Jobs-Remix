export default function Alert(props: any) {
  const isApproved = props.isApproved;
  if (!isApproved) {
    return (
      <div className="alert alert-warning d-flex align-items-center" role="alert">
        <div className="bi flex-shrink-0 me-2">
          🛑
        </div>
        <div>
          Sorry! This company hasn't been verified yet.
        </div>
      </div>
    );
  }

  return null;
}
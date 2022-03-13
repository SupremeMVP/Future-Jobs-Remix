export default function Hiring(props: any) {
  const isHiring = props.isHiring;
  if (isHiring) {
    return (
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        Hiring
        <span className="visually-hidden">unread messages</span>
      </span>
    );
  }

  return null;
}
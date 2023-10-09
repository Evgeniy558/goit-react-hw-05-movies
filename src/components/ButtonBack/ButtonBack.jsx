import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const ButtonBack = () => {
  const location = useLocation();
  console.log("location in btn ", location);
  return (
    <>
      <Link to={location.state?.from ?? "/"}>Go back</Link>
    </>
  );
};

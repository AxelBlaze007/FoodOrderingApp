import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong!</h2>
      {console.log(err)}
      <h4>{err.statusText}</h4>
      <h4>{err.status}</h4>
    </div>
  );
};

export default Error;

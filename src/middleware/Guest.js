import { useEffect } from "react";
import { authenticated } from "../store";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

function Guest(props) {
  const navigate = useNavigate();
  const auth = useRecoilValue(authenticated);
  useEffect(() => {
    if (auth.check) {
      navigate("/dashboard");
    }
  }, []);
  return props.render;
}

export default Guest;

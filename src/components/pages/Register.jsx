
import "./register.css";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (user) => {
  };
  return (
    <div className="myMain bgDark">
    </div>
  );
};

export default Register;

import { notify } from "@nano";


interface submitLogin {
  formData: {
    userName: string;
    password: string;
    remember: boolean;
    loading: boolean;
    sesion: boolean;
  };

  setFormData: React.Dispatch<
    React.SetStateAction<{
      userName: string;
      password: string;
      remember: boolean;
      loading: boolean;
      sesion: boolean;
    }>
  >;
}

const submitLogin = ({ formData, setFormData }: submitLogin) => {
  const newData = {
    userName: formData.userName,
    password: formData.password,
  };

  fetch(`/auth`, {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      notify({ type: "success", message: res.mensaje });

      if (formData.remember) {
        localStorage.setItem("token", res.token);
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        sesion: true,
      }));
    })
    .catch((err) => {
      console.log(err);
      notify({ type: "error", message: "Error al iniciar sesion" });
    })
    .finally(() => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        loading: false,
      }));
    });
};

export default submitLogin;

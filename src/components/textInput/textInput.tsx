import React from "react";
import Button from "../link/button.component";
import z from "zod";

const EmailInput: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const handleSubmit = async () => {
    setLoading(true);

    const emailSchema = z.string().email();
    const emailValidation = emailSchema.safeParse(email);

    if (!emailValidation.success) {
      alert("Vul een geldig email adres in");
      setLoading(false);
      return;
    }

    let data = {
      email: email,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Response succeeded!");
        setLoading(false);
        // with next how do i redirect to a new page?
        window.location.href = "/verstuurd";
      } else {
        console.log("Response failed!");
        setLoading(false);
        window.location.href = "/foutje";
      }
    });
  };

  return (
    <form>
      <div className="email-input__container">
        <input
          className="email-input__input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={() => handleSubmit()}>
          {loading ? "..." : "Verzenden"}
        </Button>
      </div>
    </form>
  );
};

export default EmailInput;

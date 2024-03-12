import React, { FC, useState } from "react";
import z from "zod";
import Button from "../link/button.component";

const EmailInput: FC = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
        setLoading(true);

        const emailSchema = z.string().email();
        const emailValidation = emailSchema.safeParse(email);

        if (!emailValidation.success) {
            alert("Vul een geldig email adres in");
            setLoading(false);
            return;
        }

        const data = {
            email,
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
                {/* TODO: add honeypot */}
                <Button onClick={() => handleSubmit()}>{loading ? "..." : "Verzenden"}</Button>
            </div>
        </form>
    );
};

export default EmailInput;

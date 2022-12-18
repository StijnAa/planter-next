import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Button from "../link/button.component";
import { useState } from "react";
import Router from "next/router";

const FormContainer = styled.form`
  border-radius: 0.8rem;
  background-color: ${theme.colors.white};
  padding: 3rem;
  section:not(:last-child) {
    margin-bottom: 4rem;
  }
  button {
    margin-left: auto;
    width: 100%;
  }
  margin-bottom: 4rem;
  @media only screen and (max-width: ${theme.small}) {
    padding: 2rem;
  }
  @media only screen and (max-width: ${theme.tablet}) {
  }
  @media only screen and (max-width: ${theme.mobile}) {
  }
`;
const ContactSection = styled.section`
  label {
    display: block;
    margin: 1rem 0;
  }
  input {
    width: 100%;
    height: 50px;
    border-width: 1px;
    border-color: ${theme.colors.black};
    border-radius: 0.3rem;
    border-style: solid;
    margin-top: 7px;
    padding: 1rem;
  }
  span {
    font-weight: 300;
    margin-bottom: 10px;
  }
`;
const PlanterSection = styled.section`
  label {
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  span {
  }
  fieldset {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    border-width: 1px;
    border-color: #1f1d1d;
    border-radius: 0.3rem;
    border-style: solid;
    input {
      padding: 1rem;
      height: 50px;
      width: 22px;
    }
    main {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
`;
const Unit = styled.span`
  align-items: center;
  margin: 0 1rem 0 0.8rem;
`;
const Label = styled.span`
  font-weight: 300;
`;
const Dimentions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  input {
    width: 100%;
    padding: 1rem;
    height: 50px;
    border-width: 1px;
    border-color: ${theme.colors.black};
    border-radius: 0.3rem;
    border-style: solid;
    margin-top: 7px;
  }
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    @media only screen and (max-width: ${theme.tablet}) {
      margin: 0.5rem 0;
    }
  }
  @media only screen and (max-width: ${theme.small}) {
  }
  @media only screen and (max-width: ${theme.tablet}) {
    gap: 0;
    flex-direction: column;
  }
  @media only screen and (max-width: ${theme.mobile}) {
  }
`;
const HeightContainer = styled.div`
  label {
    font-weight: 300;
    display: block;
  }
  select {
    width: 100%;
    padding: 0 1rem;
    height: 50px;
    border-width: 1px;
    border-color: ${theme.colors.black};
    border-radius: 0.3rem;
    border-style: solid;
    margin-top: 7px;
  }
  option {
    width: 50%;
    font-size: inherit;
    font-weight: inherit;
  }
`;

function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [wood, setWood] = useState("");
  const [fixture, setFixture] = useState("");
  const [waterSystem, setWaterSystem] = useState(false);
  const [lightSystem, setLightSystem] = useState(false);
  const [installment, setInstallment] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name: name,
      email: email,
      phone: phone,
      length: length,
      width: width,
      height: height,
      wood: wood,
      fixture: fixture,
      waterSystem: waterSystem,
      lightSystem: lightSystem,
      installment: installment,
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
        Router.push("/verzonden");
      } else {
        Router.push("/mislukt");
      }
    });
  };

  return (
    <FormContainer
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <ContactSection>
        <h2>Contact gegevens</h2>
        <label htmlFor="name">
          <span>Name:</span>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>
        <label htmlFor="email">
          <span>Email: (verplicht)</span>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
        </label>
        <label htmlFor="phone">
          <span>Telefoonnummer:</span>
          <input
            type="number"
            id="phone"
            name="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
          />
        </label>
      </ContactSection>
      <PlanterSection>
        <h2>De plantenbak</h2>
        <Dimentions>
          <label htmlFor="length">
            <Label>Lengte:</Label>
            <div>
              <input
                type="number"
                id="length"
                name="length"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                value={length}
              />
              <Unit>cm</Unit>
            </div>
          </label>
          <label htmlFor="width">
            <Label>Breedte:</Label>
            <div>
              <input
                type="number"
                id="width"
                name="width"
                onChange={(e) => {
                  setWidth(e.target.value);
                }}
                value={width}
              />
              <Unit>cm</Unit>
            </div>
          </label>
        </Dimentions>

        <HeightContainer>
          <label htmlFor="height">Hoogte:</label>
          <select
            id="height"
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            value={height}
          >
            <option value="notsure">Ik wil graag advies</option>
            <option value="default">3 planken</option>
            <option value="extra">4 planken</option>
          </select>
        </HeightContainer>
        <fieldset id="wood" name="wood">
          <legend htmlFor="wood">Soort Hout:</legend>
          <main>
            <input
              type="radio"
              value="notsure"
              name="wood"
              checked={wood === "notsure"}
              onChange={(e) => {
                setWood(e.target.value);
              }}
            />
            <label htmlFor="notsure">Ik wil graag advies</label>
          </main>
          <main>
            <input
              type="radio"
              value="bamboo"
              name="wood"
              checked={wood === "bamboo"}
              onChange={(e) => {
                setWood(e.target.value);
              }}
            />
            <label htmlFor="bamboo">Bamboo</label>
          </main>
          <main>
            <input
              type="radio"
              value="douglass"
              name="wood"
              checked={wood === "douglass"}
              onChange={(e) => {
                setWood(e.target.value);
              }}
            />
            <label htmlFor="douglass">Douglass</label>
          </main>
          <main>
            <input
              type="radio"
              value="hard"
              name="wood"
              checked={wood === "hard"}
              onChange={(e) => {
                setWood(e.target.value);
              }}
            />
            <label htmlFor="hard">Hard hout</label>
          </main>
        </fieldset>
        <fieldset id="fixture" name="fixture">
          <legend htmlFor="fixture">Manier van bevestigen:</legend>
          <main>
            <input
              type="radio"
              value="notsure"
              name="fixture"
              checked={fixture === "notsure"}
              onChange={(e) => {
                setFixture(e.target.value);
              }}
            />
            <label htmlFor="notsure">Weet ik nog niet</label>
          </main>
          <main>
            <input
              type="radio"
              value="rvs"
              name="fixture"
              checked={fixture === "rvs"}
              onChange={(e) => {
                setFixture(e.target.value);
              }}
            />
            <label htmlFor="rvs">RVS spijkers</label>
          </main>
          <main>
            <input
              type="radio"
              value="black"
              name="fixture"
              checked={fixture === "black"}
              onChange={(e) => {
                setFixture(e.target.value);
              }}
            />
            <label htmlFor="black">Zwarte spijkers</label>
          </main>
          <main>
            <input
              type="radio"
              value="clips"
              name="fixture"
              checked={fixture === "clips"}
              onChange={(e) => {
                setFixture(e.target.value);
              }}
            />
            <label htmlFor="clips">Clips</label>
          </main>
          <main>
            <input
              type="radio"
              value="screw"
              name="fixture"
              checked={fixture === "screw"}
              onChange={(e) => {
                setFixture(e.target.value);
              }}
            />
            <label htmlFor="screw">Schroeven</label>
          </main>
        </fieldset>
        <fieldset id="extras" name="extras">
          <legend htmlFor="extras">Extra's:</legend>
          <main>
            <input
              type="checkbox"
              value="waterSystem"
              name="waterSystem"
              checked={waterSystem}
              onChange={() => {
                setWaterSystem(!waterSystem);
              }}
            />
            <label htmlFor="waterSystem">Bewatering Systeem</label>
          </main>
          <main>
            <input
              type="checkbox"
              value="lightSystem"
              name="lightSystem"
              checked={lightSystem}
              onChange={() => {
                setLightSystem(!lightSystem);
              }}
            />
            <label htmlFor="lightSystem">Verlichting</label>
          </main>
          <main>
            <input
              type="checkbox"
              value="installment"
              name="installment"
              checked={installment}
              onChange={() => {
                setInstallment(!installment);
              }}
            />
            <label htmlFor="installment">Installatie</label>
          </main>
        </fieldset>
      </PlanterSection>
      <Button type="submit">Verstuur</Button>
    </FormContainer>
  );
}

export default FormComponent;

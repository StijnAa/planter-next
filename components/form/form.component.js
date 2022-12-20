import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Button from "../link/button.component";
import { useState } from "react";
import Router from "next/router";
import Textfield from "./textfield.component";
import Radiofield from "./radio.component";
import Dropdown from "./dropdown.component";
import Loading from "../loading/loading.component";
import { formHeight, fontBody } from "../../styles/cssHelper";

const FormContainer = styled.form`
  border-radius: 0.8rem;
  background-color: ${theme.colors.white};
  padding: 3rem;

  section:not(:last-child) {
    margin-bottom: 2rem;
  }
  button {
    margin-left: auto;
    width: 100%;
  }
  margin-bottom: 4rem;
  margin-left: ${theme.padding.desktop};
  margin-right: ${theme.padding.desktop};
  @media only screen and (max-width: ${theme.small}) {
    margin-left: ${theme.padding.small};
    margin-right: ${theme.padding.small};
  }
  @media only screen and (max-width: ${theme.tablet}) {
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media only screen and (max-width: ${theme.mobile}) {
  }
`;

const Unit = styled.span`
  font-weight: 400;
  align-items: center;
  margin: 0 1rem 0 0.8rem;
`;
const Dimentions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  input {
    width: 100%;
    padding: 0 1rem;
    border-width: 1px;
    border-color: ${theme.colors.black};
    border-radius: 0.3rem;
    border-style: solid;
    ${formHeight}
    ${fontBody}
    font-weight: 300;
  }
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    label {
      font-weight: 400;
      display: inline-block;
      margin-bottom: 4px;
    }

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

function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [wood, setWood] = useState("");
  const [avFixture, setAvFixture] = useState([
    { value: "notsure", label: "Ik weet het nog niet" },
    { value: "clips", label: "Clips" },
    { value: "rvs", label: "RVS spijkers" },
    { value: "black", label: "Zwarte spijkers" },
    { value: "screw", label: "Schroeven" },
  ]);
  const [fixture, setFixture] = useState("");
  const [waterSystem, setWaterSystem] = useState(false);
  const [lightSystem, setLightSystem] = useState(false);
  const [installment, setInstallment] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeWood = (e) => {
    setWood(e.target.value);
    changeFixtureDisplay(e.target.value);
  };

  const changeFixtureDisplay = (woodName) => {
    switch (woodName) {
      case "bamboo":
        setAvFixture([{ value: "clips", label: "Clips" }]);
        setFixture("");
        break;
      case "hard":
        setAvFixture([{ value: "screw", label: "Schroeven" }]);
        setFixture("");
        break;
      case "douglas":
        setAvFixture([
          { value: "notsure", label: "Ik weet het nog niet" },
          { value: "rvs", label: "RVS spijkers" },
          { value: "black", label: "Zwarte spijkers" },
        ]);
        setFixture("");
        break;
      case "notsure":
        setAvFixture([
          { value: "notsure", label: "Ik weet het nog niet" },
          { value: "clips", label: "Clips" },
          { value: "rvs", label: "RVS spijkers" },
          { value: "black", label: "Zwarte spijkers" },
          { value: "screw", label: "Schroeven" },
        ]);
        setFixture("");
        break;
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);

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

  return !loading ? (
    <FormContainer
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <section>
        <h3>Contact gegevens</h3>
        <Textfield
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          id="name"
          label="Naam: (verplicht)"
          type="text"
          required
        />
        <Textfield
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          id="email"
          label="Email: (verplicht)"
          type="email"
          required
        />
        <Textfield
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          value={phone}
          id="phone"
          label="Telefoonnummer: (verplicht)"
          type="number"
          required
        />
      </section>
      <section>
        <h3>De plantenbak</h3>
        <Dimentions>
          <div>
            <label htmlFor="length">Lengte:</label>
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
          </div>
          <div>
            <label htmlFor="width">Breedte:</label>
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
          </div>
        </Dimentions>

        <Dropdown
          id="height"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
          value={height}
          label="Hoogte:"
        >
          <option value="notsure">Ik wil graag advies</option>
          <option value="default">3 planken</option>
          <option value="extra">4 planken</option>
        </Dropdown>
        <Radiofield id="wood" label="Soort Hout:">
          <set>
            <input
              type="radio"
              value="notsure"
              id="notsure"
              name="wood"
              checked={wood === "notsure"}
              onChange={(e) => changeWood(e)}
            />
            <label htmlFor="notsure">Ik wil graag advies</label>
          </set>
          <set>
            <input
              type="radio"
              value="bamboo"
              id="bamboo"
              name="wood"
              checked={wood === "bamboo"}
              onChange={(e) => changeWood(e)}
            />
            <label htmlFor="bamboo">Bamboo</label>
          </set>
          <set>
            <input
              type="radio"
              value="douglas"
              id="douglas"
              name="wood"
              checked={wood === "douglas"}
              onChange={(e) => changeWood(e)}
            />
            <label htmlFor="douglas">Douglass</label>
          </set>
          <set>
            <input
              type="radio"
              value="hard"
              id="hard"
              name="wood"
              checked={wood === "hard"}
              onChange={(e) => changeWood(e)}
            />
            <label htmlFor="hard">Hard hout</label>
          </set>
        </Radiofield>
        <Radiofield id="fixture" name="fixture" label="Manier van bevestigen:">
          {avFixture.map((item, index) => {
            return (
              <set key={"fixture-" + index}>
                <input
                  type="radio"
                  value={item.value}
                  name="fixture"
                  id={item.value}
                  checked={fixture === item.value}
                  onChange={(e) => {
                    setFixture(e.target.value);
                  }}
                />
                <label htmlFor={item.value}>{item.label}</label>
              </set>
            );
          })}
        </Radiofield>
        <Radiofield id="extras" name="extras" label="Extra's:">
          <set>
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
          </set>
          <set>
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
          </set>
          <set>
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
          </set>
        </Radiofield>
      </section>
      <Button type="submit">Verstuur</Button>
    </FormContainer>
  ) : (
    <Loading />
  );
}

export default FormComponent;

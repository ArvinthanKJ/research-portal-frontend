import React, { useState, useEffect } from "react";
import {
  Select,
  Field,
  Label,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Article,
  ContentTitle,
  Text,
  Aside,
} from "tailwind-react-ui";
import "./Research.css";
import img from "./Assets/icon.jpg";
import { axiosInstance } from "../../utils/axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 15vw;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 40vw;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const ResearchCard = (props: any) => {
  const [user, setUser] = useState(false);
  const getUserPrivilege = () => {
    let url = `/user/is_staff/`;
    axiosInstance
      .get(url)
      .then((res: any) => {
        if (res.data.data == "admin") setUser(true);
      })
      .catch((err: Error) => console.log(err));
    url = `/admin_user/search/?professor=${localStorage.getItem("email")}`;
  };
  useEffect(() => {
    getUserPrivilege();
  }, []);
  if (!user)
    return (
      <Container>
        <Link to={`/project/${props.data.id}`}>
          <div className="p-5">
            <div>
              <img className="mb-6 h-40 w-full" src={props.data.image_url} alt="Project"></img>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">{props.data.name}</h3>
              <a href={props.data.paper_link}>
                <h5 className="text-sm font-semibold mb-2 break-all">
                  {props.data.paper_link}
                </h5>
              </a>
            </div>
          </div>
        </Link>
      </Container>
    );
  else
    return (
      <Container>
        <div className="p-5">
          <div>
            <img className="mb-6 h-40 w-full" src={props.data.image_url} alt="Project"></img>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">{props.data.name}</h3>
            <a href={props.data.paper_link}>
              <h5 className="text-sm font-semibold mb-2 break-all">
                {props.data.paper_link}
              </h5>
            </a>
          </div>
        </div>
      </Container>
    );
};

export default ResearchCard;

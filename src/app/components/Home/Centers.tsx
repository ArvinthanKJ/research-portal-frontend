import styled from "styled-components";
import { useEffect, useState } from 'react';
import { axiosInstance } from "../../utils/axios";

const Container = styled.div`
  height: 50vh;
  width: 30vw;
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 60vw;
  }
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

const StyledImage = styled.img`
transition: transform 1s;
:hover{
  transform: scale(1.1,1.1);
}
`;

const CentersCard = (props:any) => {

  return (
    <Container className="bg-red-300 lg:m-6 m-4 rounded-2xl relative">
      <StyledImage
        src={
          "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        }
        alt="dummy"
        className="h-full w-full rounded-2xl"
      />
      <div className="h-1/4 w-full top-3/4 bg-red-800 bg-opacity-50 hover:bg-opacity-70 absolute flex justify-center items-center">
        <p className=" lg:text-2xl md:text-xl text-lg text-red-200 font-bold">
          {props.data.name}
        </p>
      </div>
    </Container>
  );
};

const Centers = () => {

  const [centers, setcenters] = useState([]);

  useEffect(() => {
    let url = `/center`;
    axiosInstance
      .get(url)
      .then((res: any) => {
        setcenters(res.data.data);
      })
      .catch((err: Error) => console.log(err));
  }, []);

  const getCentersCards = ()=>{
    let htmlArr: JSX.Element[] = [];
    centers.forEach((center,index)=>{
      htmlArr.push(
        <CentersCard data={center} key={index}/>
      )
    });
    return htmlArr;
  }


  return (
    <div className="w-screen bg-red-50" style={{ minHeight: "85vh" }}>
      <div className=" w-full col-span-2 lg:p-14 md:p-8 p-6 flex justify-center items-start flex-col">
        <p className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-gray-800 border-b-2 border-gray-400 pb-3 font-bold">
          Centers@NITT
        </p>
      </div>
      <div className="h-full grid lg:grid-cols-3 md:grid-cols-1 justify-items-center lg:p-14 md:p-8 p-6">
        {centers.length?getCentersCards():null}
      </div>
    </div>
  );
};

export default Centers;

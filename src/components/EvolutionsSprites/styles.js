import styled from 'styled-components';

export const Container = styled.div`
  text-align: -webkit-center;
  display: inherit;
  padding-right: 7px;

  .center{
    margin-top: 5px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  div{
    margin-top: 5px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .name{
    background: #a5cd53;
    padding: 20px;
    border-radius: 50px;
    font-family: "VT323";
    width: auto;
    padding: 3px 8px;
    margin-bottom: 7px;
    text-align: center;
    text-transform: capitalize;
    font-size: 20px;
  }

  .img{
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-radius: 30%;
    margin: 10px 0;
    background: #cad5b5;
    cursor: pointer;
    padding: 30px;
    width: 110px;
    height: 120px;
  }

  .link{
    text-decoration: none;
    color: black
  }
`;

export const Image = styled.img`
  width: inherit;

}
`;
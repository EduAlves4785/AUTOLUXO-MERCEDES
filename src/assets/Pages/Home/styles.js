import styled from "styled-components";

export const Navbar = styled.nav`
  & {
    color: #001f3f;
    background-color: ${({ transparent }) =>
      transparent ? "white" : "rgba(255, 255, 255, 0.8)"};
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;
  }

  .logo-box {
    width: 20rem;
    height: 4rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;

    img {
      width: 200px;
      height: 80px;
      object-fit: cover;
    }

    h1 {
      margin-left: 1rem;
    }
  }

  .itens {
    display: flex;
    align-items: center;
    height: 5rem;
    padding: 0.5rem;
    gap: 10px;

    a {
      cursor: pointer;
      color: #001f3f;
      width: 8rem;
      height: 2rem;
      display: flex;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      border-radius: 5px;
      transition: 0.3s;
    }

    a:hover {
      background-color: #ebecf0;
    }
  }

  @media screen and (max-width: 780px) {
    & {
      align-items: none;
      justify-content: space-around;
    }

    .logo-box {
      width: 10rem;
      font-size: 10px;

      h1 {
        margin: 0.2rem;
      }
    }

    .itens {
      display: none;
    }
  }
`;

export const HamburgerMenu = styled.div`
  & {
    display: none;
  }

  #menu-toggle {
    display: none;
  }

  #menu-icon {
    display: none;
  }

  @media screen and (max-width: 780px) {
    & {
      display: block;
    }

    #menu-icon {
      display: block;
      font-size: 55px;
      cursor: pointer;
      padding: 15px;
      background-color: none;
      color: #fff;
    }

    #menu {
      display: none;
      position: absolute;
      top: 90px;
      left: 0;
      width: 100%;
      background-color: #333;
    }

    #menu.open {
      display: block;
    }

    #menu ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    #menu li {
      padding: 15px;
      text-align: center;
      border-bottom: 1px solid #555;
    }

    #menu a {
      text-decoration: none;
      color: #fff;
      font-size: 18px;
      display: block;
    }
  }
`;

export const Content = styled.div`
  & {
    color: #001f3f;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
  }

  .formulario{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25rem;
    height: 25rem;
    gap: 20px;
    border-radius: 5px;
    margin: 2rem 0rem;
    background-color: #ECECEC;

    div{
      display: flex;
      flex-direction: column;
      gap: 10px;

      label{
        font-size: 16px;
        font-weight: 500;
      }

      input{
        width: 15rem;
        padding:.2rem;
        font-size: 14px;
        height: 1.5rem;
        border-radius: 5px;
        border: none;
      }
    }

    h1{
      margin: 1rem 0rem;
    }

    button {
      width: 8rem;
      height: 2rem;
      font-size: 17px;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: .5s;
    }

    button:hover{
      background-color: #57679A;
      box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);
    }

    h4{
      margin: 2rem 0rem;
      text-align: center;
      font-size:18px;
    }
  }

  @media screen and (max-width: 780px){
    .formulario{
      width: 18rem;
    }
  }

  .apresenta-box {
    width: 100%;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .image-container {
      width: 100%;
      height: 20rem;
      position: relative;
    }

    .image-container img {
      width: 100%;
      height: 20rem;
      filter: brightness(50%);
      object-fit: cover;
    }

    .image-container p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      color: #fff;
      font-weight: 600;
      font-size: 30px;
      text-align: center;
    }

    .sobre{
      width: 89%;
      height: 20rem;
      padding: 2rem;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      gap: 20px;

      h5{
        font-size: 17px;
      }

      img{
        object-fit: cover;
        width: 750px;
        height: 320px;
      }
    }

    @media screen and (max-width: 780px){
      .sobre{
        flex-direction: column;
        padding:.5rem;
        width: 78%;
        height: 45rem;

        h5{
          font-size: 16px;
          text-align: center;
        }

        img{
          width: auto;
          height: 320px;
        }
      }
    }

    h4{
      margin: 2rem;
      font-size: 30px;
      text-align: center;
    }

    .servicos {
      width: 90%;
      height: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 1rem;
      gap: 20px;

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 20rem;
        height: 27rem;
        text-align: center;
        border-radius: 8px;
        flex-direction: column;
        overflow: hidden;
        cursor: pointer;
        box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 0.75);

        &:hover img {
          transform: scale(1.2);
        }

        img {
          transform: scale(1.1);
          transition: 0.3s;
          width: 300px;
          height: 200px;
        }
      }
    }

    .apresenta-box {
      width: 100%;
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    @media screen and (max-width: 780px) {
      .servicos {
        flex-direction: column;
        height: 50rem;
        padding: 0;

        div {
          font-size: 10px;
          width: 15rem;
          height: 15rem;

          img {
            width: 300px;
            height: 150px;
          }
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  color: white !important;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 0;
  bottom: 0;
  margin-top: 1rem;
  background-color: #001F3F;
  font-size: 14px;
  text-align: center;
`;

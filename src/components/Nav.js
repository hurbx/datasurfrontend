import React from 'react';
import styled from 'styled-components';
const Nav = () => {
    return (
        <Wrapper>
            <div className={'social'}>
                <ul>
                    <li>
                        <a href='/'>Home<i className={'pi pi-home'}></i></a>
                    </li>
                    <li>
                        <a href='/utm'>Historial<i className={'pi pi-chart-line'}></i></a>
                    </li>
                </ul>
            </div>
        </Wrapper>

    )
}
export default Nav;

const Wrapper = styled.div`
  .social {
    position: fixed;
    top: 20px;
  }

  ul {
    padding: 0px;
    transform: translate(-200px, 0);
  }

  ul li {
    display: block;
    margin: 5px;
    background: rgba(255, 255, 255, 0.4);
    width: 250px;
    text-align: right;
    padding: 10px;
    border-radius: 0 30px 30px 0;
    transition: all 1s;
  }

  ul li:hover {
    transform: translate(90px, 0);
    background: rgba(255, 255, 255, 0.2);
  }

  ul li:hover i {
    color: black;
    background: ghostwhite;
    transform: rotate(360deg);
    transition: all 1s;
  }

  ul li i {
    margin-left: 10px;
    color: gray;
    background: #fff;
    padding: 10px;
    border-radius: 50%;
    font-size: 20px;
    background: #ffffff;
    text-align: center;
    transform: rotate(0deg);
  }

  a {
    color: #0a1526; //color texto de nav
    text-decoration: none;
    display: block;
  }

`
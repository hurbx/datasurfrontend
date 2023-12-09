import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CustomCard = ({ title, value }) => {
    return (
        <Wrapper>
            <div className={'card'}>
                <div className={'first'}>
                    {value}
                </div>
                <div className={'details'}>
                    <h3>{title}</h3>
                    <h4>{value}</h4>
                    <p className={'card-description'}>
                        Valor actualizado
                        segun Banco Central de Chile
                    </p>
                </div>
            </div>
        </Wrapper>
    )
}
CustomCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};
export default CustomCard;

const Wrapper = styled.div`
  .card {
    position: relative;
    width: 450px;
    height: 200px;
    border-radius: 18px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.54);
    
    .first {
      display: flex;
        align-items: center;
        justify-content: center;
      margin-top: 85px ;
      font-weight: 600;
      font-size: 2em;
    }

    .poster {
      position: relative;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        bottom: -45%;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: 0.3s;
      }

      .img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.3s;
      }
    }

    &:hover .poster::before {
      bottom: 0;
    }

    &:hover .poster img {
      transform: scale(1.1);
    }

    .details {
      position: absolute;
      bottom: -100%;
      left: 0;
      width: 100%;
      height: auto;
      padding: 1.5em 1.5em 2em;
      background: #000a;
      backdrop-filter: blur(16px) saturate(120%);
      transition: 0.3s;
      color: #fff;
      z-index: 2;

      h3 {
        font-weight: 700;
        font-size: 1.5em;
        margin-bottom: 0.3em;
      }

      h4 {
        font-weight: 400;
        font-size: 1em;
        margin-bottom: 0.8em;
        opacity: 0.6;
      }
      
      .desc {
        color: #fff;
        opacity: 0.8;
        line-height: 1.5;
        margin-bottom: 0.8em;
      }
    }

    &:hover .details {
      bottom: 0;
    }
  }
`
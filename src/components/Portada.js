import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Portada = () => {
    return (
        <Wrapper>
            <div className={'shadow'}>
                <div className={'container'}>
                    <img
                        src={'https://imeanticipa.com/wp-content/uploads/2020/06/Datasur.jpg'}
                        alt={'Portada'}
                    />
                </div>
            </div>

        </Wrapper>
    )
};
export default Portada;

const Wrapper = styled.div`
    .container {
      display: flex;
      padding: 1rem;
      margin: 250px auto;
      max-height: 400px;
        max-width: 1200px;
    }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

`
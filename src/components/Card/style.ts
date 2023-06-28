import styled from 'styled-components'


export const ImgContainer = styled.div`
  width: 100%;
  cursor: pointer;

  &:hover{
    h3{
      color: #e62429;
    }
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 400px;
  margin-bottom: 10px;
  object-fit: cover;
  box-shadow: 0px 5px 6px rgba(0,0,0, .4);
  transition: .3s;
  top: 0;
  position: relative;

  &:hover{
    top: -10px;
  }
`;

export const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

import styled from "styled-components";

const CardBox = styled.div`
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.base};
  box-shadow: 1px 1px 4px ${({ theme }) => theme.colors.secondary};
  padding: 10px;
`;
const CardContent = styled.div`
  background: ${({ theme }) => theme.colors.outline};
  opacity: 0.8;
  border-radius: 1px;
  box-shadow: 0 0 2px 4px ${({ theme }) => theme.colors.outline};
  & > div {
    padding: 5px;
  }
`;
const CardTitle = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;
const CardDate = styled.div`
  text-align: right;
`;

export { CardBox, CardContent, CardTitle, CardDate };

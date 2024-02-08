import styled from "styled-components";

export const SSidebarContainer = styled.div`
  position: absolute;
  display: flex;
  top: 286px;
`;

export const SSidebarList = styled.ul`
  display: flex;
  flex-direction: column;

  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: ${(props) => props.color};
  }

  & li:first-child {
    border-radius: 0 4px 0 0;
  }

  & li:last-child {
    border-radius: 0 0 4px 0;
  }
`;

export const SSidebarItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${(props) => props.color || "transparent"};
`;

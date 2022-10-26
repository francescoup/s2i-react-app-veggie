import { FaPizzaSlice, FaHamburger, FaCheese } from "react-icons/fa";
import {GiCakeSlice, GiCupcake, GiBroccoli, GiNoodles, GiChopsticks, GiBowlOfRice, GiFruitBowl } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <List>
      <SLink to={"/categories/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/categories/British"}>
        <GiCupcake />
        <h4>British</h4>
      </SLink>
      <SLink to={"/categories/Chinese"}>
        <GiNoodles />
        <h4>Chinese</h4>
      </SLink>
      <SLink to={"/categories/French"}>
        <FaCheese />
        <h4>French</h4>
      </SLink>
      <SLink to={"/categories/Indian"}>
        <GiBowlOfRice />
        <h4>Indian</h4>
      </SLink>
      <SLink to={"/categories/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/categories/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/categories/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
      <SLink to={"/categories/Spanish"}>
        <GiFruitBowl />
        <h4>Spanish</h4>
      </SLink>
      <SLink to={"/categories/German"}>
        <GiCakeSlice />
        <h4>German</h4>
      </SLink>
      <SLink to={"/categories/Greek"}>
        <GiBroccoli/>
        <h4>Greek</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:nowrap;
  overflow-x: auto;
  margin: 1rem 0;
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 4rem;
  height: 3rem;
  
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    font-weight:200;
    font-size: 1rem;
  }
  svg {
    
    font-size: 1.5rem;
  }
  &.active {
    color:gray;
    border-bottom:2px solid var(--orange-soft);
    svg {
      color: #gray;
    }
    h4 {
      color: gray;
    }
  }
`

export default Categories;
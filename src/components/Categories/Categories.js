import { FaPizzaSlice, FaHamburger, FaCheese } from "react-icons/fa";
import {GiCakeSlice, GiCupcake, GiBroccoli, GiNoodles, GiChopsticks, GiBowlOfRice, GiFruitBowl } from "react-icons/gi";
import { SLink, List} from './style.js'

const Categories = () => {
  return (
    <List>
      <SLink to={"/categories/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/categories/british"}>
        <GiCupcake />
        <h4>British</h4>
      </SLink>
      <SLink to={"/categories/chinese"}>
        <GiNoodles />
        <h4>Chinese</h4>
      </SLink>
      <SLink to={"/categories/french"}>
        <FaCheese />
        <h4>French</h4>
      </SLink>
      <SLink to={"/categories/indian"}>
        <GiBowlOfRice />
        <h4>Indian</h4>
      </SLink>
      <SLink to={"/categories/american"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/categories/thai"}>
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


export default Categories;
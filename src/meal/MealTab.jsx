import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMeal from "../Hook/useMeal";
import MealShow from "./MealShow";
export default function MealTab() {
  const [tabindex, setIndex] = useState(0);
  const [meal] = useMeal();
  // console.log(meal)
  const breakfast = meal.filter((item) => item.category === "Breakfast");
  const launch = meal.filter((item) => item.category === "Launch");
  const dinner = meal.filter((item) => item.category === "Dinner");
  // console.log(breakfast)
  return (
    <div>
      <Tabs defaultIndex={tabindex} onSelect={(index) => setIndex(index)}>
        <TabList>
          <Tab>Breakfast</Tab>
          <Tab>Launch</Tab>
          <Tab>Dinner</Tab>
          <Tab>All Meals</Tab>
        </TabList>
        <TabPanel>
          <MealShow data={breakfast} />
        </TabPanel>
        <TabPanel>
        <MealShow data={launch} />
        </TabPanel>
        <TabPanel>
        <MealShow data={dinner} />
        </TabPanel>
        <TabPanel>
        <MealShow data={meal} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

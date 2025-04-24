import { Helmet } from "react-helmet-async";
import CoverForAll from "../../components/shared/CoverForAll";
import orderImg from "../../assets/Order/order-bg.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import LoadinPan from "../../components/shared/LoadinPan";
import OrderTab from "./OrderTab";

const categories = ["salad", "pizza", "soup", "dessert", "drinks"];

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu, loading] = useMenu();

  if (loading) return <LoadinPan />;

  const categorizedItems = categories.map((cat) =>
    menu.filter((item) => item.category === cat)
  );

  return (
    <section>
      <Helmet>
        <title>Le CélesteBD | Order</title>
      </Helmet>

      {/* Banner */}
      <CoverForAll
        img={orderImg}
        title="Order food"
        sub_title="Lets explore our delicious menu and grab all of it. Bet you can't eat less!"
      />

      {/* Tabs */}
      <div className=" mt-5">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="flex justify-center overflow-x-auto">
            <TabList className="flex uppercase  gap-2 p-2 min-w-fit sm:min-w-0">
              {categories.map((cat, index) => (
                <Tab
                  key={index}
                  className="px-4 sm:px-5 py-1.5 font-bold  cursor-pointer transition-all "
                  selectedClassName=" underline  text-lg "
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Tab>
              ))}
            </TabList>
          </div>

          {categorizedItems.map((items, index) => (
            <TabPanel key={index}>
              <OrderTab items={items} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Order;

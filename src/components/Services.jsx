import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../Utilitis/animationVariants";

const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-5"
        >
          <h2 className=" font-semibold font-secondary text-4xl text-heroBg">
            What can we do Toghter
          </h2>
          <p className="md:w-1/2 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            repudiandae autem, asperiores reiciendis voluptates similique
            excepturi molestias quas dolorem omnis beatae. Dolorum explicabo
            error quis ducimus quae debitis perferendis deserunt?
          </p>
        </motion.div>

        <div className="py-12 md:w-4/5 mx-auto"></div>
        <Tabs>
          <motion.TabList
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-wrap justify-between items-center md:gap-8 gap-4"
          >
            <Tab>Couple Counseling</Tab>
            <Tab>Parenting Sklil</Tab>

            <Tab>Feeling Stuck</Tab>
            <Tab>Self-Confidence</Tab>
          </motion.TabList>

          <TabPanel>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="pt-3 flex flex-col md:flex-row gap-8 mt-8"
            >
              <div className="md:w-1/2 bg-white rounded-lg o-12 font-secondary">
                <h3 className="text-3xl font-semibold text-primary mb-4">
                  Couple Counseling
                </h3>
                <p className="mb-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur suscipit, modi recusandae libero consectetur
                  facilis officiis atque sunt iste cum voluptatem labore eum,
                  laborum impedit sed dignissimos fugiat, veniam odit.
                </p>
                <h4 className="text-xl font-medium text-black mb-4">
                  Benefits
                </h4>
                <ul className="list-disc list-inside space-y-3">
                  <li>Understanding Relationship Dynamic</li>
                  <li>Understanding Relationship Dynamic</li>
                  <li>Understanding Relationship Dynamic</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={serviceImg1}
                  alt=""
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </TabPanel>

          <TabPanel>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="pt-3 flex flex-col md:flex-row gap-8 mt-8"
            >
              <div className="md:w-1/2 bg-white rounded-lg o-12 font-secondary">
                <h3 className="text-3xl font-semibold text-primary mb-4">
                  Parenting Sklil
                </h3>
                <p className="mb-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur suscipit, modi recusandae libero consectetur
                  facilis officiis atque sunt iste cum voluptatem labore eum,
                  laborum impedit sed dignissimos fugiat, veniam odit.
                </p>
                <h4 className="text-xl font-medium text-black mb-4">
                  Benefits
                </h4>
                <ul className="list-disc list-inside space-y-3">
                  <li>Understanding Relationship Dynamic</li>
                  <li>Understanding Relationship Dynamic</li>
                  <li>Understanding Relationship Dynamic</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={serviceImg2}
                  alt=""
                  className="w-full md:h-[446px] h-auto rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </TabPanel>

          <TabPanel>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="pt-3 flex flex-col md:flex-row gap-8 mt-8"
            >
              <div className="md:w-1/2 bg-white rounded-lg o-12 font-secondary">
                <h3 className="text-3xl font-semibold text-primary mb-4">
                  Feeling Stuck
                </h3>
                <p className="mb-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur suscipit, modi recusandae libero consectetur
                  facilis officiis atque sunt iste cum voluptatem labore eum,
                  laborum impedit sed dignissimos fugiat, veniam odit.
                </p>
                <h4 className="text-xl font-medium text-black mb-4">
                  Benefits
                </h4>
                <ul className="list-disc list-inside space-y-3">
                  <li>Understanding Relationship Dynamic</li>
                  <li>Understanding Relationship Dynamic</li>
                  <li>Understanding Relationship Dynamic</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={serviceImg3}
                  alt=""
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </TabPanel>

          <TabPanel>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="pt-3 flex flex-col md:flex-row gap-8 mt-8"
            >
              <div className="md:w-1/2 bg-white rounded-lg o-12 font-secondary">
                <h3 className="text-3xl font-semibold text-primary mb-4">
                  Self-Confidence
                </h3>
                <p className="mb-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur suscipit, modi recusandae libero consectetur
                  facilis officiis atque sunt iste cum voluptatem labore eum,
                  laborum impedit sed dignissimos fugiat, veniam odit.
                </p>
                <h4 className="text-xl font-medium text-black mb-4">
                  Benefits
                </h4>
                <ul className="list-disc list-inside space-y-3">
                  <li>Understanding Relationship Dynamic</li>
                  <li>Understanding Relationship Dynamic</li>
                  <li>Understanding Relationship Dynamic</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={serviceImg4}
                  alt=""
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;

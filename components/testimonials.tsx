import React from "react";
import Container from "./container";
import Mark from "./mark";
import {Statement, statements} from "../data/statements";
import {Avatar} from "./avatar";


const textWithAstrixToMark = (text: string) => {
    const textArray = text.split("**");
    return (
        <>
            {textArray.map((text, index) => {
                if (index % 2 === 0) {
                    return text;
                } else {
                    return <Mark key={index}>{text}</Mark>;
                }
            })}
        </>
    );
};

interface TestimonialProps {
    statement: Statement;
    size?: "big" | "small";
}
const Statement = ({statement, size} : TestimonialProps) => (
      <div className={size === "big" ? "lg:col-span-2 xl:col-auto" : ""}>
        <div
            className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal ">
            {textWithAstrixToMark(statement.text)}
          </p>

          <Avatar
              image={statement.avatar.image}
              name={statement.avatar.name}
              title={statement.avatar.title}
          />
        </div>
      </div>
);

const Testimonials = () => (
    <Container>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {statements.map((statement, index) => (
                <Statement key={index} statement={statement} size={statement.size}/>))
            }
        </div>
    </Container>
)

export default Testimonials;

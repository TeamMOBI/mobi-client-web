import { ReactNode, ReactElement } from "react";

import {
  container,
  imageContainer,
  textContainer,
  titleContainer,
  discriptionContainer,
} from "./Card.css";
import { typos } from "@/styles/typos.css";
import { ButtonProps } from "../Button";
import { FigureProps } from "../Figure";

import Image from "next/image";

export type CardProps = {
  image: string;
  title: string;
  discriptions: (ReactNode | string)[];
  rightChild: ReactElement<ButtonProps> | ReactElement<FigureProps>;
};

export const Card = (props: CardProps) => {
  const { image, title, discriptions, rightChild } = props;
  return (
    <div className={container}>
      <div className={imageContainer}>
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className={textContainer}>
        <span className={`${typos.subtitle} ${titleContainer}`}>{title}</span>
        <div className={discriptionContainer}>
          {discriptions.map((discription, key) => (
            <div className={typos.detail} key={key}>
              {discription}
            </div>
          ))}
        </div>
      </div>
      {rightChild}
    </div>
  );
};

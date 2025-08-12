import {type FC, type ReactNode} from "react";

type CardProps = {
  eyebrow?: string;
  title: string;
  content: string;
  cta?: ReactNode
};

const Card: FC<CardProps> = ({ eyebrow, title, content, cta }) => {
  return (
    <div className="card">
      { eyebrow &&
        <p className="card--eyebrow">{eyebrow}</p>
      }
      <h3 className="card--title">{title}</h3>
      <p className="card--content">{content}</p>
        {cta && 
          <div className="card--cta">{cta}</div>
        }
    </div>
  );
};

export default Card;
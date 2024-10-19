import "./BookReview.css";
import { ComponentPropsWithoutRef } from "react";
import Rating from "./Rating.tsx";

type RatingProps = ComponentPropsWithoutRef<typeof Rating>;
type PickedRatingProps = Pick<RatingProps, "value" | "max" | "icon">;

interface IBookReviewProps extends PickedRatingProps {
  title: string;
  reviewer: string;
  body: string;
}

function BookReview({ title, body, reviewer, ...rest }: IBookReviewProps) {
  return (
    <section className="review">
      <Rating max={5} {...rest} />
      <h3 className="review__title">{title}</h3>
      <h4 className="review__byline">By {reviewer}</h4>
      <p className="review__body">{body}</p>
    </section>
  );
}

export default BookReview;

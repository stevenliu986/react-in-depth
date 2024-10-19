import BookReview from "./BookReview.tsx";

function App() {
  const reviews = [
    {
      title: "Great book",
      reviewer: "Anonymous",
      body: "I loved the book",
      value: 4.8,
    },
    {
      title: "Mediocre Sci-fi",
      reviewer: "Sci-fi Lover",
      body: "The aliens are boring.",
      value: 3.3,
      icon: "👽",
    },
    {
      title: "It's a classic!",
      reviewer: "Hiro Protagonist",
      body: "The perfect romance novel.",
      value: 9.2,
      max: 10,
      icon: "💕",
    },
  ];
  return (
    <div className="reviews">
      {reviews.map(({ title, reviewer, body, ...rest }) => (
        <BookReview
          title={title}
          reviewer={reviewer}
          body={body}
          {...rest}
          key={title}
        />
      ))}
    </div>
  );
}

export default App;

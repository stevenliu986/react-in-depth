import { FC, useState } from "react";
import "./paginable.css";

interface IPaginableProps {
  items: Array<T>;
  Renderer: FC<IPaginableItemProps<T>>;
  className?: string;
}

interface IPaginableItemProps {
  items: T;
  index: number;
}

const PER_PAGE = 4;

export function Paginable<T>({
  items,
  Renderer,
  className,
}: IPaginableProps<T>) {
  const [currentPage, setCurrentPage] = useState(0);
  const startOffset = currentPage * PER_PAGE;
  const endOffset = (currentPage + 1) * PER_PAGE;
  const subset = items.slice(startOffset, endOffset);
  const numPages = Math.ceil(items.length / PER_PAGE);
  const pages = Array.from(Array(numPages)).map((_, i) => i);
  return (
    <section className={className}>
      {subset.map((item, index: number) => (
        <Renderer
          key={index}
          item={item}
          Renderer={Renderer}
          index={index + startOffset}
        />
      ))}
      {numPages > 1 && (
        <ol className="pagination">
          {pages.map((page) => (
            <li className="pagination__item" key={page}>
              {page === currentPage ? (
                page + 1
              ) : (
                <button
                  className="pagination__link"
                  onClick={() => setCurrentPage(page)}
                >
                  {page + 1}
                </button>
              )}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

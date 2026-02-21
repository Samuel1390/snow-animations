"use client";
import "../styles/animations.css";
import GridCodeExamples from "./GridCodeExamples";
import Square from "./Square";
import useCycling from "./hooks/useCycling";
import { useGridContext } from "./context/GridContext";
import GlobalControls from "./GlobalControls";
import useWindowResize from "./hooks/useWindowResize";
const SecuencialGrid = () => {
  const windowWidth = useWindowResize();
  const { shouldAnimate, setIsHovering } = useCycling({
    infinite: false,
    globalPlay: false,
    duration: 1,
    delay: 0,
  });
  const rows = windowWidth && windowWidth < 640 ? 6 : 4;
  const columns = windowWidth && windowWidth < 640 ? 3 : 6;

  return (
    <section id="sequential-animations-section" className="mx-auto w-fit my-10">
      <h2 className="title">Sequential animations</h2>
      <p className="paragraph max-w-100">
        Hover on the grid to see the content loading in sequential order, you
        can configure the sequence: row, column, diagonal and both. Click in the
        properties button and set it to &quot;Custom&quot; to customize the
        animation, properties.
      </p>
      <GlobalControls context={useGridContext} />
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`grid gap-3 grid-cols-3 sm:grid-cols-6 size-fit mx-auto`}
      >
        {renderGrid(rows, columns, shouldAnimate)}
      </div>
      <GridCodeExamples rows={rows} cols={columns} />
    </section>
  );
};

function renderGrid(rows: number, columns: number, shouldAnimate: boolean) {
  const rowsAmount = [];
  for (let i = 0; i < rows; i++) {
    const columnsAmount = [];
    for (let j = 0; j < columns; j++) {
      columnsAmount.push(
        <Square shouldAnimate={shouldAnimate} key={i + "_" + j} i={i} j={j} />,
      );
    }
    rowsAmount.push(columnsAmount);
  }
  return rowsAmount;
}

export default SecuencialGrid;

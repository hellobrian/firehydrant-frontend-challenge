import styles from "./Pagination.module.scss";

interface PaginationProps {
  isPreviousData: boolean;
  setPage: Function;
  page: number;
}

enum ArrowIconVariants {
  Left = "left",
  Right = "right",
}

interface ArrowIconProps {
  variant: ArrowIconVariants;
}

function ArrowIcon(props: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      style={{
        width: "24px",
        height: "24px",
        transform: props.variant === "left" ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <path d="M19.414 27.414l10-10a2 2 0 000-2.828l-10-10a2 2 0 10-2.828 2.828L23.172 14H4a2 2 0 100 4h19.172l-6.586 6.586c-.39.39-.586.902-.586 1.414s.195 1.024.586 1.414a2 2 0 002.828 0z"></path>
    </svg>
  );
}

export function Pagination(props: PaginationProps) {
  const { isPreviousData, setPage, page } = props;
  return (
    <div className={styles.Pagination}>
      <button
        onClick={() => setPage((old: number) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        <ArrowIcon variant={ArrowIconVariants.Left} />
        <span>Previous Page</span>
      </button>{" "}
      <button
        onClick={() => {
          if (!isPreviousData) {
            setPage((old: number) => old + 1);
          }
        }}
      >
        <span>Next Page</span>
        <ArrowIcon variant={ArrowIconVariants.Right} />
      </button>
    </div>
  );
}

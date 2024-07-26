import { ChangeEvent, FC } from "react";
import cx from "classnames";
import { useAutoSize } from "../utils/useAutoSize";
import styles from "./index.module.scss";
import { TextareaProps } from "../types";
import { INITIAL_ROWS } from "../constants";

export const TextareaAutoSize: FC<TextareaProps> = ({
  maxRows,
  value,
  onChange,
  rows = INITIAL_ROWS,
}) => {
  const { isOverflowAuto, setTextAreaHeight, textAreaHeight, textAreaRef } =
    useAutoSize(maxRows, value);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ value: e.target.value });
    setTextAreaHeight("auto");
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    onChange({ value: target.value });
    setTextAreaHeight("auto");
  };

  return (
    <textarea
      ref={textAreaRef}
      className={cx(isOverflowAuto && styles["overflow-auto"], styles.textarea)}
      onChange={handleChange}
      onPaste={handlePaste}
      rows={rows}
      style={{
        height: textAreaHeight,
      }}
      value={value?.value}
    />
  );
};

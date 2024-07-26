export type TextAreaValue = { value: string };

export type TextareaProps = {
  /** максимальное количество строк при достижении которого textarea перестает увеличиваться
   * по высоте и появляется скролл
   * */
  maxRows?: number;
  /** кастомный value поля textarea */
  value: TextAreaValue;
  /** кастомный обработчик события onChange поля textarea */
  onChange: (data: TextAreaValue) => void;
  rows?: number;
};

export const mergeStyle = (
  ...styles: (string | null | undefined | false)[]
) => {
  const validStyles = styles.filter((style): style is string => !!style);

  return validStyles.join(" ");
};


export type handleChange = React.ChangeEvent<
  HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement>

export const handleOnChange = <T extends string | number | object | ''>(
  e: handleChange,
  setter: React.Dispatch<React.SetStateAction<T>>,
  path?: keyof T
) => {
  // const { type, name, value } = e.target;
  const { type, value } = e.target;

  const newValue =
    type === 'number' ?
      value === ''
        ? ''
        : Number(value)
      : value

  setter((prevState) => {
    if (typeof prevState === 'object' && prevState !== null && path) { // name
      return {
        ...prevState,
        [path]: newValue
      }
    } else {
      return (newValue as T)
    }
  })
}
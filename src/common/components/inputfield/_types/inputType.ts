import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';

export type InputProps<T extends FieldValues> = {
  label: string;
  inputName: Path<T>;
  inputType: string;
  register: UseFormRegister<T>;
  inputErrors?: FieldError;
};

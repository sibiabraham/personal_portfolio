import { FieldValues } from 'react-hook-form';
import { InputProps } from './_types/inputType';

const InputField = <T extends FieldValues>({
  label,
  inputName,
  inputType,
  register,
  inputErrors,
}: InputProps<T>) => {
  return (
    <div className="flex flex-col relative mb-7 group">
      <div className="grid grid-cols-2 items-center justify-around">
        <label className="mb-2">{label}</label>
        {inputErrors && (
          <p className=" text-red-500 text-xs px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-end">
            {inputErrors.message}
          </p>
        )}
      </div>

      <div className="relative ">
        <input
          placeholder={`Enter ${label}`}
          type={inputType}
          {...register(inputName)}
          className={`w-full h-12 rounded-xl bg-gray-100 py-2 px-3 text-gray-800 border border-gray-100 focus:border-page-background focus:ring-1 focus:ring-page-background outline-none focus:bg-white focus-within:bg-white ${
            inputErrors ? 'border-red-500' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default InputField;

type ButtonProps = {
  btnText: string;
  btnType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  loadingText: string;
  isLoading?: boolean;
  onClick?: () => void;
};

const Button = ({ btnText, btnType = 'button', isLoading, onClick, loadingText }: ButtonProps) => {
  return (
    <button
      type={btnType}
      disabled={isLoading}
      onClick={onClick}
      className={`text-white py-2 px-5 bg-page-background hover:bg-page-background/80 rounded-xl w-full h-12 font-bold outline-none content-center whitespace-nowrap text-sm ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {isLoading ? loadingText : btnText}
    </button>
  );
};

export default Button;

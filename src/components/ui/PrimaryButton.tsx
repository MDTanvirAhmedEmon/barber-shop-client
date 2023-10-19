

const PrimaryButton = ({children}: {children:React.ReactNode}) => {
    return (
        <button className="text-white bg-primaryColor px-5 py-3 rounded uppercase font-semibold">
        {children}
      </button>
    );
};

export default PrimaryButton;
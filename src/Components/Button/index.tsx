interface IButton {
    text: string;
    primary: boolean;
    alternative?: boolean;
}

const Button = ({ text = "Text",  primary = true, alternative = false }: IButton) => {
    return (
        <>
            {primary ? 
                <button className={(primary && alternative) ? `rounded-full border-none px-12 py-3 bg-main-blue text-white font-bold`
                : `rounded-full border-none px-12 py-3 bg-main-green text-main-blue font-bold`}
                >
                    {text}
                </button>
             : 
                <button className={(!primary && alternative) ? `rounded-full border-2 border-main-blue px-10 py-3 text-main-blue font-bold` 
                : `rounded-full border-2 border-white px-10 py-3 text-white font-bold`}
                >
                    {text}
                </button>
            }
        </>
    );
};

export default Button;

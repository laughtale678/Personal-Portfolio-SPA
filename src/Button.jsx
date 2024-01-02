function Button({
    children,
    type,
    onClick,
    className,
    aria
}) {
    return (
        <button className={className} type={type} onClick={onClick} aria-label={aria}>
            {children}
        </button>
    );
}
export default Button; 
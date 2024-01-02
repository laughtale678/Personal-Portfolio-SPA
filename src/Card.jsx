import './Card.css';
import Button from './Button';

function Card({
    title, pic,
    alt, text, go
}) {
    return (
        <div className='card'>
            <img className={'card__img'}
                alt={alt}
                src={pic}
            />
            <div className='card__content'>
                <h3 className={'card__title'}>{title}</h3>
                <p className={'card__text'}>{text}</p>
            </div>
            <Button type='button' className='card__button'
                onClick={go}>
                Detail
            </Button>
        </div>
    )
}

export default Card;
import cn from 'classnames';
import { SystemIcon } from 'components';

const Button = (props) => {
  const {
    to,
    children,
    type = 'button',
    variant = 'primary',
    block = false,
    arrowIcon = false
  } = props;

  const classNames = cn('btn', `btn--${variant}`, {
    'btn--block': block
  });

  return (
    <>
      {type === 'link' && (
        <a className={classNames} href={to}>
          {children}
          {arrowIcon && <SystemIcon name='arrow-down' />}
        </a>
      )}
      {type !== 'link' && (
        <button type={type} className={classNames}>
          {children}
          {arrowIcon && <i className='icon-arrow-down'></i>}
        </button>
      )}
    </>
  );
};

export default Button;

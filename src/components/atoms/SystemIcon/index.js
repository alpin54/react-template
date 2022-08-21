import cn from 'classnames';

const SystemIcon = ({ className, name = '' }) => {
  const classNames = cn(className, `icon-${name}`);

  return <i className={classNames}></i>;
};

export default SystemIcon;

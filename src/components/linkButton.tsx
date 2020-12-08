import { Button, ButtonProps } from 'reactstrap';

const LinkButton = (props: ButtonProps) => {

  const openLink = () => {
    if (!props.href)
      return;
    window.open(props.href, '_blank');
  };

  return (
    <Button {...props}
      onClick={openLink}
      style={{ ...props.style, ...{ backgroundColor: 'transparent', borderColor: 'white', borderRadius: 50, paddingLeft: 30, paddingRight: 30 } }}>
      {props.children}
    </Button>
  );
}

export default LinkButton;
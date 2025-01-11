import { CSSTransition } from 'react-transition-group';

const AnimatedText = ({
  content,
  inProp,
  classNameProp
}) => (
  <CSSTransition
    in={inProp}
    timeout={20000}
    classNames="textanimation"
    unmountOnExit
  >
    <span style={{ fontSize: '1.3em' }} className={classNameProp}>
      {content}
    </span>
  </CSSTransition>
);
export default AnimatedText;

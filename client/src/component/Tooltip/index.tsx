import React, { Fragment, useState, useRef, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import useOnOutsideClick from '../../hooks/onOutsideClick';

import { StyledTooltip } from './Styles';

const propTypes = {
  className: PropTypes.string,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  offset: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  width: PropTypes.number.isRequired,
  renderLink: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
};

const defaultProps = {
  className: undefined,
  placement: 'bottom',
  offset: {
    top: 0,
    left: 0,
  },
};

declare type Tooltips = {
  className: String,
  placement: any,
  offset: any,
  width: Number,
  renderLink: any,
  renderContent: any
}

const Tooltip = (props: Tooltips) => {
  const [isOpen, setIsOpen] = useState(false);

  const $linkRef = useRef();
  const $tooltipRef = useRef();

  const openTooltip = () => setIsOpen(true);
  const closeTooltip = () => setIsOpen(false);

  useOnOutsideClick([$tooltipRef, $linkRef], isOpen, closeTooltip);

  useLayoutEffect(() => {
    const setTooltipPosition = () => {
      const { top, left } = calcPosition(props.offset, props.placement, $tooltipRef, $linkRef);
      ($tooltipRef.current as any).style.top = `${top}px`;
      ($tooltipRef.current as any).style.left = `${left}px`;
    };

    if (isOpen) {
      setTooltipPosition();
      window.addEventListener('resize', setTooltipPosition);
      window.addEventListener('scroll', setTooltipPosition);
    }

    return () => {
      window.removeEventListener('resize', setTooltipPosition);
      window.removeEventListener('scroll', setTooltipPosition);
    };
  }, [isOpen, props.offset, props.placement]);

  return (
    <Fragment>
      {props.renderLink({ ref: $linkRef, onClick: isOpen ? closeTooltip : openTooltip })}

      {isOpen &&
        ReactDOM.createPortal(
          <StyledTooltip className={props.className} ref={$tooltipRef} width={props.width}>
            {props.renderContent({ close: closeTooltip })}
          </StyledTooltip>,
          $root as any,
        )}
    </Fragment>
  );
};

declare type calcPositionProp = {
  offset: any,
  placement: any,
  $tooltipRef: any,
  $linkRef: any
}

const calcPosition = (props: calcPositionProp) => {
  const margin = 10;
  const finalOffset = { ...defaultProps.offset, ...props.offset };

  const tooltipRect = props.$tooltipRef.current.getBoundingClientRect();
  const linkRect = props.$linkRef.current.getBoundingClientRect();

  const linkCenterY = linkRect.top + linkRect.height / 2;
  const linkCenterX = linkRect.left + linkRect.width / 2;

  const placements = {
    top: {
      top: linkRect.top - margin - tooltipRect.height,
      left: linkCenterX - tooltipRect.width / 2,
    },
    right: {
      top: linkCenterY - tooltipRect.height / 2,
      left: linkRect.right + margin,
    },
    bottom: {
      top: linkRect.bottom + margin,
      left: linkCenterX - tooltipRect.width / 2,
    },
    left: {
      top: linkCenterY - tooltipRect.height / 2,
      left: linkRect.left - margin - tooltipRect.width,
    },
  };
  return {
    top: placements[props.placement].top + finalOffset.top,
    left: placements[props.placement].left + finalOffset.left,
  };
};

const $root = document.getElementById('root');

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;

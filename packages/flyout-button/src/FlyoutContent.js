
import React from 'react';

type Props = {
  hasPadding?: boolean,
  children?: any
}

export const FlyoutContent = (props: Props) => {
  const { hasPadding, children } = props;
  const classes = classNames('m-flyout__content', {
    'has-padding': !!hasPadding
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
}
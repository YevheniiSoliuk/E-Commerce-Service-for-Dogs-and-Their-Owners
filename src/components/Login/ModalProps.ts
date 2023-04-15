import { SyntheticEvent } from 'react';

export type ModalProps = {
  isOpen: boolean;
  close:
    | ((
        event?:
          | SyntheticEvent<Element, Event>
          | KeyboardEvent
          | TouchEvent
          | MouseEvent
          | undefined
      ) => void)
    | undefined
    | (() => void);
  goToOtherModal?:
    | React.MouseEventHandler<HTMLSpanElement>
    | React.MouseEventHandler<HTMLButtonElement>;
  comebackToPrevModal?:
    | React.MouseEventHandler<HTMLSpanElement>
    | React.MouseEventHandler<HTMLButtonElement>;
};

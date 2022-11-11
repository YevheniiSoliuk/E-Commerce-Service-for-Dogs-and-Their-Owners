import {SyntheticEvent} from 'react';

export type ModalProps = {
  isOpen: boolean,
  close: (((event?: SyntheticEvent<Element, Event> | KeyboardEvent | TouchEvent | MouseEvent | undefined) => void) | undefined),
  goToOtherModal?: React.MouseEventHandler<HTMLSpanElement>
}
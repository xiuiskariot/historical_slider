export interface Event {
  year: number;
  content: string;
}
export interface Item {
  label: string;
  events: Event[];
}
export interface CircularListProps {
  dataset: Item[];
}
export interface CircularItemProps {
  index: number;
  handleItemClick: (id: number) => void;
  active: boolean;
  label: string;
}
export interface ItemsNavigationProps {
  itemsLength: number;
  activeIndex: number;
  handleSetActive: (index: number) => void;
}

export interface ItemsSwiperProps {
  items: Item[];
  onResize: () => void;
  handleActiveChange: (index: number) => void;
  activeIndex: number;
}

export interface SvgProps {
  size?: number;
  $circleColor?: string;
  $pathColor?: string;
}

export interface NavIconProps {
  size?: number;
  circleColor?: string;
  pathColor?: string;
  opposite?: boolean;
  onClick?: () => void;
  className?: string;
  fill?: string;
  id?: string;
}
export interface EventSwiperProps {
  events: Event[];
  activeIndex: number;
  onResize: () => void;
}
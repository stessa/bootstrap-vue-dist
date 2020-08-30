import { pluginFactory } from '../utils/plugins'; // Component group plugins

import { AlertPlugin } from './alert';
import { AspectPlugin } from './aspect';
import { AvatarPlugin } from './avatar';
import { BadgePlugin } from './badge';
import { BreadcrumbPlugin } from './breadcrumb';
import { ButtonPlugin } from './button';
import { ButtonGroupPlugin } from './button-group';
import { ButtonToolbarPlugin } from './button-toolbar';
import { CalendarPlugin } from './calendar';
import { CardPlugin } from './card';
import { CarouselPlugin } from './carousel';
import { CollapsePlugin } from './collapse';
import { DropdownPlugin } from './dropdown';
import { EmbedPlugin } from './embed';
import { FormPlugin } from './form';
import { FormCheckboxPlugin } from './form-checkbox';
import { FormDatepickerPlugin } from './form-datepicker';
import { FormFilePlugin } from './form-file';
import { FormGroupPlugin } from './form-group';
import { FormInputPlugin } from './form-input';
import { FormRadioPlugin } from './form-radio';
import { FormRatingPlugin } from './form-rating';
import { FormSelectPlugin } from './form-select';
import { FormSpinbuttonPlugin } from './form-spinbutton';
import { FormTagsPlugin } from './form-tags';
import { FormTextareaPlugin } from './form-textarea';
import { FormTimepickerPlugin } from './form-timepicker';
import { ImagePlugin } from './image';
import { InputGroupPlugin } from './input-group';
import { JumbotronPlugin } from './jumbotron';
import { LayoutPlugin } from './layout';
import { LinkPlugin } from './link';
import { ListGroupPlugin } from './list-group';
import { MediaPlugin } from './media';
import { ModalPlugin } from './modal';
import { NavPlugin } from './nav';
import { NavbarPlugin } from './navbar';
import { OverlayPlugin } from './overlay';
import { PaginationPlugin } from './pagination';
import { PaginationNavPlugin } from './pagination-nav';
import { PopoverPlugin } from './popover';
import { ProgressPlugin } from './progress';
import { SidebarPlugin } from './sidebar';
import { SpinnerPlugin } from './spinner'; // Table plugin includes TableLitePlugin and TableSimplePlugin

import { TablePlugin } from './table';
import { TabsPlugin } from './tabs';
import { TimePlugin } from './time';
import { ToastPlugin } from './toast';
import { TooltipPlugin } from './tooltip'; // Main plugin to install all component group plugins

export var componentsPlugin = /*#__PURE__*/pluginFactory({
  plugins: {
    AlertPlugin: AlertPlugin,
    AspectPlugin: AspectPlugin,
    AvatarPlugin: AvatarPlugin,
    BadgePlugin: BadgePlugin,
    BreadcrumbPlugin: BreadcrumbPlugin,
    ButtonPlugin: ButtonPlugin,
    ButtonGroupPlugin: ButtonGroupPlugin,
    ButtonToolbarPlugin: ButtonToolbarPlugin,
    CalendarPlugin: CalendarPlugin,
    CardPlugin: CardPlugin,
    CarouselPlugin: CarouselPlugin,
    CollapsePlugin: CollapsePlugin,
    DropdownPlugin: DropdownPlugin,
    EmbedPlugin: EmbedPlugin,
    FormPlugin: FormPlugin,
    FormCheckboxPlugin: FormCheckboxPlugin,
    FormDatepickerPlugin: FormDatepickerPlugin,
    FormFilePlugin: FormFilePlugin,
    FormGroupPlugin: FormGroupPlugin,
    FormInputPlugin: FormInputPlugin,
    FormRadioPlugin: FormRadioPlugin,
    FormRatingPlugin: FormRatingPlugin,
    FormSelectPlugin: FormSelectPlugin,
    FormSpinbuttonPlugin: FormSpinbuttonPlugin,
    FormTagsPlugin: FormTagsPlugin,
    FormTextareaPlugin: FormTextareaPlugin,
    FormTimepickerPlugin: FormTimepickerPlugin,
    ImagePlugin: ImagePlugin,
    InputGroupPlugin: InputGroupPlugin,
    JumbotronPlugin: JumbotronPlugin,
    LayoutPlugin: LayoutPlugin,
    LinkPlugin: LinkPlugin,
    ListGroupPlugin: ListGroupPlugin,
    MediaPlugin: MediaPlugin,
    ModalPlugin: ModalPlugin,
    NavPlugin: NavPlugin,
    NavbarPlugin: NavbarPlugin,
    OverlayPlugin: OverlayPlugin,
    PaginationPlugin: PaginationPlugin,
    PaginationNavPlugin: PaginationNavPlugin,
    PopoverPlugin: PopoverPlugin,
    ProgressPlugin: ProgressPlugin,
    SidebarPlugin: SidebarPlugin,
    SpinnerPlugin: SpinnerPlugin,
    TablePlugin: TablePlugin,
    TabsPlugin: TabsPlugin,
    TimePlugin: TimePlugin,
    ToastPlugin: ToastPlugin,
    TooltipPlugin: TooltipPlugin
  }
});
import {icon, id, text, position, style, size, onClick, layout} from './props';
import Widget from './Widget';

// (function () {

class Button extends Widget {
  constructor(props) {
    super(
      'button',
      props,
      { icon, id, text, position, style, size, onClick }
    );
  }

  set icon(v) {
    this.updateProp('icon', v);
  }

  set id(v) {
    this.updateProp('id', v);
  }

  set text(v) {
    this.updateProp('text', v);
  }

  set position(v) {
    this.updateProp('position', v);
  }

  set style(v) {
    this.updateProp('style', v);
  }

  set size(v) {
    this.updateProp('size', v);
  }

  set onClick(v) {
    this.updateProp('onClick', v);
  }
}

/**
 * Creates a button widget with the specified properties.
 * 
 * @param {Object} props
 * @param {string} props.position - The position of the button. The position is always 'fixed' in CSS, but this parameter allows you to specify offsets from `left`, `right`, `top` and `bottom`.
 * @param {string} props.onClick - The callback to be invoked when the button is clicked. The button instance is passed as a parameter to the callback.
 * @param {string=} props.icon - The name of any FontAwesome icon. Defaults to no icon.
 * @param {string=} props.text - The text to be shown on the button. Defaults to no text. If there is no text then the button will be circular.
 * @param {string=} props.style - The style of the button: 'primary', 'success', 'danger' or 'default'.
 * This affects the button colour.
 * @param {string=} props.size - The size of the button: 'default' or 'large'.
 * @param {string=} props.id - This allows you to specify the CSS `id` of the button, but this shouldn't ordinarily be required.
 * 
 * @example
 * $BSD.overlay.button({
 *   position: { top: '20px', right: '20px' },
 *   icon: 'arrow-left',
 *   onClick: () => console.log('clicked 1'),
 * });
 */
function button(props) {
  return new Button(props);
}


/**
 * This is a container widget which is used for creating and positioning multiple child widgets.
 */
 class Container extends Widget {
  constructor(props) {
    super(
      'container',
      props,
      { layout, position }
    );
  }

  /**
   * Change the layout property of the container.
   */
  set layout(v) {
    this.updateProp('layout', v);
  }

  /**
   * Change the position property of the container.
   */
  set position(v) {
    this.updateProp('position', v);
  }

  /**
   * Constructs a {@link Button} component
   * @param {*} buttonProps 
   */
  button(buttonProps) {
    const b = new Button(buttonProps);
    this.addChild(b);
    return b;
  }
}

/**
 * Creates a container widget with the specified properties.
 * 
 * @param {Object} props
 * @param {string} props.position - The position of the container. The position is always 'fixed' in CSS, but this parameter allows you to specify offsets from `left`, `right`, `top` and `bottom`.
 * @param {string} props.layout - The layout of the container: 'row' or 'column'.
 * @returns an instance of a {@link Container} 
 */
function container(props) {
  return new Container(props);
}

const overlay = {
  button,
  container,
};
export default overlay;
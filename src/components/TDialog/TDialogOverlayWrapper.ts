import Vue, { CreateElement, VNode } from 'vue';
import { DismissReason } from '../../types/Dialog';
import TDialogOverlayWrapperTransition from './TDialogOverlayWrapperTransition';

const TDialogOverlayWrapper = Vue.extend({
  name: 'TDialogOverlayWrapper',

  props: {
    getElementCssClass: {
      type: Function,
      required: true,
    },
    dialogShow: {
      type: Boolean,
      required: true,
    },
    titleTag: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: undefined,
    },
    htmlTitle: {
      type: String,
      default: undefined,
    },
    icon: {
      type: String,
      default: undefined,
    },
    htmlIcon: {
      type: String,
      default: undefined,
    },
    textTag: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: undefined,
    },
    htmlText: {
      type: String,
      default: undefined,
    },
    dismissButtonText: {
      type: String,
      required: true,
    },
    dismissButtonAriaLabel: {
      type: String,
      default: undefined,
    },
    primaryButtonText: {
      type: String,
      required: true,
    },
    primaryButtonAriaLabel: {
      type: String,
      default: undefined,
    },
    showCloseButton: {
      type: Boolean,
      required: true,
    },
    closeButtonHtml: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },

  render(createElement: CreateElement): VNode {
    return createElement(
      'div',
      {
        ref: 'wrapper',
        class: this.getElementCssClass('wrapper'),
      },
      [
        createElement(
          TDialogOverlayWrapperTransition,
          {
            props: {
              type: this.type,
              dialogShow: this.dialogShow,
              getElementCssClass: this.getElementCssClass,
              titleTag: this.titleTag,
              title: this.title,
              htmlTitle: this.htmlTitle,
              icon: this.icon,
              htmlIcon: this.htmlIcon,
              textTag: this.textTag,
              text: this.text,
              htmlText: this.htmlText,
              dismissButtonText: this.dismissButtonText,
              dismissButtonAriaLabel: this.dismissButtonAriaLabel,
              primaryButtonText: this.primaryButtonText,
              primaryButtonAriaLabel: this.primaryButtonAriaLabel,
              showCloseButton: this.showCloseButton,
              closeButtonHtml: this.closeButtonHtml,
            },
            on: {
              hide: (e: MouseEvent, reason: DismissReason) => this.$emit('hide', e, reason),
            },
          },
        ),
      ],
    );
  },
});

export default TDialogOverlayWrapper;

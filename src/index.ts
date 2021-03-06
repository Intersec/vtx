import { VNode } from 'vue';
import Component from 'vue-class-component';

import { IntrinsicElements as JsxIntrinsicElements } from './jsx';
import { Vue } from './vue';

/* {{{ JSX */

/* JSX typings distinguish elements (starts with a capital letter)
 * and intrinsic elements (html markups).
 *  * Elements are Vue components, with a type generic describing
 *    the interface of the element.
 *  * Intrinsic elements are described in the 'jsx.ts' file.
 */

declare global {
    namespace JSX {
        interface Element extends VNode {}
        interface ElementClass extends Vue<any> {}
        interface ElementAttributesProperty {
            _jsxProps: {};
        }
        interface IntrinsicElements extends JsxIntrinsicElements {}
    }
}

/* }}} */

export default Vue;

export {
    Component,
};
export { Prop, Watch, Inject, Provide } from 'vue-property-decorator';
export * from './directives';
export * from './vue';
export * from './jsx';

/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from './backdrop';
export var Wrapper_Backdrop = (function () {
    function Wrapper_Backdrop(p0, p1) {
        this._changed = false;
        this.context = new import0.Backdrop(p0, p1);
    }
    Wrapper_Backdrop.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Backdrop.prototype.ngOnDestroy = function () {
    };
    Wrapper_Backdrop.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_Backdrop.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Backdrop.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Backdrop.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Backdrop;
}());
//# sourceMappingURL=backdrop.ngfactory.js.map
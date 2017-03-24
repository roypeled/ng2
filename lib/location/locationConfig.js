/** @module ng2 */
/** */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { is, BrowserLocationConfig } from "ui-router-core";
import { PathLocationStrategy } from "@angular/common";
export var Ng2LocationConfig = (function (_super) {
    __extends(Ng2LocationConfig, _super);
    function Ng2LocationConfig(router, _locationStrategy) {
        _super.call(this, router, is(PathLocationStrategy)(_locationStrategy));
        this._locationStrategy = _locationStrategy;
    }
    Ng2LocationConfig.prototype.baseHref = function (href) {
        return this._locationStrategy.getBaseHref();
    };
    return Ng2LocationConfig;
}(BrowserLocationConfig));
//# sourceMappingURL=locationConfig.js.map
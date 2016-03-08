"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var co_browser_storage_model_1 = require('../co-browser-storage/services/co-browser-storage-model');
var store_1 = require('@ngrx/store');
var exampleDbConfig = require('./example-db-config');
var ThirdPartyUsageCmp = (function () {
    function ThirdPartyUsageCmp(_store, _coStoreModel) {
        this._store = _store;
        this._coStoreModel = _coStoreModel;
        this._coStoreModel.allTrue([
            exampleDbConfig.DEBUG_MODE,
            exampleDbConfig.DEBUG_XHR
        ]).subscribe(function (test) {
            console.log(test);
        });
    }
    ThirdPartyUsageCmp.prototype._createItem = function () {
        this._coStoreModel.createItem({ key: 'thirdPartyItem' });
    };
    ThirdPartyUsageCmp.prototype._logItem = function () {
        console.log(this.thirdPartyItem);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ThirdPartyUsageCmp.prototype, "thirdPartyItem", void 0);
    ThirdPartyUsageCmp = __decorate([
        core_1.Component({
            selector: 'third-party-usage-cmp',
            template: "\n    <p>Third party cmp</p>\n    <button (click)='_createItem()'>Create item 'thirdPartyItem'</button>\n    <span style='color: blue;' (click)='_logItem()'>{{thirdPartyItem ? thirdPartyItem.key : 'item missing'}}</span>\n  "
        }), 
        __metadata('design:paramtypes', [store_1.Store, co_browser_storage_model_1.CoBrowserStorageModel])
    ], ThirdPartyUsageCmp);
    return ThirdPartyUsageCmp;
}());
exports.ThirdPartyUsageCmp = ThirdPartyUsageCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmQtcGFydHktdXNhZ2UtY21wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGhpcmQtcGFydHktdXNhZ2UtY21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFDL0IsQ0FBQyxDQUQ2QztBQUM5Qyx5Q0FBb0MseURBQ3BDLENBQUMsQ0FENEY7QUFDN0Ysc0JBQW9CLGFBQ3BCLENBQUMsQ0FEZ0M7QUFDakMsSUFBWSxlQUFlLFdBQU0scUJBRWpDLENBQUMsQ0FGcUQ7QUFVdEQ7SUFFRSw0QkFDVSxNQUFrQixFQUNsQixhQUFvQztRQURwQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUU1QyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUN6QixlQUFlLENBQUMsVUFBVTtZQUMxQixlQUFlLENBQUMsU0FBUztTQUMxQixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRU8sd0NBQVcsR0FBbkI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQUVPLHFDQUFRLEdBQWhCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQW5CRDtRQUFDLFlBQUssRUFBRTs7OERBQUE7SUFUVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxrT0FJVDtTQUNGLENBQUM7OzBCQUFBO0lBc0JGLHlCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSwwQkFBa0IscUJBcUI5QixDQUFBIn0=
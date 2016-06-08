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
var core_1 = require('@angular/core');
var store_1 = require('@ngrx/store');
var common_1 = require('@angular/common');
var StorageListItemCmp = (function () {
    function StorageListItemCmp(store) {
        this.store = store;
        this.updateItem = new core_1.EventEmitter();
        this.resetItem = new core_1.EventEmitter();
        this.cbsReducer$ = this.store.select('cbsReducer');
        this.storageItemInput = new common_1.Control();
    }
    StorageListItemCmp.prototype.ngOnInit = function () {
        var _this = this;
        this.storageItemInput.updateValue(this.storageItem.value);
        this.cbsReducer$.map(function (cbs) { return cbs['find'](function (i) { return i.key === _this.storageItem.key; }); })
            .subscribe(function (item) {
            var currentValue = _this.storageItemInput.value;
            var incomingValue = item.value;
            // This happens if the value is changed from outside of this component
            if (currentValue !== incomingValue) {
                _this.storageItemInput.updateValue(incomingValue);
            }
        });
        this.storageItemInput.valueChanges
            .subscribe(function (val) {
            _this.updateWrap(val);
        });
    };
    StorageListItemCmp.prototype.updateWrap = function (newValue) {
        this.storageItem.value = newValue;
        this.updateItem.emit(this.storageItem);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], StorageListItemCmp.prototype, "storageItem", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StorageListItemCmp.prototype, "updateItem", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StorageListItemCmp.prototype, "resetItem", void 0);
    StorageListItemCmp = __decorate([
        core_1.Component({
            selector: 'storage-list-item-cmp',
            styles: ["\n    .row {\n      margin-bottom: 10px;\n    }\n    .tiny {\n      font-size: 0.8rem;\n    }\n  "],
            template: "\n    <div class='row'>\n      <div class='col-lg-3 col-xs-4'>\n        <strong>{{storageItem.key}}</strong><br>\n        <span class='tiny'>{{storageItem.storageType}}</span>\n      </div>\n      <div class='col-lg-6 col-xs-4'>\n        <input [type]='storageItem.valueType' class='form-control'\n          [ngFormControl]='storageItemInput'>\n      </div>\n      <div class='col-lg-3 col-xs-4'>\n        <button class='btn btn-info'\n          (click)='resetItem.emit(storageItem)'>\n          Reset\n        </button>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [store_1.Store])
    ], StorageListItemCmp);
    return StorageListItemCmp;
}());
exports.StorageListItemCmp = StorageListItemCmp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1saXN0LWl0ZW0tY21wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RvcmFnZS1saXN0LWl0ZW0tY21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFDckQsQ0FBQyxDQURtRTtBQUNwRSxzQkFBb0IsYUFDcEIsQ0FBQyxDQURnQztBQUNqQyx1QkFBc0IsaUJBRXRCLENBQUMsQ0FGc0M7QUErQnZDO0lBUUUsNEJBQXFCLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFONUIsZUFBVSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ2hDLGNBQVMsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUVqQyxnQkFBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9DLHFCQUFnQixHQUFHLElBQUksZ0JBQU8sRUFBRSxDQUFDO0lBRUMsQ0FBQztJQUUxQyxxQ0FBUSxHQUFSO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUV6RCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQTlCLENBQThCLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQzthQUMxRSxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ2QsSUFBSSxZQUFZLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQTtZQUM5QyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1lBQzlCLHNFQUFzRTtZQUN0RSxFQUFFLENBQUMsQ0FBQyxZQUFZLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUNsRCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFFSixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWTthQUMvQixTQUFTLENBQUMsVUFBQyxHQUFHO1lBQ2IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVksUUFBUTtRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUE7UUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUEvQkQ7UUFBQyxZQUFLLEVBQUU7OzJEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OzBEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O3lEQUFBO0lBaENYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUFFLENBQUMsbUdBT1IsQ0FBQztZQUNGLFFBQVEsRUFBRSx3aUJBaUJUO1NBQ0YsQ0FBQzs7MEJBQUE7SUFrQ0YseUJBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNZLDBCQUFrQixxQkFpQzlCLENBQUEifQ==
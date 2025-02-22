goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.a11y.aria.datatables");
  goog.module.declareLegacyNamespace();
  const State = goog.require("goog.a11y.aria.State");
  let defaultStateValueMap;
  exports.getDefaultValuesMap = function() {
    if (!defaultStateValueMap) {
      defaultStateValueMap = {[State.ATOMIC]:false, [State.AUTOCOMPLETE]:"none", [State.DROPEFFECT]:"none", [State.HASPOPUP]:false, [State.LIVE]:"off", [State.MULTILINE]:false, [State.MULTISELECTABLE]:false, [State.ORIENTATION]:"vertical", [State.READONLY]:false, [State.RELEVANT]:"additions text", [State.REQUIRED]:false, [State.SORT]:"none", [State.BUSY]:false, [State.DISABLED]:false, [State.HIDDEN]:false, [State.INVALID]:"false"};
    }
    return defaultStateValueMap;
  };
  return exports;
});

//# sourceMappingURL=goog.a11y.aria.datatables.js.map

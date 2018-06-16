export function setup(helper) {
  helper.whiteList(['iframe[allowfullscreen]']);
  helper.whiteList(['iframe[mozAllowFullScreen]']);
  helper.whiteList(['iframe[allow]']);
  helper.whiteList(['iframe[webkitallowfullscreen]']);
}

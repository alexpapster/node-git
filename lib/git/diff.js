var Diff = exports.Diff = function(repo, a_path, b_path, a_blob, b_blob, a_mode, b_mode, new_file, deleted_file, diff) {
  Object.defineProperty(this, "repo", { get: function() { return _repo; }, enumerable: true});
  Object.defineProperty(this, "a_path", { get: function() { return _a_path; }, enumerable: true});
  Object.defineProperty(this, "b_path", { get: function() { return _b_path; }, enumerable: true});
  Object.defineProperty(this, "a_mode", { get: function() { return _a_mode; }, enumerable: true});
  Object.defineProperty(this, "b_mode", { get: function() { return _b_mode; }, enumerable: true});
  Object.defineProperty(this, "diff", { get: function() { return _diff; }, enumerable: true});
  Object.defineProperty(this, "a_blob", { get: function() { return _a_blob; }, enumerable: true});
  Object.defineProperty(this, "b_blob", { get: function() { return _b_blob; }, enumerable: true});
  Object.defineProperty(this, "new_file", { get: function() { return _new_file; }, enumerable: true});
  Object.defineProperty(this, "deleted_file", { get: function() { return _deleted_file; }, enumerable: true});



    } else {
      // Unpack index reference
      parts = lines.shift().match(/^index ([0-9A-Fa-f]+)\.\.([0-9A-Fa-f]+) ?(.+)?$/);

      while(lines.length > 0 && !lines[0].match(/^diff/)) {


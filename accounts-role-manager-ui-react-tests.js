// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-role-manager-ui-react.js.
import { name as packageName } from "meteor/othermachines:accounts-role-manager-ui-react";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-role-manager-ui-react - example', function (test) {
  test.equal(packageName, "accounts-role-manager-ui-react");
});

import Text "mo:base/Text";
import Array "mo:base/Array";
import Option "mo:base/Option";

actor citas {
  type Person = {
  name : Text;
  age : Nat;
  email : Text;
};

var person : Person = {
  name = "John";
  age = 30;
  email = "john@example.com";
};


}

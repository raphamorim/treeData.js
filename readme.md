# treeData.js

> A JavaScript plugin to easy create an tree data structure.

## What's a Tree data structure?

In computer science, a tree is a widely used abstract data type (ADT) or data structure implementing this ADT that simulates a hierarchical tree structure, with a root value and subtrees of children, represented as a set of linked nodes.

A tree data structure can be defined recursively (locally) as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.

## Guide to use

It's super simple to use this javascript plugin.

**1.** First you have css in the Head

```html
<link rel="stylesheet" href="treeData.min.css" />
```

**2.** Start treeData.js in body end

```html
<script src="treeData.min.js"></script>
<script type="text/javascript"> 

var tree = {
     father : {value : "Tree Data Structure", parent : ""},
     a : {value : "A", parent : "father"},
     b : {value : "B", parent : "a"},
     c : {value : "C", parent : "a"},
     d : {value : "D", parent : "c"},
     e : {value : "E", parent : "b"},
     f : {value : "F", parent : "c"},
     g : {value : "G", parent : "f"}
};

TreeData(tree, "#element");

</script>
</body>
```

## About

Created with <3 by [raphamorim](http://github.com/raphamorim)

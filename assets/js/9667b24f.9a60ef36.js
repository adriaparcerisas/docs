"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4747],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return t?a.createElement(m,r(r({ref:n},u),{},{components:t})):a.createElement(m,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},86095:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const l={title:"Composite Types"},r=void 0,o={unversionedId:"cadence/language/composite-types",id:"cadence/language/composite-types",title:"Composite Types",description:"Composite types allow composing simpler types into more complex types,",source:"@site/docs/cadence/language/composite-types.mdx",sourceDirName:"cadence/language",slug:"/cadence/language/composite-types",permalink:"/docs/cadence/language/composite-types",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Composite Types"},sidebar:"tutorialSidebar",previous:{title:"Capability-based Access Control",permalink:"/docs/cadence/language/capability-based-access-control"},next:{title:"Constants and Variable Declarations",permalink:"/docs/cadence/language/constants-and-variables"}},s={},c=[{value:"Composite Type Declaration and Creation",id:"composite-type-declaration-and-creation",level:2},{value:"Composite Type Fields",id:"composite-type-fields",level:2},{value:"Composite Type Functions",id:"composite-type-functions",level:2},{value:"Composite Type Subtyping",id:"composite-type-subtyping",level:2},{value:"Composite Type Behaviour",id:"composite-type-behaviour",level:2},{value:"Structures",id:"structures",level:3},{value:"Accessing Fields and Functions of Composite Types Using Optional Chaining",id:"accessing-fields-and-functions-of-composite-types-using-optional-chaining",level:3},{value:"Resources",id:"resources",level:3},{value:"Unbound References / Nulls",id:"unbound-references--nulls",level:2},{value:"Inheritance and Abstract Types",id:"inheritance-and-abstract-types",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Composite types allow composing simpler types into more complex types,\ni.e., they allow the composition of multiple values into one.\nComposite types have a name and consist of zero or more named fields,\nand zero or more functions that operate on the data.\nEach field may have a different type."),(0,i.kt)("p",null,"Composite types can only be declared within a ",(0,i.kt)("a",{parentName:"p",href:"contracts"},"contract")," and nowhere else."),(0,i.kt)("p",null,"There are two kinds of composite types.\nThe kinds differ in their usage and the behaviour\nwhen a value is used as the initial value for a constant or variable,\nwhen the value is assigned to a variable,\nwhen the value is passed as an argument to a function,\nand when the value is returned from a function:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#structures"},(0,i.kt)("strong",{parentName:"a"},"Structures"))," are ",(0,i.kt)("strong",{parentName:"p"},"copied"),", they are value types."),(0,i.kt)("p",{parentName:"li"},"  Structures are useful when copies with independent state are desired.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#resources"},(0,i.kt)("strong",{parentName:"a"},"Resources"))," are ",(0,i.kt)("strong",{parentName:"p"},"moved"),", they are linear types and ",(0,i.kt)("strong",{parentName:"p"},"must")," be used ",(0,i.kt)("strong",{parentName:"p"},"exactly once"),"."),(0,i.kt)("p",{parentName:"li"},"  Resources are useful when it is desired to model ownership\n(a value exists exactly in one location and it should not be lost)."),(0,i.kt)("p",{parentName:"li"},"  Certain constructs in a blockchain represent assets of real, tangible value,\nas much as a house or car or bank account.\nWe have to worry about literal loss and theft,\nperhaps even on the scale of millions of dollars."),(0,i.kt)("p",{parentName:"li"},"  Structures are not an ideal way to represent this ownership because they are copied.\nThis would mean that there could be a risk of having multiple copies\nof certain assets floating around,\nwhich breaks the scarcity requirements needed for these assets to have real value."),(0,i.kt)("p",{parentName:"li"},"  A structure is much more useful for representing information\nthat can be grouped together in a logical way,\nbut doesn't have value or a need to be able to be owned or transferred."),(0,i.kt)("p",{parentName:"li"},"  A structure could for example be used to contain the information associated\nwith a division of a company,\nbut a resource would be used to represent the assets that have been allocated\nto that organization for spending."))),(0,i.kt)("p",null,"Nesting of resources is only allowed within other resource types,\nor in data structures like arrays and dictionaries,\nbut not in structures, as that would allow resources to be copied."),(0,i.kt)("h2",{id:"composite-type-declaration-and-creation"},"Composite Type Declaration and Creation"),(0,i.kt)("p",null,"Structures are declared using the ",(0,i.kt)("inlineCode",{parentName:"p"},"struct")," keyword\nand resources are declared using the ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," keyword.\nThe keyword is followed by the name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct SomeStruct {\n    // ...\n}\n\npub resource SomeResource {\n    // ...\n}\n")),(0,i.kt)("p",null,"Structures and resources are types."),(0,i.kt)("p",null,"Structures are created (instantiated) by calling the type like a function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cadence"},"// instantiate a new struct object and assign it to a constant\nlet a = SomeStruct()\n")),(0,i.kt)("p",null,"The constructor function may require parameters if the ",(0,i.kt)("a",{parentName:"p",href:"#composite-type-fields"},"initializer"),"\nof the composite type requires them."),(0,i.kt)("p",null,"Composite types can only be declared within ",(0,i.kt)("a",{parentName:"p",href:"contracts"},"contracts"),"\nand not locally in functions."),(0,i.kt)("p",null,"Resource must be created (instantiated) by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," keyword\nand calling the type like a function."),(0,i.kt)("p",null,"Resources can only be created in functions and types\nthat are declared in the same contract in which the resource is declared."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cadence"},"// instantiate a new resource object and assign it to a constant\nlet b <- create SomeResource()\n")),(0,i.kt)("h2",{id:"composite-type-fields"},"Composite Type Fields"),(0,i.kt)("p",null,"Fields are declared like variables and constants.\nHowever, the initial values for fields are set in the initializer,\n",(0,i.kt)("strong",{parentName:"p"},"not")," in the field declaration.\nAll fields ",(0,i.kt)("strong",{parentName:"p"},"must")," be initialized in the initializer, exactly once."),(0,i.kt)("p",null,"Having to provide initial values in the initializer might seem restrictive,\nbut this ensures that all fields are always initialized in one location, the initializer,\nand the initialization order is clear."),(0,i.kt)("p",null,"The initialization of all fields is checked statically\nand it is invalid to not initialize all fields in the initializer.\nAlso, it is statically checked that a field is definitely initialized before it is used."),(0,i.kt)("p",null,"The initializer's main purpose is to initialize fields, though it may also contain other code.\nJust like a function, it may declare parameters and may contain arbitrary code.\nHowever, it has no return type, i.e., it is always ",(0,i.kt)("inlineCode",{parentName:"p"},"Void"),"."),(0,i.kt)("p",null,"The initializer is declared using the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," keyword."),(0,i.kt)("p",null,"The initializer always follows any fields."),(0,i.kt)("p",null,"There are three kinds of fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Constant fields")," are also stored in the composite value,\nbut after they have been initialized with a value\nthey ",(0,i.kt)("strong",{parentName:"p"},"cannot")," have new values assigned to them afterwards.\nA constant field must be initialized exactly once."),(0,i.kt)("p",{parentName:"li"},"  Constant fields are declared using the ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," keyword.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Variable fields")," are stored in the composite value\nand can have new values assigned to them."),(0,i.kt)("p",{parentName:"li"},"  Variable fields are declared using the ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," keyword."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field Kind"),(0,i.kt)("th",{parentName:"tr",align:null},"Assignable"),(0,i.kt)("th",{parentName:"tr",align:null},"Keyword"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Variable field")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"var"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Constant field")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"No")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"let"))))),(0,i.kt)("p",null,"In initializers, the special constant ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," refers to the composite value\nthat is to be initialized."),(0,i.kt)("p",null,"If a composite type is to be stored, all its field types must be storable. Non-storable types are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Functions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"accounts"},"Accounts (",(0,i.kt)("inlineCode",{parentName:"a"},"AuthAccount")," / ",(0,i.kt)("inlineCode",{parentName:"a"},"PublicAccount"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"transactions"},"Transactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"references"},"References"),": References are ephemeral.\nConsider ",(0,i.kt)("a",{parentName:"li",href:"capability-based-access-control"},"storing a capability and borrowing it")," when needed instead.")),(0,i.kt)("p",null,"Fields can be read (if they are constant or variable) and set (if they are variable),\nusing the access syntax: the composite value is followed by a dot (",(0,i.kt)("inlineCode",{parentName:"p"},"."),")\nand the name of the field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a structure named `Token`, which has a constant field\n// named `id` and a variable field named `balance`.\n//\n// Both fields are initialized through the initializer.\n//\n// The public access modifier `pub` is used in this example to allow\n// the fields to be read in outer scopes. Fields can also be declared\n// private so they cannot be accessed in outer scopes.\n// Access control will be explained in a later section.\n//\npub struct Token {\n    pub let id: Int\n    pub var balance: Int\n\n    init(id: Int, balance: Int) {\n        self.id = id\n        self.balance = balance\n    }\n}\n")),(0,i.kt)("p",null,"Note that it is invalid to provide the initial value for a field in the field declaration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct StructureWithConstantField {\n    // Invalid: It is invalid to provide an initial value in the field declaration.\n    // The field must be initialized by setting the initial value in the initializer.\n    //\n    pub let id: Int = 1\n}\n")),(0,i.kt)("p",null,"The field access syntax must be used to access fields \u2013  fields are not available as variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Token {\n    pub let id: Int\n\n    init(initialID: Int) {\n        // Invalid: There is no variable with the name `id` available.\n        // The field `id` must be initialized by setting `self.id`.\n        //\n        id = initialID\n    }\n}\n")),(0,i.kt)("p",null,"The initializer is ",(0,i.kt)("strong",{parentName:"p"},"not")," automatically derived from the fields, it must be explicitly declared."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Token {\n    pub let id: Int\n\n    // Invalid: Missing initializer initializing field `id`.\n}\n")),(0,i.kt)("p",null,"A composite value can be created by calling the constructor and providing\nthe field values as arguments."),(0,i.kt)("p",null,"The value's fields can be accessed on the object after it is created."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cadence"},"let token = Token(id: 42, balance: 1_000_00)\n\ntoken.id  // is `42`\ntoken.balance  // is `1_000_000`\n\ntoken.balance = 1\n// `token.balance` is `1`\n\n// Invalid: assignment to constant field\n//\ntoken.id = 23\n")),(0,i.kt)("p",null,"Initializers do not support overloading."),(0,i.kt)("h2",{id:"composite-type-functions"},"Composite Type Functions"),(0,i.kt)("p",null,"Composite types may contain functions.\nJust like in the initializer, the special constant ",(0,i.kt)("inlineCode",{parentName:"p"},"self")," refers to the composite value\nthat the function is called on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cadence"},'// Declare a structure named "Rectangle", which represents a rectangle\n// and has variable fields for the width and height.\n//\npub struct Rectangle {\n    pub var width: Int\n    pub var height: Int\n\n    init(width: Int, height: Int) {\n        self.width = width\n        self.height = height\n    }\n\n    // Declare a function named "scale", which scales\n    // the rectangle by the given factor.\n    //\n    pub fun scale(factor: Int) {\n        self.width = self.width * factor\n        self.height = self.height * factor\n    }\n}\n\nlet rectangle = Rectangle(width: 2, height: 3)\nrectangle.scale(factor: 4)\n// `rectangle.width` is `8`\n// `rectangle.height` is `12`\n')),(0,i.kt)("p",null," Functions do not support overloading."),(0,i.kt)("h2",{id:"composite-type-subtyping"},"Composite Type Subtyping"),(0,i.kt)("p",null,"Two composite types are compatible if and only if they refer to the same declaration by name,\ni.e., nominal typing applies instead of structural typing."),(0,i.kt)("p",null,"Even if two composite types declare the same fields and functions,\nthe types are only compatible if their names match."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a structure named `A` which has a function `test`\n// which has type `((): Void)`.\n//\nstruct A {\n    fun test() {}\n}\n\n// Declare a structure named `B` which has a function `test`\n// which has type `((): Void)`.\n//\nstruct B {\n    fun test() {}\n}\n\n// Declare a variable named which accepts values of type `A`.\n//\nvar something: A = A()\n\n// Invalid: Assign a value of type `B` to the variable.\n// Even though types `A` and `B` have the same declarations,\n// a function with the same name and type, the types' names differ,\n// so they are not compatible.\n//\nsomething = B()\n\n// Valid: Reassign a new value of type `A`.\n//\nsomething = A()\n")),(0,i.kt)("h2",{id:"composite-type-behaviour"},"Composite Type Behaviour"),(0,i.kt)("h3",{id:"structures"},"Structures"),(0,i.kt)("p",null,"Structures are ",(0,i.kt)("strong",{parentName:"p"},"copied")," when\nused as an initial value for constant or variable,\nwhen assigned to a different variable,\nwhen passed as an argument to a function,\nand when returned from a function."),(0,i.kt)("p",null,"Accessing a field or calling a function of a structure does not copy it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a structure named `SomeStruct`, with a variable integer field.\n//\npub struct SomeStruct {\n    pub var value: Int\n\n    init(value: Int) {\n        self.value = value\n    }\n\n    fun increment() {\n        self.value = self.value + 1\n    }\n}\n\n// Declare a constant with value of structure type `SomeStruct`.\n//\nlet a = SomeStruct(value: 0)\n\n// *Copy* the structure value into a new constant.\n//\nlet b = a\n\nb.value = 1\n// NOTE: `b.value` is 1, `a.value` is *`0`*\n\nb.increment()\n// `b.value` is 2, `a.value` is `0`\n")),(0,i.kt)("h3",{id:"accessing-fields-and-functions-of-composite-types-using-optional-chaining"},"Accessing Fields and Functions of Composite Types Using Optional Chaining"),(0,i.kt)("p",null,"If a composite type with fields and functions is wrapped in an optional,\noptional chaining can be used to get those values or call the function without\nhaving to get the value of the optional first."),(0,i.kt)("p",null,"Optional chaining is used by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"?"),"\nbefore the ",(0,i.kt)("inlineCode",{parentName:"p"},".")," access operator for fields or\nfunctions of an optional composite type."),(0,i.kt)("p",null,"When getting a field value or\ncalling a function with a return value, the access returns\nthe value as an optional.\nIf the object doesn't exist, the value will always be ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")),(0,i.kt)("p",null,"When calling a function on an optional like this, if the object doesn't exist,\nnothing will happen and the execution will continue."),(0,i.kt)("p",null,"It is still invalid to access an undeclared field\nof an optional composite type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a struct with a field and method.\npub struct Value {\n    pub var number: Int\n\n    init() {\n        self.number = 2\n    }\n\n    pub fun set(new: Int) {\n        self.number = new\n    }\n\n    pub fun setAndReturn(new: Int): Int {\n        self.number = new\n        return new\n    }\n}\n\n// Create a new instance of the struct as an optional\nlet value: Value? = Value()\n// Create another optional with the same type, but nil\nlet noValue: Value? = nil\n\n// Access the `number` field using optional chaining\nlet twoOpt = value?.number\n// Because `value` is an optional, `twoOpt` has type `Int?`\nlet two = twoOpt ?? 0\n// `two` is `2`\n\n// Try to access the `number` field of `noValue`, which has type `Value?`.\n// This still returns an `Int?`\nlet nilValue = noValue?.number\n// This time, since `noValue` is `nil`, `nilValue` will also be `nil`\n\n// Try to call the `set` function of `value`.\n// The function call is performed, as `value` is not nil\nvalue?.set(new: 4)\n\n// Try to call the `set` function of `noValue`.\n// The function call is *not* performed, as `noValue` is nil\nnoValue?.set(new: 4)\n\n// Call the `setAndReturn` function, which returns an `Int`.\n// Because `value` is an optional, the return value is type `Int?`\nlet sixOpt = value?.setAndReturn(new: 6)\nlet six = sixOpt ?? 0\n// `six` is `6`\n")),(0,i.kt)("p",null,"This is also possible by using the force-unwrap operator (",(0,i.kt)("inlineCode",{parentName:"p"},"!"),")."),(0,i.kt)("p",null,"Forced-Optional chaining is used by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"!"),"\nbefore the ",(0,i.kt)("inlineCode",{parentName:"p"},".")," access operator for fields or\nfunctions of an optional composite type."),(0,i.kt)("p",null,"When getting a field value or calling a function with a return value,\nthe access returns the value.\nIf the object doesn't exist, the execution will panic and revert."),(0,i.kt)("p",null,"It is still invalid to access an undeclared field\nof an optional composite type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a struct with a field and method.\npub struct Value {\n    pub var number: Int\n\n    init() {\n        self.number = 2\n    }\n\n    pub fun set(new: Int) {\n        self.number = new\n    }\n\n    pub fun setAndReturn(new: Int): Int {\n        self.number = new\n        return new\n    }\n}\n\n// Create a new instance of the struct as an optional\nlet value: Value? = Value()\n// Create another optional with the same type, but nil\nlet noValue: Value? = nil\n\n// Access the `number` field using force-optional chaining\nlet two = value!.number\n// `two` is `2`\n\n// Try to access the `number` field of `noValue`, which has type `Value?`\n// Run-time error: This time, since `noValue` is `nil`,\n// the program execution will revert\nlet number = noValue!.number\n\n// Call the `set` function of the struct\n\n// This succeeds and sets the value to 4\nvalue!.set(new: 4)\n\n// Run-time error: Since `noValue` is nil, the value is not set\n// and the program execution reverts.\nnoValue!.set(new: 4)\n\n// Call the `setAndReturn` function, which returns an `Int`\n// Because we use force-unwrap before calling the function,\n// the return value is type `Int`\nlet six = value!.setAndReturn(new: 6)\n// `six` is `6`\n")),(0,i.kt)("h3",{id:"resources"},"Resources"),(0,i.kt)("p",null,"Resources are explained in detail ",(0,i.kt)("a",{parentName:"p",href:"resources"},"in the following page"),"."),(0,i.kt)("h2",{id:"unbound-references--nulls"},"Unbound References / Nulls"),(0,i.kt)("p",null,"There is ",(0,i.kt)("strong",{parentName:"p"},"no")," support for ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("h2",{id:"inheritance-and-abstract-types"},"Inheritance and Abstract Types"),(0,i.kt)("p",null,"There is ",(0,i.kt)("strong",{parentName:"p"},"no")," support for inheritance.\nInheritance is a feature common in other programming languages,\nthat allows including the fields and functions of one type in another type."),(0,i.kt)("p",null,'Instead, follow the "composition over inheritance" principle,\nthe idea of composing functionality from multiple individual parts,\nrather than building an inheritance tree.'),(0,i.kt)("p",null,"Furthermore, there is also ",(0,i.kt)("strong",{parentName:"p"},"no")," support for abstract types.\nAn abstract type is a feature common in other programming languages,\nthat prevents creating values of the type and only\nallows the creation of values of a subtype.\nIn addition, abstract types may declare functions,\nbut omit the implementation of them\nand instead require subtypes to implement them."),(0,i.kt)("p",null,"Instead, consider using ",(0,i.kt)("a",{parentName:"p",href:"interfaces"},"interfaces"),"."))}d.isMDXComponent=!0}}]);
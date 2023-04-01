"use strict";(self.webpackChunkoop345=self.webpackChunkoop345||[]).push([[645],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9303:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=n(3117),o=(n(7294),n(3905));const i={id:"object-terminology",title:"Object Terminology",sidebar_position:2,description:"TBD"},r=void 0,s={unversionedId:"A-Introduction/object-terminology",id:"A-Introduction/object-terminology",title:"Object Terminology",description:"TBD",source:"@site/docs/A-Introduction/object-terminology.md",sourceDirName:"A-Introduction",slug:"/A-Introduction/object-terminology",permalink:"/A-Introduction/object-terminology",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/Intro2OOP/tree/main/docs/A-Introduction/object-terminology.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"object-terminology",title:"Object Terminology",sidebar_position:2,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Welcome to Object-Oriented",permalink:"/A-Introduction/welcome-to-oo"},next:{title:"Modular Programming",permalink:"/A-Introduction/modular-programming"}},l={},c=[{value:"ABSTRACTION",id:"abstraction",level:2},{value:"CLASSES",id:"classes",level:2},{value:"UML",id:"uml",level:2},{value:"The Class Diagram",id:"the-class-diagram",level:3},{value:"Terminology",id:"terminology",level:3},{value:"ENCAPSULATION",id:"encapsulation",level:2},{value:"INHERITANCE AND POLYMORPHISM",id:"inheritance-and-polymorphism",level:2},{value:"Inheritance",id:"inheritance",level:3},{value:"Polymorphism",id:"polymorphism",level:3},{value:"The Three Musketeers",id:"the-three-musketeers",level:3},{value:"SUMMARY",id:"summary",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Part A - Introduction"),(0,o.kt)("h1",{id:"object-terminology"},"Object Terminology"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduce objects and classes"),(0,o.kt)("li",{parentName:"ul"},"Introduce encapsulation, inheritance and polymorphism")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The span of absolute judgement and the span of immediate memory impose severe limitations on the amount of information that we are able to receive, process and remember. By organizing the stimulus input simultaneously into several dimensions and successively into a sequence of chunks, we manage to break this informational bottleneck",(0,o.kt)("br",null)," (Miller, 1956)")),(0,o.kt)("p",null,"Object-oriented programming reflects the way in which we manage day-to-day tasks. Professor Miller of Princeton University demonstrated that most of us can only comprehend about seven chunks of information at a time. As children, we learn to play with small sets of chunks at an early age. As we grow, we learn to break down the problems that we face into sets of manageable chunks."),(0,o.kt)("p",null,"A chunk in object-oriented programming is called an object. The shared structure of a set of similar objects is called their class. This shared structure includes the structure of the data in the similar objects as well as the logic that works on that data."),(0,o.kt)("p",null,"This chapter introduces the concepts of object, class, encapsulation, inheritance and polymorphism. Subsequent chapters elaborate on each concept in detail."),(0,o.kt)("h2",{id:"abstraction"},"ABSTRACTION"),(0,o.kt)("p",null,"Programming solutions to application problems consist of components. The process of designing these solutions involves abstraction. In the C programming language, we abstract common code, store it in a structure or function and refer to that structure or function from possibly multiple places in our source code, thereby avoiding code duplication."),(0,o.kt)("p",null,"An object-oriented programming solution to an application problem consists of components called objects. The process of designing an object-oriented solution likewise involves abstraction. We distinguish the most important features of the object, identify them publicly and hide the less important details within the object itself."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"OOP",src:n(5682).Z,width:"495",height:"314"})),(0,o.kt)("p",null,"Each object has a crisp conceptual boundary and acts in ways appropriate to itself. Compare a book with a set of notes. A book has pages that are bound and can be flipped. The page order is fixed. A set of notes consists of loose pages that can be rearranged in any order. We represent the book as an object and the set of notes as another object; each object has a different structure."),(0,o.kt)("p",null,"The cout and cin objects introduced in the preceding chapter are examples. They have different structures. cout represents the standard output device, which may be a monitor or a printer. The abstraction - the standard output device - is simple and crisp. Internally, the cout object is quite complex. On the other hand, cin represents the standard input device, which may be a keyboard, a tablet or a touch screen. The abstraction - the standard input device - is also simple and crisp. Internally, the cin object is also quite complex."),(0,o.kt)("h2",{id:"classes"},"CLASSES"),(0,o.kt)("p",null,"We describe the structure of similar objects in terms of their class. Objects of the same class have the same structure, but possibly different states. The variable types that describe their states are identical, but generally have different values. For example, all of the books in the figure above have a title and an author, but each book has a different title and a different author."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Classes",src:n(3667).Z,width:"521",height:"411"})),(0,o.kt)("p",null,"We say that each object is an instance of its class."),(0,o.kt)("h2",{id:"uml"},"UML"),(0,o.kt)("p",null,"The Unified Modelling Language (UML) is a general-purpose modeling language developed for describing systems of objects and relationships between their classes. This language defines standard symbols for classes and their relationships. The connectors shown in the relationship diagram below are UML connectors. We use these symbols in this text."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"UML",src:n(7101).Z,width:"508",height:"148"})),(0,o.kt)("h3",{id:"the-class-diagram"},"The Class Diagram"),(0,o.kt)("p",null,"The primary graphic in UML is the ",(0,o.kt)("em",{parentName:"p"},"class diagram"),"; a rectangular box with three compartments:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the upper compartment identifies the class by its name"),(0,o.kt)("li",{parentName:"ol"},"the middle compartment identifies the names and types of its attributes"),(0,o.kt)("li",{parentName:"ol"},"the lower compartment identifies the names, return types and parameter types of its operations")),(0,o.kt)("p",null,"For Example,"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Class Diagram",src:n(2648).Z,width:"482",height:"244"})),(0,o.kt)("p",null,"The naming conventions include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"begin each class name with an upper case letter"),(0,o.kt)("li",{parentName:"ul"},"begin each member name with a lower case letter"),(0,o.kt)("li",{parentName:"ul"},"use camel case throughout all names - capitalize the first letter of every word after the first word")),(0,o.kt)("h3",{id:"terminology"},"Terminology"),(0,o.kt)("p",null,"UML uses the terms attributes and operations. Some object-oriented languages use different terms. Equivalent terms are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"attributes (UML) -> fields, data members, properties, member variables"),(0,o.kt)("li",{parentName:"ul"},"operations (UML) -> methods (Java), procedures, messages, member functions")),(0,o.kt)("p",null,"The C++ language standard uses the terms data members and member functions exclusively."),(0,o.kt)("h2",{id:"encapsulation"},"ENCAPSULATION"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Encapsulation")," is the primary concept of object-oriented programming. It refers to the integration of data and logic within a class' implementation that establishes the crisp interface between the implementation and any client. Encapsulation maintains high cohesion within a class and low coupling between the class' implementation and any one of its clients."),(0,o.kt)("p",null,"A class definition declares the variables and the function prototypes. The variables store each object's data and the functions contain the logic that operates on that data. Clients access objects through calls to these functions without knowledge of the data stored within the objects or the logic that manipulates that data."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ENCAPSULATION",src:n(8794).Z,width:"611",height:"163"})),(0,o.kt)("p",null,"Encapsulation shields the complex details of a class' implementation from its interface; that is, its crisp external representation. Consider the following statement from the preceding chapter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"},'cout << "Welcome to Object-Oriented";\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cout")," refers to the standard output object. Its class defines how to store the object's data in memory and how to control the operations that work with that data. The ",(0,o.kt)("inlineCode",{parentName:"p"},"<<")," operator copies the string to the output object without exposing any of the implementation details. As client programmers, we only see the interface that manages the output process."),(0,o.kt)("p",null,"A well-encapsulated class hides all implementation details within itself. The client does not see the data that the class' object stores within itself or the logic that it uses to manage its internal data. The client only sees a clean and simple interface to the object."),(0,o.kt)("p",null,"As long as the classes in a programming solution are well-encapsulated, any programmer can upgrade the internal structure of any object developed by another programmer without changing any client code."),(0,o.kt)("h2",{id:"inheritance-and-polymorphism"},"INHERITANCE AND POLYMORPHISM"),(0,o.kt)("p",null,"Two object-oriented concepts are prominent in our study of the relationships between classes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/D-Inheritance/derived-classes"},"Inheritance")," - one class inherits the structure of another class"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/E-Polymorphism/overview-of-polymorphism"},"Polymorphism")," - a single interface provides multiple implementations")),(0,o.kt)("p",null,"These are special cases of encapsulation in the sense of distinguishing interface and implementation to produce highly cohesive objects that support minimal coupling to their clients."),(0,o.kt)("h3",{id:"inheritance"},"Inheritance"),(0,o.kt)("p",null,"Inheritance relates classes that share the same structure. In the Figure below, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Hybrid Course")," class inherits the entire structure of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Course")," class and adds some further structure. We say that the hybrid course ",(0,o.kt)("em",{parentName:"p"},"'is-a-kind-of'")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Course")," and depict the inheritance relationship using an arrow drawn from the more specialized class to the more general class:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Inheritance",src:n(3183).Z,width:"128",height:"152"})),(0,o.kt)("p",null,"Inheriting one class from another allows us to utilize existing technology. We only provide the code that implements additional structure."),(0,o.kt)("h3",{id:"polymorphism"},"Polymorphism"),(0,o.kt)("p",null,"Polymorphism relates the implementation for an object based on its type. In the Figure below, the ",(0,o.kt)("inlineCode",{parentName:"p"},"HybridCourse")," object involves a different mode of delivery than the ",(0,o.kt)("inlineCode",{parentName:"p"},"Course")," object, but the same assessments. Both objects belong to the same hierarchy: both are ",(0,o.kt)("inlineCode",{parentName:"p"},"Course")," objects."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"mode()")," query on a ",(0,o.kt)("inlineCode",{parentName:"p"},"Course")," type reports a different result than a ",(0,o.kt)("inlineCode",{parentName:"p"},"mode()")," query on a ",(0,o.kt)("inlineCode",{parentName:"p"},"Hybrid Course")," type. On the other hand, an ",(0,o.kt)("inlineCode",{parentName:"p"},"assessments()")," query on a ",(0,o.kt)("inlineCode",{parentName:"p"},"Course")," type reports the same result as on an ",(0,o.kt)("inlineCode",{parentName:"p"},"HybridCourse")," type."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Polymorphism",src:n(2425).Z,width:"1099",height:"248"})),(0,o.kt)("p",null,"Polymorphic programming allows us to minimize the duplication of code amongst objects that belong to the same inheritance hierarchy."),(0,o.kt)("h3",{id:"the-three-musketeers"},"The Three Musketeers"),(0,o.kt)("p",null,"Encapsulation, inheritance and polymorphism are the cornerstones of any object-oriented programming language."),(0,o.kt)("h2",{id:"summary"},"SUMMARY"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An object is a chunk of information with a crisp conceptual boundary and a well-defined structure."),(0,o.kt)("li",{parentName:"ul"},"Objects are abstractions of the most important chunks of information from a problem domain. They distinguish the different feature sets in the problem domain."),(0,o.kt)("li",{parentName:"ul"},"A class describes the structure common to a set of similar objects. Each object in the set is a single instance of its class."),(0,o.kt)("li",{parentName:"ul"},"Encapsulation hides the implementation details within a class - the internal data and internal logic are invisible to client applications that use objects of that class."),(0,o.kt)("li",{parentName:"ul"},"We can upgrade the structure of a well-encapsulated class without altering any client code."),(0,o.kt)("li",{parentName:"ul"},"The cornerstones of object-oriented programming are encapsulation, inheritance and polymorphism.")))}p.isMDXComponent=!0},5682:function(e,t,n){t.Z=n.p+"assets/images/04-OO-BookShelf-3f7165b33a52cc9533816098bc9fdeda.png"},3667:function(e,t,n){t.Z=n.p+"assets/images/05-Classes-f23f43b1882b7f3bdce8f26d1ea81067.png"},7101:function(e,t,n){t.Z=n.p+"assets/images/06-UML-f40eec3b4de2ecc1b3d04e8fad987237.png"},2648:function(e,t,n){t.Z=n.p+"assets/images/07-ClassDiagram-a9fe82890a68eb567ebefa039e4889b9.png"},8794:function(e,t,n){t.Z=n.p+"assets/images/08-Encapsulation-b23a52343c72df8eb52785fb08812871.png"},3183:function(e,t){t.Z="data:image/png;base64,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"},2425:function(e,t,n){t.Z=n.p+"assets/images/10-Polymorphism-51460b5a1ccd13992fa3462e458a804b.png"}}]);